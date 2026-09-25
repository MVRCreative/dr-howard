"use client"

import { useEffect, useRef, type ElementType, type ReactNode } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

type FadeInProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Vertical offset in px */
  y?: number
  /** Total fade duration */
  duration?: number
  /** Delay before the tween starts */
  delay?: number
  /** ScrollTrigger start position */
  start?: string
}

/**
 * Fades a single block in on scroll. Use for paragraphs, images, cards,
 * or any element that should reveal as a single unit.
 */
export function FadeIn({
  children,
  as: Tag = "div",
  className,
  y = 18,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
}: FadeInProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.style.opacity = "1"
      el.style.transform = "none"
      return
    }

    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92
    const tween = gsap.fromTo(
      el,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: inView
          ? undefined
          : {
              trigger: el,
              start,
              once: true,
            },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [y, duration, delay, start])

  const Comp = Tag as ElementType
  return (
    <Comp ref={ref as never} className={className}>
      {children}
    </Comp>
  )
}

type StaggerProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** CSS selector for direct children to stagger. Defaults to "> *". */
  selector?: string
  /** Per-child delay */
  stagger?: number
  /** Vertical offset in px */
  y?: number
  /** Tween duration per child */
  duration?: number
  /** ScrollTrigger start position */
  start?: string
}

/**
 * Staggers the reveal of direct children on scroll. Use for grids,
 * lists, card rows, step sequences, footer link columns, etc.
 */
export function Stagger({
  children,
  as: Tag = "div",
  className,
  selector,
  stagger = 0.08,
  y = 18,
  duration = 0.8,
  start = "top 85%",
}: StaggerProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const targets = selector
      ? Array.from(el.querySelectorAll<HTMLElement>(selector))
      : (Array.from(el.children) as HTMLElement[])

    if (targets.length === 0) return

    if (prefersReducedMotion()) {
      targets.forEach((t) => {
        t.style.opacity = "1"
        t.style.transform = "none"
      })
      return
    }

    const inView = el.getBoundingClientRect().top < window.innerHeight * 0.92
    const tween = gsap.fromTo(
      targets,
      { y, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: "power2.out",
        scrollTrigger: inView
          ? undefined
          : {
              trigger: el,
              start,
              once: true,
            },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [selector, stagger, y, duration, start])

  const Comp = Tag as ElementType
  return (
    <Comp ref={ref as never} className={className}>
      {children}
    </Comp>
  )
}
