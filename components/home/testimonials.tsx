"use client"

import Autoplay from "embla-carousel-autoplay"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { REVIEWS } from "@/lib/reviews"

export function Testimonials() {
  return (
    <section className="border-b border-hairline" aria-label="Patient reviews">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel number="04">Patient reviews</SectionLabel>
        <FadeInLines
          as="h2"
          className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl"
        >
          In their <span className="italic text-accent-blue">words.</span>
        </FadeInLines>

        <div className="mt-14">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[
              Autoplay({
                delay: 6000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="relative"
          >
            <CarouselContent>
              {REVIEWS.map((review) => (
                <CarouselItem key={review.name}>
                  <figure className="relative px-2 md:px-8">
                    <span
                      className="absolute -top-6 left-2 font-display text-7xl leading-none text-navy/15 md:left-8"
                      aria-hidden
                    >
                      &ldquo;
                    </span>
                    <blockquote className="font-display text-2xl font-normal leading-snug text-ink text-pretty md:text-[1.65rem]">
                      {review.quote}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-4">
                      <span className="font-medium text-ink">{review.name}</span>
                      <span className="h-1 w-1 rounded-full bg-steel" aria-hidden />
                      <span className="text-sm text-steel">Google review</span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
