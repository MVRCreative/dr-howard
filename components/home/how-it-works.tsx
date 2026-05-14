import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"

const STEPS = [
  {
    n: "01",
    title: "Call",
    body: "Reach the front desk directly. Most callers reach a real person inside thirty seconds. We&apos;ll gather basics, insurance, and the injury or concern bringing you in.",
  },
  {
    n: "02",
    title: "Consultation",
    body: "Dr. Howard performs the exam himself &mdash; no resident hand-offs. You&apos;ll review imaging together, discuss conservative options first, and leave with a clear understanding of what&apos;s happening.",
  },
  {
    n: "03",
    title: "Treatment plan",
    body: "Whether it&apos;s rehab, an injection, or surgery, you&apos;ll get a written plan with milestones, timelines, and a direct line to the team for questions along the way.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-hairline bg-bone-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="md:flex md:items-end md:justify-between">
          <div>
            <SectionLabel number="04">How it works</SectionLabel>
            <FadeInLines as="h2" className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
              From phone call to <span className="italic text-navy">recovery plan.</span>
            </FadeInLines>
          </div>
          <p className="mt-6 max-w-sm text-ink/70 md:mt-0">
            A straightforward path, designed to respect your time and your training.
          </p>
        </div>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative">
              {i < STEPS.length - 1 && (
                <span
                  className="absolute left-0 right-0 top-6 hidden h-px bg-navy/20 md:block"
                  style={{ left: "3rem", right: "-2rem" }}
                  aria-hidden
                />
              )}
              <div className="flex h-12 w-12 items-center justify-center border border-navy bg-bone font-mono text-sm tabular text-navy">
                {step.n}
              </div>
              <h3 className="mt-6 font-display text-2xl font-medium text-ink">
                {step.title}
              </h3>
              <p
                className="mt-3 max-w-sm text-ink/75"
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
