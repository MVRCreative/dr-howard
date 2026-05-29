import Link from "next/link"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import { Stagger } from "@/components/scroll-reveal"
import { SITE } from "@/lib/site"

export function AreasServed() {
  return (
    <section className="border-b border-hairline bg-bone-muted/40" aria-label="Areas served">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <SectionLabel number="03">Locations</SectionLabel>
        <FadeInLines
          as="h2"
          className="mt-6 max-w-3xl font-display text-3xl font-medium leading-[1.05] tracking-tight text-balance md:text-4xl"
        >
          Serving patients across{" "}
          <span className="italic text-accent-blue">Metro Detroit.</span>
        </FadeInLines>
        <p className="mt-5 max-w-2xl text-lg text-ink/75">
          Dr. Howard sees patients at {SITE.practiceName} in Clinton Township,
          Michigan — convenient to communities throughout Macomb County and the
          greater Detroit area.
        </p>

        <Stagger
          as="ul"
          stagger={0.06}
          y={10}
          className="mt-10 flex flex-wrap gap-3"
        >
          {SITE.areasServed.map((area) => (
            <li
              key={area}
              className="border border-navy/20 px-4 py-2 text-sm text-ink/80"
            >
              {area}
            </li>
          ))}
        </Stagger>

        <p className="mt-8 text-sm text-steel">
          <Link href="/contact" className="text-navy underline-offset-4 hover:underline">
            Contact the Clinton Township office
          </Link>{" "}
          to schedule a consultation.
        </p>
      </div>
    </section>
  )
}
