import { PhoneCTA, PHONE_DISPLAY } from "@/components/phone-cta"
import { FadeInLines } from "@/components/fade-in-lines"
import { FadeIn } from "@/components/scroll-reveal"

export function CTASection({
  eyebrow = "Ready when you are",
  title = "Ready to get back in the game?",
  body = "New patients are typically seen within the week. Call the office &mdash; we&apos;ll handle the rest.",
}: {
  eyebrow?: string
  title?: string
  body?: string
}) {
  return (
    <section className="bg-navy text-bone">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-bone/70">
              {eyebrow}
            </span>
            <FadeInLines as="h2" className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
              {title}
            </FadeInLines>
            <FadeIn
              as="p"
              delay={0.1}
              className="mt-6 max-w-xl text-lg text-bone/80"
            >
              <span dangerouslySetInnerHTML={{ __html: body }} />
            </FadeIn>
          </div>

          <FadeIn as="div" delay={0.25} y={20} className="md:col-span-5 md:text-right">
            <p className="text-xs uppercase tracking-[0.22em] text-bone/60">
              Call the office
            </p>
            <a
              href={`tel:+15551234567`}
              className="mt-3 block font-display text-5xl font-medium tracking-tight tabular hover:text-medal md:text-6xl"
            >
              {PHONE_DISPLAY}
            </a>
            <div className="mt-6 md:flex md:justify-end">
              <PhoneCTA variant="inverted" size="lg" label="Tap to call" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
