"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import { Stagger } from "@/components/scroll-reveal"

interface FAQ {
  q: string
  a: string
}

export function FAQSection({
  items,
  number = "05",
  label = "Common questions",
  title,
  className,
}: {
  items: FAQ[]
  number?: string
  label?: string
  title?: string
  className?: string
}) {
  return (
    <section className={`border-b border-hairline ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number={number}>{label}</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
              {title ?? (
                <>
                  Questions, <span className="italic text-accent-blue">answered.</span>
                </>
              )}
            </FadeInLines>
          </div>

          <Stagger
            as="div"
            stagger={0.08}
            y={14}
            selector="[data-slot='accordion-item']"
            className="md:col-span-8"
          >
            <Accordion type="single" collapsible className="border-t border-hairline">
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-hairline"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-medium tracking-tight text-ink hover:no-underline md:text-xl">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pr-8 text-base leading-relaxed text-ink/75">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Stagger>
        </div>
      </div>
    </section>
  )
}
