"use client"

import { AnimatedText } from "@/components/animations/animated-text"

/**
 * GSAPDemos — showcases AnimatedText variants on the style guide page.
 * Each demo is labeled so it's clear what animation is in effect.
 */
export function GSAPDemos() {
  return (
    <div className="flex flex-col gap-16">
      {/* Demo 1: Fade-in */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Fade In (scroll-triggered)
        </p>
        <AnimatedText
          animation="fade"
          scrollTrigger
          as="p"
          className="text-2xl font-semibold text-foreground md:text-3xl"
        >
          This text fades in and slides up when it enters the viewport.
        </AnimatedText>
      </div>

      {/* Demo 2: Slide */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Slide In (scroll-triggered)
        </p>
        <AnimatedText
          animation="slide"
          scrollTrigger
          as="p"
          className="text-2xl font-semibold text-foreground md:text-3xl"
        >
          This text slides in from the left on scroll.
        </AnimatedText>
      </div>

      {/* Demo 3: Stagger by word */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Stagger by Word (scroll-triggered)
        </p>
        <AnimatedText
          animation="stagger-word"
          scrollTrigger
          stagger={0.08}
          as="p"
          className="text-2xl font-semibold text-foreground md:text-3xl"
        >
          Each word in this sentence animates one after another.
        </AnimatedText>
      </div>

      {/* Demo 4: Stagger by character */}
      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Stagger by Character (scroll-triggered)
        </p>
        <AnimatedText
          animation="stagger-char"
          scrollTrigger
          stagger={0.04}
          as="p"
          className="text-2xl font-semibold text-foreground md:text-3xl"
        >
          Character-level stagger reveal.
        </AnimatedText>
      </div>
    </div>
  )
}
