import Image from "next/image"
import type { Metadata } from "next"
import { CTASection } from "@/components/cta-section"
import { SectionLabel } from "@/components/section-label"
import { Award, GraduationCap } from "lucide-react"
import { FadeInLines } from "@/components/fade-in-lines"
import { FadeIn, Stagger } from "@/components/scroll-reveal"
import { SITE } from "@/lib/site"
import { COMMUNITY_PHOTOS } from "@/lib/community"

export const metadata: Metadata = {
  title: "About Dr. Samuel Howard, D.O.",
  description:
    "Fellowship-trained orthopedic sports medicine surgeon at Macomb Orthopedics in Clinton Township, MI. Education, training, credentials, and practice focus — rotator cuff repair, ACL reconstruction, and arthroscopic surgery.",
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
          <SectionLabel>About the practice</SectionLabel>
          <FadeInLines as="h1" className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            Samuel Howard, <span className="italic text-accent-blue">D.O.</span>
          </FadeInLines>
          <FadeInLines as="p" className="mt-6 max-w-2xl text-xl text-ink/75 md:text-2xl">
            {SITE.doctor.credentials}. Orthopedic sports medicine at{" "}
            {SITE.practiceName} in Clinton Township, Michigan.
          </FadeInLines>
        </div>
      </section>

      <section className="border-b border-hairline bg-bone-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionLabel number="01">Practice focus</SectionLabel>
          <FadeInLines as="h2" className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
            Fellowship-trained sports medicine surgery.
          </FadeInLines>
          <FadeInLines as="p" className="mt-8 max-w-4xl text-lg leading-relaxed text-ink/80">
            {SITE.doctor.googleBio}
          </FadeInLines>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-5">
            <FadeIn className="relative" y={20} duration={1}>
              <div className="absolute -inset-2 border border-navy/30" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden bg-bone-muted">
                <Image
                  src="/sam-howard.jpg"
                  alt="Dr. Samuel Howard, orthopedic sports medicine surgeon at Macomb Orthopedics"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7">
            <SectionLabel number="02">Background</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
              From Oxford to Metro Detroit.
            </FadeInLines>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              {SITE.doctor.backgroundBio.map((paragraph) => (
                <FadeInLines as="p" key={paragraph.slice(0, 40)}>
                  {paragraph}
                </FadeInLines>
              ))}
            </div>

            <div className="mt-12">
              <SectionLabel>Education</SectionLabel>
              <Stagger as="ul" stagger={0.08} y={12} className="mt-6 space-y-5">
                {SITE.education.map((entry) => (
                  <li
                    key={entry.institution}
                    className="flex items-start gap-4 border-t border-hairline pt-4"
                  >
                    <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-medal" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-steel">
                        {entry.label}
                      </p>
                      <p className="mt-1 font-medium text-ink">{entry.institution}</p>
                      <p className="mt-0.5 text-sm text-ink/75">{entry.detail}</p>
                    </div>
                  </li>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-bone-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionLabel number="03">Community Care</SectionLabel>
          <FadeInLines as="h2" className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
            Keeping you{" "}
            <span className="italic text-accent-blue">in the game.</span>
          </FadeInLines>

          <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
            {COMMUNITY_PHOTOS.map((photo) => (
              <figure key={photo.src} className="mb-6 break-inside-avoid">
                <div className="relative p-2">
                  <div
                    className="absolute inset-0 border border-navy/30"
                    aria-hidden
                  />
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    className="h-auto w-full"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionLabel number="04">Credentials & memberships</SectionLabel>
          <FadeInLines as="h2" className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
            Board-eligible. Fellowship-trained.
          </FadeInLines>

          <Stagger as="ul" stagger={0.07} y={12} className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {SITE.memberships.map((c) => (
              <li
                key={c}
                className="flex items-start gap-3 border-t border-hairline pt-4"
              >
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-medal" />
                <span className="text-sm leading-snug text-ink">{c}</span>
              </li>
            ))}
          </Stagger>
        </div>
      </section>

      <CTASection
        eyebrow="The next step"
        title="The right plan starts with a conversation."
        body="Call the Macomb Orthopedics office in Clinton Township to schedule a consultation. Most new patients are seen within the week."
      />
    </>
  )
}
