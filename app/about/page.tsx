import Image from "next/image"
import { CTASection } from "@/components/cta-section"
import { SectionLabel } from "@/components/section-label"
import { Award } from "lucide-react"
import { FadeInLines } from "@/components/fade-in-lines"
import { FadeIn, Stagger } from "@/components/scroll-reveal"

export const metadata = {
  title: "About Dr. Samuel Howard, D.O.",
  description:
    "Orthopedic surgeon Dr. Samuel Howard, D.O. — fellowship-trained in sports medicine. Education, philosophy of care, and credentials.",
}

const TEAM = [
  {
    name: "Priya Ramaswami, PA-C",
    role: "Physician Assistant",
    detail:
      "Twelve years in orthopedic surgery. Sees patients for follow-ups, runs the post-op protocol clinic, and manages cast and brace fittings.",
  },
  {
    name: "Daniel Okafor, RN",
    role: "Surgical Nurse",
    detail:
      "Operating-room lead. Coordinates surgical scheduling, pre-op clearance, and same-day-of-surgery communication with families.",
  },
  {
    name: "Megan Hartley",
    role: "Office Manager",
    detail:
      "Front-desk lead and the person who actually answers the phone. Handles insurance verification, scheduling, and the occasional crisis.",
  },
]

const CREDENTIALS = [
  "American Osteopathic Academy of Orthopedics",
  "American Osteopathic Association",
  "Arthroscopy Association of North America",
  "American Orthopaedic Society for Sports Medicine",
  "Indiana State Medical Association",
]

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
          <SectionLabel>About the practice</SectionLabel>
          <FadeInLines as="h1" className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            Samuel Howard, <span className="italic text-navy">D.O.</span>
          </FadeInLines>
          <FadeInLines as="p" className="mt-6 max-w-2xl text-xl text-ink/75 md:text-2xl">
            Fellowship-trained orthopedic surgeon. Sports medicine, arthroscopy,
            and joint preservation for patients who measure outcomes in performance.
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
                  src="/sam-howard.png"
                  alt="Dr. Samuel Howard in his clinic"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-7">
            <SectionLabel number="01">Background</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
              A practice shaped by the locker room and the operating room.
            </FadeInLines>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink/80">
              <FadeInLines as="p">
                I came to orthopedics through sport. Four years as a Division I
                wrestler taught me what a hurt shoulder feels like at 6 a.m. on a
                Tuesday, and what it&apos;s like to wait nine months to find out
                whether a knee is ever going to feel the same again. That experience
                shaped how I practice.
              </FadeInLines>
              <FadeInLines as="p">
                I completed medical school at the Philadelphia College of Osteopathic
                Medicine and an orthopedic surgery residency at the Cleveland Clinic.
                A sports medicine fellowship at Hospital for Special Surgery followed,
                where I spent a year working alongside team physicians for the New
                York Giants and the U.S. Open.
              </FadeInLines>
              <FadeInLines as="p">
                The practice I built afterward reflects what I learned in all three
                places: precise surgery is the floor, not the ceiling. The work that
                matters happens in the months before and after &mdash; understanding
                the injury, building the right plan, and being honest about what a
                patient can expect.
              </FadeInLines>
              <FadeInLines as="p">
                My philosophy is straightforward. We try the conservative path first
                when it&apos;s reasonable. When surgery is the right answer, we
                operate with intent and explain everything along the way. And we
                measure success by whether you got back to doing what you wanted to
                do &mdash; not by whether the procedure went smoothly.
              </FadeInLines>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline bg-bone-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionLabel number="02">The team</SectionLabel>
          <FadeInLines as="h2" className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
            The people you&apos;ll actually talk to.
          </FadeInLines>

          <Stagger stagger={0.14} y={20} className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {TEAM.map((member, i) => (
              <div
                key={member.name}
                className="border-t border-navy/30 pt-6"
              >
                <span className="font-mono text-xs tabular text-steel">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.16em] text-navy">
                  {member.role}
                </p>
                <p className="mt-4 text-ink/75">{member.detail}</p>
              </div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <SectionLabel number="03">Credentials & memberships</SectionLabel>
          <FadeInLines as="h2" className="mt-6 max-w-3xl font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
            Board-certified. Continually accredited.
          </FadeInLines>

          <Stagger as="ul" stagger={0.07} y={12} className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {CREDENTIALS.map((c) => (
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

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <figure className="text-center">
            <span className="font-display text-7xl leading-none text-navy/20" aria-hidden>
              &ldquo;
            </span>
            <FadeInLines as="blockquote" className="font-display text-3xl font-normal leading-snug tracking-tight text-ink text-balance md:text-4xl">
              Dr. Howard fixed a labral tear three other surgeons told me I&apos;d have
              to live with. Two years later I&apos;m climbing harder than I was before
              the injury.
            </FadeInLines>
            <figcaption className="mt-8 flex items-center justify-center gap-3 text-sm text-steel">
              <span className="text-ink">James</span>
              <span className="h-1 w-1 rounded-full bg-steel" />
              <span>Competitive rock climber</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <CTASection
        eyebrow="The next step"
        title="The right plan starts with a conversation."
        body="Call the office to schedule a consultation. Most new patients are seen within the week."
      />
    </>
  )
}
