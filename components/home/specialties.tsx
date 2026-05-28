import {
  Activity,
  Bone,
  ScanLine,
  RotateCw,
  Footprints,
  type LucideIcon,
} from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import { Stagger } from "@/components/scroll-reveal"
import { SITE } from "@/lib/site"

const SPECIALTY_ICONS: Record<string, LucideIcon> = {
  Shoulder: Bone,
  Knee: Activity,
  Elbow: RotateCw,
  "Ankle & Foot": Footprints,
  "Fractures & Trauma": ScanLine,
}

export function Specialties() {
  return (
    <section id="specialties" className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number="02">Specialties</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink text-balance md:text-5xl">
              A focused practice.
              <br />
              <span className="italic text-accent-blue">A deeper bench.</span>
            </FadeInLines>
            <p className="mt-6 max-w-sm text-ink/70">
              {SITE.specialtiesIntro}
            </p>
          </div>

          <div className="md:col-span-8">
            <Stagger as="ul" stagger={0.12} y={24} className="divide-y divide-hairline border-y border-hairline">
              {SITE.specialties.map((s, i) => {
                const Icon = SPECIALTY_ICONS[s.title] ?? Bone
                const alignRight = i % 2 === 1
                return (
                  <li key={s.title} className="py-8 md:py-10">
                    <div
                      className={`flex flex-col gap-5 md:flex-row md:items-start md:gap-10 ${
                        alignRight ? "md:pl-16" : ""
                      }`}
                    >
                      <div className="flex items-center gap-4 md:w-48 md:shrink-0">
                        <span className="flex h-11 w-11 items-center justify-center border border-navy/30 text-navy">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="font-mono text-xs tabular text-steel md:hidden">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4">
                          <span className="hidden font-mono text-xs tabular text-steel md:inline">
                            0{i + 1}
                          </span>
                          <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                            {s.title}
                          </h3>
                        </div>
                        <ul className="mt-4 grid max-w-2xl gap-1.5 sm:grid-cols-2">
                          {s.conditions.map((condition) => (
                            <li
                              key={condition}
                              className="flex items-start gap-2 text-sm text-ink/75"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/50"
                                aria-hidden
                              />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
