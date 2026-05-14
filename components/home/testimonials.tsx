import { SectionLabel } from "@/components/section-label"

const QUOTES = [
  {
    quote:
      "I tore my ACL nine months before the Boston Marathon. Dr. Howard rebuilt it, mapped every week of rehab, and I crossed the finish line. He treats you like the goal matters as much as the surgery does.",
    name: "Elena",
    detail: "Marathon runner",
  },
  {
    quote:
      "Our son dislocated his shoulder twice in one football season. We saw three surgeons. Dr. Howard was the only one who took the time to explain what he&apos;d do, why, and what the rehab would actually look like. He&apos;s playing again.",
    name: "Marcus",
    detail: "High school athlete&apos;s parent",
  },
]

export function Testimonials() {
  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionLabel number="03">In their words</SectionLabel>
        <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
          The work is measured in <span className="italic text-navy">comebacks.</span>
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          {QUOTES.map((q, i) => (
            <figure key={i} className="relative">
              <span
                className="absolute -top-6 left-0 font-display text-7xl leading-none text-navy/15"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="font-display text-2xl font-normal leading-snug text-ink text-pretty md:text-[1.65rem]">
                <span dangerouslySetInnerHTML={{ __html: q.quote }} />
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-hairline pt-4">
                <span className="font-medium text-ink">{q.name}</span>
                <span className="h-1 w-1 rounded-full bg-steel" aria-hidden />
                <span
                  className="text-sm text-steel"
                  dangerouslySetInnerHTML={{ __html: q.detail }}
                />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
