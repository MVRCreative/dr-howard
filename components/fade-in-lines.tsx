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
 * Splits any text content inside `children` into words, then groups those
 * words by their rendered line (via offsetTop) after mount, and fades each
 * line in on scroll with GSAP ScrollTrigger.
 *
 * - Respects prefers-reduced-motion
 * - Re-measures on resize
 * - Preserves inline elements (em, strong, links) as long as their text
 *   is wrapped — non-text React children are skipped from splitting and
 *   rendered as-is.
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
    if (!el || disabled) return

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      el.style.opacity = "1"
      return
    }

    let trigger: ScrollTrigger | null = null
    let resizeRaf = 0

    const splitAndAnimate = () => {
      // Reset any prior split
      const existingWords = el.querySelectorAll<HTMLElement>("[data-fil-word]")
      existingWords.forEach((w) => {
        const parent = w.parentNode
        if (!parent) return
        // Unwrap
        while (w.firstChild) parent.insertBefore(w.firstChild, w)
        parent.removeChild(w)
      })
      el.normalize()

      // Walk text nodes and wrap each word in an inline-block span
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

      if (wordEls.length === 0) return

      // Group words by visual line using offsetTop
      const lines: HTMLElement[][] = []
      let currentTop: number | null = null
      wordEls.forEach((w) => {
        const top = w.offsetTop
        if (currentTop === null || Math.abs(top - currentTop) > 2) {
          lines.push([w])
          currentTop = top
        } else {
          lines[lines.length - 1].push(w)
        }
      })

      // Set initial state per line, animate per line with stagger
      gsap.set(wordEls, { yPercent: 0, y, opacity: 0 })
      el.style.opacity = "1"

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start,
          once: true,
        },
      })

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

      trigger = tl.scrollTrigger ?? null
    }

    // Hide pre-animation to avoid flash
    el.style.opacity = "0"
    // Wait a frame for layout
    const raf = requestAnimationFrame(splitAndAnimate)

    const onResize = () => {
      cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        // Only re-measure (lines may have re-wrapped). Re-run setup.
        trigger?.kill()
        splitAndAnimate()
      })
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(resizeRaf)
      window.removeEventListener("resize", onResize)
      trigger?.kill()
    }
  }, [stagger, duration, y, start, disabled])

  const Comp = Tag as ElementType
  return (
    <Comp ref={ref as never} className={className} style={{ opacity: 0 }}>
      {children}
    </Comp>
  )
}
