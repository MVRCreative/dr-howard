import type { Metadata } from "next"
import { FAQSection } from "@/components/faq-section"
import { SectionLabel } from "@/components/section-label"
import { PHONE_DISPLAY, PHONE_HREF, PhoneCTA } from "@/components/phone-cta"
import { BookOnlineCTA } from "@/components/book-online-cta"
import { JsonLd } from "@/components/seo/json-ld"
import { MapPin, Clock, Car, ShieldCheck } from "lucide-react"
import { FadeInLines } from "@/components/fade-in-lines"
import { FadeIn, Stagger } from "@/components/scroll-reveal"
import { CONTACT_FAQS } from "@/lib/faqs"
import { buildFAQPageSchema } from "@/lib/schema"
import { SITE, formatOfficeHoursLine } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Macomb Orthopedics — Clinton Township, MI",
  description:
    "Call (586) 469-8300 to schedule with Dr. Samuel Howard at Macomb Orthopedics, 38525 Hilldale Street, Clinton Township, MI 48036. Office hours, parking, and insurance information.",
}

const CALL_STEPS = [
  {
    n: "01",
    title: "We&apos;ll answer.",
    body: "A real person, not a phone tree. Most calls are answered inside thirty seconds during office hours.",
  },
  {
    n: "02",
    title: "A short intake.",
    body: "We&apos;ll ask about the injury or concern, your insurance, and any imaging you already have. Five minutes, usually less.",
  },
  {
    n: "03",
    title: "Your appointment.",
    body: "We&apos;ll find the soonest time that works. New patients are typically seen within a week; acute injuries often the same day.",
  },
]

const INSURANCE = [
  "Anthem Blue Cross Blue Shield",
  "United Healthcare",
  "Aetna",
  "Cigna",
  "Humana",
  "Medicare",
  "Tricare",
  "Workers&apos; Compensation",
]

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildFAQPageSchema(CONTACT_FAQS)} />
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 text-center md:pb-24 md:pt-20">
          <SectionLabel className="justify-center">Call the office</SectionLabel>
          <FadeInLines as="h1" className="mt-8 font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            Call the office.
          </FadeInLines>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/75">
            The fastest way to schedule at {SITE.practiceName} in Clinton Township.
            No form to fill out, no waiting on email.
          </p>

          <FadeIn as="div" delay={0.2} y={20} duration={1}>
            <a
              href={PHONE_HREF}
              className="mt-12 block font-display text-6xl font-medium tracking-tight tabular text-navy hover:text-ink sm:text-7xl md:text-[6rem] lg:text-[7rem]"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
          </FadeIn>

          <div className="mt-10 flex flex-col items-center justify-center gap-2 text-sm text-steel">
            <p className="flex items-start gap-2 text-center">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {SITE.hours.map((h, i) => (
                  <span key={h.day}>
                    {i > 0 && <span className="mx-1 text-ink/30">/</span>}
                    {formatOfficeHoursLine(h)}
                  </span>
                ))}
              </span>
            </p>
            <p className="max-w-md text-center text-xs text-steel">
              {SITE.inClinicNote}
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <PhoneCTA variant="solid" size="lg" label="Tap to call" className="md:hidden" />
            <BookOnlineCTA variant="outline" size="lg" label="Or book online at Macomb Orthopedics" />
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionLabel number="01">What to expect</SectionLabel>
          <FadeInLines as="h2" className="mt-6 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
            On the call.
          </FadeInLines>

          <Stagger as="ol" stagger={0.14} y={20} className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {CALL_STEPS.map((s) => (
              <li key={s.n}>
                <div className="flex h-12 w-12 items-center justify-center border border-navy bg-bone font-mono text-sm tabular text-navy">
                  {s.n}
                </div>
                <h3
                  className="mt-6 font-display text-2xl font-medium"
                  dangerouslySetInnerHTML={{ __html: s.title }}
                />
                <p
                  className="mt-3 text-ink/75"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </li>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-b border-hairline bg-bone-muted/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <SectionLabel number="02">The office</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Where to find us.
            </FadeInLines>

            <Stagger as="ul" stagger={0.1} y={14} className="mt-10 space-y-7 text-ink/85">
              <li className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-navy" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-steel">
                    Address
                  </p>
                  <p className="mt-1 text-lg">
                    {SITE.address.line1}
                    <br />
                    {SITE.address.cityStateZip}
                  </p>
                  <p className="mt-2 text-sm text-ink/70">
                    {SITE.practiceName} — serving Metro Detroit and Macomb County
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-navy" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-steel">
                    Hours
                  </p>
                  <p className="mt-1 text-lg">
                    {SITE.hours.map((h) => (
                      <span key={h.day} className="block">
                        {h.day}&nbsp; {h.open}&ndash;{h.close}
                      </span>
                    ))}
                  </p>
                  <p className="mt-3 text-sm text-ink/70">
                    {SITE.inClinicNote}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Car className="mt-1 h-5 w-5 shrink-0 text-navy" />
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-steel">
                    Parking
                  </p>
                  <p className="mt-1 text-lg">
                    Free patient parking is available at the Macomb Orthopedics
                    office on Hilldale Street in Clinton Township.
                  </p>
                </div>
              </li>
            </Stagger>
          </div>

          <div>
            <SectionLabel number="03">Insurance</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              Plans we accept.
            </FadeInLines>
            <p className="mt-5 max-w-md text-ink/75">
              Most major commercial plans, Medicare, and Tricare. Call to verify
              your specific plan before your first visit.
            </p>

            <Stagger as="ul" stagger={0.06} y={10} className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {INSURANCE.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 border-t border-hairline pt-3"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-medal" />
                  <span
                    className="text-sm text-ink"
                    dangerouslySetInnerHTML={{ __html: p }}
                  />
                </li>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <FAQSection items={CONTACT_FAQS} number="04" />
    </>
  )
}
