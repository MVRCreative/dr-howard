import { Activity, Bone, ScanLine, RotateCw } from "lucide-react"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import { Stagger } from "@/components/scroll-reveal"

const SPECIALTIES = [
  {
    icon: Bone,
    title: "Knee & Shoulder Surgery",
    body: "ACL and meniscus repair, rotator cuff reconstruction, labral repair, and complex revision procedures &mdash; using techniques refined through fellowship training and thousands of cases.",
  },
  {
    icon: Activity,
    title: "Sports Injury Recovery",
    body: "Acute injury management for athletes at every level. Same-week evaluation, imaging review, and a treatment plan that respects your season and your goals.",
  },
  {
    icon: RotateCw,
    title: "Joint Preservation",
    body: "Cartilage restoration, osteotomy, and biologic therapies designed to keep your native joint working longer &mdash; especially for patients too young for replacement.",
  },
  {
    icon: ScanLine,
    title: "Arthroscopy",
    body: "Minimally invasive procedures of the knee, shoulder, hip, and ankle. Smaller incisions, faster rehabilitation, and outcomes you can measure on the field.",
  },
]

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
              Sub-specialty fellowship training means fewer procedures, performed
              more often. Below is what Dr. Howard treats every week.
            </p>
          </div>

          <div className="md:col-span-8">
            <Stagger as="ul" stagger={0.12} y={24} className="divide-y divide-hairline border-y border-hairline">
              {SPECIALTIES.map((s, i) => {
                const Icon = s.icon
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
                        <span className="font-mono text-xs tabular text-accent-blue md:hidden">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4">
                          <span className="hidden font-mono text-xs tabular text-accent-blue md:inline">
                            0{i + 1}
                          </span>
                          <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                            {s.title}
                          </h3>
                        </div>
                        <p
                          className="mt-3 max-w-2xl text-ink/75"
                          dangerouslySetInnerHTML={{ __html: s.body }}
                        />
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
