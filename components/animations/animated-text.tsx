"use client"

import { useRef, type ReactNode, type ElementType } from "react"
import { useGSAP } from "@gsap/react"
import { gsap, ScrollTrigger } from "@/lib/gsap"
import { cn } from "@/lib/utils"

gsap.registerPlugin(useGSAP)

type AnimationType = "fade" | "slide" | "stagger-word" | "stagger-char"

interface AnimatedTextProps {
  children: ReactNode
  /** Animation variant */
  animation?: AnimationType
  /** Duration in seconds */
  duration?: number
  /** Delay in seconds */
  delay?: number
  /** Stagger amount between items (for stagger types) */
  stagger?: number
  /** Whether the animation is triggered by scroll */
  scrollTrigger?: boolean
  /** HTML tag to render */
  as?: ElementType
  /** Additional class names */
  className?: string
}

/**
 * AnimatedText
 *
 * A reusable text animation primitive powered by GSAP.
 * Supports fade, slide, and stagger (by word or character) animations.
 * Can optionally be triggered on scroll via GSAP ScrollTrigger.
 *
 * Usage:
 *   <AnimatedText animation="stagger-word" scrollTrigger>
 *     Hello world
 *   </AnimatedText>
 */
export function AnimatedText({
  children,
  animation = "fade",
  duration = 0.8,
  delay = 0,
  stagger = 0.05,
  scrollTrigger = false,
  as: Tag = "div",
  className,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const el = containerRef.current
      if (!el) return

      const scrollConfig = scrollTrigger
        ? {
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        : {}

      switch (animation) {
        case "fade": {
          gsap.fromTo(
            el,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration, delay, ease: "power2.out", ...scrollConfig }
          )
          break
        }
        case "slide": {
          gsap.fromTo(
            el,
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration, delay, ease: "power3.out", ...scrollConfig }
          )
          break
        }
        case "stagger-word": {
          // Split text into words, wrapping each in a span
          const text = el.textContent || ""
          const words = text.split(/\s+/).filter(Boolean)
          el.innerHTML = words
            .map(
              (word) =>
                `<span class="inline-block" style="opacity:0">${word}</span>`
            )
            .join(
              '<span class="inline-block" style="width:0.3em"></span>'
            )

          gsap.fromTo(
            el.querySelectorAll("span.inline-block:not(:empty)"),
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger,
              ease: "power2.out",
              ...scrollConfig,
            }
          )
          break
        }
        case "stagger-char": {
          // Split text into characters, wrapping each in a span
          const text = el.textContent || ""
          el.innerHTML = text
            .split("")
            .map((char) =>
              char === " "
                ? '<span class="inline-block" style="width:0.3em"></span>'
                : `<span class="inline-block" style="opacity:0">${char}</span>`
            )
            .join("")

          gsap.fromTo(
            el.querySelectorAll("span.inline-block:not(:empty)"),
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: duration * 0.6,
              delay,
              stagger: stagger * 0.5,
              ease: "power2.out",
              ...scrollConfig,
            }
          )
          break
        }
      }
    },
    { scope: containerRef }
  )

  return (
    <Tag ref={containerRef} className={cn("will-change-transform", className)}>
      {children}
    </Tag>
  )
}
