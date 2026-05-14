import Image from "next/image"
import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { PhoneCTA } from "@/components/phone-cta"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"

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
            <span className="italic text-navy">how you move.</span>
          </FadeInLines>

          <FadeInLines
            as="p"
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75"
          >
            Dr. Samuel Howard, D.O., is a board-certified orthopedic surgeon
            specializing in sports medicine, arthroscopy, and joint preservation.
            He treats weekend athletes and elite competitors with the same
            standard of care &mdash; one focused on return to performance.
          </FadeInLines>

          <div className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <PhoneCTA variant="solid" size="lg" />
            <Link
              href="#specialties"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink/80 hover:text-navy"
            >
              <span className="border-b border-ink/30 pb-0.5 group-hover:border-navy">
                Learn more about the practice
              </span>
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-hairline pt-8">
            <Stat value="18" label="Years of practice" />
            <Stat value="4.2k+" label="Procedures" />
            <Stat value="98%" label="Return to sport" />
          </dl>
        </div>

        <div className="md:col-span-5 lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-2 border border-navy/30" aria-hidden />
            <div className="relative aspect-[4/5] overflow-hidden bg-bone-muted">
              <Image
                src="/sam-howard.png"
                alt="Portrait of Dr. Samuel Howard, D.O."
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 42vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 hidden border border-navy/30 bg-bone px-4 py-3 md:block">
              <p className="font-display text-sm leading-tight text-ink">
                Samuel Howard, <span className="text-steel">D.O.</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-steel">
                Board-certified, AOA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-3xl font-medium tabular text-navy sm:text-4xl">
        {value}
      </dd>
      <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-steel">
        {label}
      </p>
    </div>
  )
}
