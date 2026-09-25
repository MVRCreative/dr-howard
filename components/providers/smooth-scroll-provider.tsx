"use client"

import { useEffect, useRef, type ReactNode } from "react"
import Lenis from "lenis"
import { gsap, ScrollTrigger } from "@/lib/gsap"

/**
 * SmoothScrollProvider
 *
 * Initializes Lenis for smooth scrolling and wires it into GSAP's
 * ScrollTrigger so scroll-driven animations stay in sync.
 *
 * Wrap your app content with this provider in the root layout.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Create Lenis instance
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    })
    lenisRef.current = lenis

    // Connect Lenis scroll position to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    // Use GSAP ticker for the Lenis RAF loop so everything is in sync
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000) // GSAP ticker time is in seconds, Lenis expects ms
    }
    gsap.ticker.add(tickerCallback)
    gsap.ticker.lagSmoothing(0) // Prevent GSAP from pausing on tab switch
    requestAnimationFrame(() => ScrollTrigger.refresh())

    return () => {
      gsap.ticker.remove(tickerCallback)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return <>{children}</>
}
