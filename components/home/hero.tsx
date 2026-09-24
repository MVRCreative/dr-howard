import Image from "next/image"
import { PhoneCTA } from "@/components/phone-cta"
import { BookOnlineCTA } from "@/components/book-online-cta"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import { FadeIn } from "@/components/scroll-reveal"
import { SITE } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-20 lg:gap-16">
        <div className="md:col-span-7 lg:col-span-7">
          <SectionLabel number="01">Sports orthopedics</SectionLabel>

          <FadeInLines
            as="h1"
            className="mt-8 font-display text-[2.75rem] font-medium leading-[1.02] tracking-tight text-ink text-balance sm:text-6xl lg:text-7xl"
          >
            Orthopedic surgery built around{" "}
            <span className="italic text-accent-blue">how you move.</span>
          </FadeInLines>

          <FadeInLines
            as="p"
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75"
          >
            {SITE.doctor.shortBio}
          </FadeInLines>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <PhoneCTA variant="solid" size="lg" />
            <BookOnlineCTA variant="outline" size="lg" />
          </div>

          <FadeIn className="mt-10" y={16} duration={0.8} delay={0.2}>
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
              <p className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                {SITE.teamPhysician.title}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {SITE.teamPhysician.logos.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={88}
                    height={88}
                    className="size-[5.5rem] object-contain"
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <FadeIn y={24} duration={1.1} delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-2 border border-navy/30" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden bg-bone-muted">
                <Image
                  src="/sam-howard.jpg"
                  alt={`Portrait of ${SITE.doctor.name}`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 hidden border border-navy/30 bg-bone px-4 py-3 md:block">
                <p className="font-display text-sm leading-tight text-ink">
                  Samuel Howard, <span className="text-steel">{SITE.doctor.degree}</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-steel">
                  Fellowship-trained · {SITE.practiceName}
                </p>
              </div>
            </div>
            <ul className="mt-10 space-y-2.5 pl-1 text-sm leading-snug text-ink/80 md:mt-12">
              {SITE.doctor.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 bg-navy"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
