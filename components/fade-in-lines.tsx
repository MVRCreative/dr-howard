"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type Props = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Delay between each line, in seconds */
  stagger?: number
  /** Total fade duration per line */
  duration?: number
  /** Vertical offset in px */
  y?: number
  /** Start position for ScrollTrigger */
  start?: string
  /** Disable animation (renders plain content) */
  disabled?: boolean
}

/**
 * Splits all text content inside `children` into words, groups words by their
 * visual line via offsetTop, and animates each line on scroll-enter with GSAP.
 *
 * Works for any inline content — headings, paragraphs, blockquotes — including
 * inline elements (em, strong, span, a) and content from dangerouslySetInnerHTML.
 *
 * - Waits for fonts to load before measuring (prevents one-line miscalculation)
 * - Respects prefers-reduced-motion
 * - Re-measures on resize
 */
export function FadeInLines({
  children,
  as: Tag = "div",
  className,
  stagger = 0.08,
  duration = 0.9,
  y = 14,
  start = "top 85%",
  disabled,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (disabled) {
      el.style.opacity = "1"
      return
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      el.style.opacity = "1"
      return
    }

    let trigger: ScrollTrigger | null = null
    let resizeRaf = 0
    let cancelled = false

    const unwrap = () => {
      const existingWords = el.querySelectorAll<HTMLElement>("[data-fil-word]")
      existingWords.forEach((w) => {
        const parent = w.parentNode
        if (!parent) return
        while (w.firstChild) parent.insertBefore(w.firstChild, w)
        parent.removeChild(w)
      })
      el.normalize()
    }

    const splitAndAnimate = () => {
      if (cancelled) return
      unwrap()

      // Walk text nodes; wrap each word in inline-block span
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (!node.nodeValue || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT
          return NodeFilter.FILTER_ACCEPT
        },
      })

      const textNodes: Text[] = []
      let n: Node | null = walker.nextNode()
      while (n) {
        textNodes.push(n as Text)
        n = walker.nextNode()
      }

      const wordEls: HTMLElement[] = []
      textNodes.forEach((tn) => {
        const text = tn.nodeValue || ""
        const frag = document.createDocumentFragment()
        const parts = text.split(/(\s+)/)
        parts.forEach((part) => {
          if (!part) return
          if (/^\s+$/.test(part)) {
            frag.appendChild(document.createTextNode(part))
          } else {
            const span = document.createElement("span")
            span.dataset.filWord = ""
            span.style.display = "inline-block"
            span.style.willChange = "transform, opacity"
            span.textContent = part
            frag.appendChild(span)
            wordEls.push(span)
          }
        })
        tn.parentNode?.replaceChild(frag, tn)
      })

      if (wordEls.length === 0) {
        el.style.opacity = "1"
        return
      }

      // Group words by visual line. Use half the computed line-height
      // as tolerance, which is robust to baseline variation and
      // descender hangs across element types.
      const cs = window.getComputedStyle(el)
      const lh = parseFloat(cs.lineHeight)
      const tolerance = Number.isFinite(lh) && lh > 0 ? lh / 2 : 6

      const lines: HTMLElement[][] = []
      let currentTop: number | null = null
      wordEls.forEach((w) => {
        const top = w.offsetTop
        if (currentTop === null || Math.abs(top - currentTop) > tolerance) {
          lines.push([w])
          currentTop = top
        } else {
          lines[lines.length - 1].push(w)
        }
      })

      // Hide words only after they are wrapped so a hung font/ScrollTrigger
      // load cannot leave the original copy stuck at opacity 0.
      gsap.set(wordEls, { y, opacity: 0 })
      el.style.opacity = "1"

      const tl = gsap.timeline({ paused: true })

      lines.forEach((line, i) => {
        tl.to(
          line,
          {
            y: 0,
            opacity: 1,
            duration,
            ease: "power2.out",
          },
          i * stagger,
        )
      })

      const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92
      if (inView) {
        tl.play()
      } else {
        trigger = ScrollTrigger.create({
          trigger: el,
          start,
          once: true,
          onEnter: () => tl.play(),
        })
      }
    }

    // Keep copy visible until split actually starts. A hung fonts.ready
    // used to leave headings at opacity 0 forever.
    el.style.opacity = "1"

    let started = false
    const startWhenReady = () => {
      if (cancelled || started) return
      started = true
      requestAnimationFrame(splitAndAnimate)
    }
    const fontTimeout = window.setTimeout(startWhenReady, 400)
    if (typeof document !== "undefined" && document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(() => {
        window.clearTimeout(fontTimeout)
        startWhenReady()
      })
    } else {
      window.clearTimeout(fontTimeout)
      startWhenReady()
    }

    const onResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        trigger?.kill()
        splitAndAnimate()
      })
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelled = true
      window.clearTimeout(fontTimeout)
      cancelAnimationFrame(resizeRaf)
      window.removeEventListener("resize", onResize)
      trigger?.kill()
    }
  }, [stagger, duration, y, start, disabled])

  const Comp = Tag as ElementType
  return (
    <Comp ref={ref as never} className={className}>
      {children}
    </Comp>
  )
}
