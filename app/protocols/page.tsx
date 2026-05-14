import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { SectionLabel } from "@/components/section-label"
import { Download, FileText } from "lucide-react"
import { FadeInLines } from "@/components/fade-in-lines"

export const metadata = {
  title: "Operative protocols & instructions",
  description:
    "Pre-operative, post-operative, and medication guidelines for surgical patients of Dr. Samuel Howard.",
}

const SECTIONS = [
  {
    id: "pre-op",
    n: "01",
    title: "Pre-operative instructions",
    summary:
      "The forty-eight hours before your procedure are as important as the procedure itself. Read this section in full at least one week before surgery.",
    blocks: [
      {
        heading: "Two weeks out",
        body: "Stop all non-steroidal anti-inflammatories (ibuprofen, naproxen, aspirin unless prescribed). These thin the blood and increase bleeding risk during surgery. Acetaminophen (Tylenol) is fine. If you take a daily aspirin under cardiology supervision, do not stop without our approval.",
      },
      {
        heading: "One week out",
        body: "Complete pre-operative clearance with your primary care physician if required by anesthesia. Confirm your ride home is arranged &mdash; you will not be permitted to drive yourself, take a rideshare alone, or take public transportation home after anesthesia.",
      },
      {
        heading: "The night before",
        body: "Nothing to eat or drink after midnight, including water, coffee, gum, or hard candy. Take only the medications we have specifically told you to take with a small sip of water. Shower with the antibacterial soap we provide, paying particular attention to the surgical site.",
      },
      {
        heading: "The day of",
        body: "Wear loose, comfortable clothing &mdash; nothing that needs to go over your head if it&apos;s a shoulder procedure, nothing tight at the surgical site for any procedure. Leave jewelry, contact lenses, and valuables at home. Arrive at the time we tell you, not earlier.",
      },
    ],
  },
  {
    id: "post-op",
    n: "02",
    title: "Post-operative care",
    summary:
      "Recovery is a protocol, not a feeling. Follow these instructions exactly &mdash; especially in the first seventy-two hours, when most preventable complications occur.",
    blocks: [
      {
        heading: "The first 72 hours",
        body: "Ice on, compression on, elevation above the heart. Get up briefly every hour you&apos;re awake to walk to the bathroom and back &mdash; this is the single best thing you can do to prevent blood clots. Do not remove the surgical dressing unless specifically instructed.",
      },
      {
        heading: "Wound care",
        body: "Keep the surgical site clean and dry. No baths, swimming, or soaking until cleared at your follow-up. Brief showers are usually permitted at 48 hours with the site covered &mdash; we&apos;ll give you waterproof bandages. Look at the wound daily for redness spreading beyond the incision, drainage, or warmth.",
      },
      {
        heading: "When to call",
        body: "Call the office for fever above 101.5°F, calf pain or swelling, shortness of breath, drainage from the wound that soaks through a bandage, or pain that worsens after improving. After hours, call the same number &mdash; you&apos;ll be connected to the on-call team.",
      },
      {
        heading: "First follow-up",
        body: "Typically scheduled seven to ten days post-operatively. We&apos;ll remove sutures or staples, review the operative findings with you, and begin formal physical therapy. Bring questions written down &mdash; it&apos;s easy to forget them in the moment.",
      },
    ],
  },
  {
    id: "medication",
    n: "03",
    title: "Medication guidelines",
    summary:
      "Pain management is a balance. Our protocol uses a stepped approach designed to keep you comfortable while minimizing opioid exposure.",
    blocks: [
      {
        heading: "The standard protocol",
        body: "Around-the-clock acetaminophen and an anti-inflammatory (once cleared) form the base. Short-acting opioid medication is provided for breakthrough pain in the first three to five days only. Most patients are off opioids entirely by the first follow-up visit.",
      },
      {
        heading: "Nerve block recovery",
        body: "If you received a regional nerve block, the limb will be numb for twelve to twenty-four hours. Protect it &mdash; you cannot feel pressure, temperature, or strain. Begin pain medication on schedule before the block wears off, not after.",
      },
      {
        heading: "Refills",
        body: "Refill requests require 48 business hours and cannot be processed on weekends. Plan accordingly. If you anticipate needing additional medication beyond the first prescription, raise it at your follow-up visit so we can plan together.",
      },
      {
        heading: "Anticoagulation",
        body: "Some procedures and patient profiles require a blood thinner (aspirin, low-molecular-weight heparin, or similar) for two to six weeks post-op. We&apos;ll review the specific plan with you before discharge and provide written instructions.",
      },
    ],
  },
]

const FAQ_ITEMS = [
  {
    q: "Can I take ibuprofen for general pain before surgery?",
    a: "No. Stop NSAIDs two full weeks before your procedure. Acetaminophen (Tylenol) is fine in the meantime.",
  },
  {
    q: "What if I forget and eat the morning of surgery?",
    a: "Call the office immediately. Depending on what you ate and how close to your scheduled time, we may need to delay or reschedule. Do not try to hide it &mdash; anesthesia complications from a full stomach are serious.",
  },
  {
    q: "How long until I can drive?",
    a: "Procedure-specific. Generally, until you&apos;re off opioid medication and have full control of the limb in question. For most knee and shoulder procedures that&apos;s two to four weeks. We&apos;ll clear you in writing.",
  },
  {
    q: "When can I fly after surgery?",
    a: "We typically recommend waiting at least two weeks for short flights and four weeks for long-haul flights, due to clot risk. Ask before booking.",
  },
]

export default function ProtocolsPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
          <SectionLabel>Clinical protocols</SectionLabel>
          <FadeInLines as="h1" className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            {'Operative protocols & instructions.'}
          </FadeInLines>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/80">
            Compliance with pre- and post-operative instructions is the single
            largest predictor of a successful outcome &mdash; larger than the
            procedure itself in most cases. Read the relevant section in full.
            Print it. Keep it visible at home. If anything is unclear, call the
            office before your surgery, not after.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-12 md:py-24">
          {/* Sticky TOC */}
          <aside className="md:col-span-3">
            <div className="md:sticky md:top-28">
              <p className="text-xs uppercase tracking-[0.18em] text-steel">
                Contents
              </p>
              <ol className="mt-5 space-y-3 border-t border-hairline pt-5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex items-baseline gap-3 text-sm text-ink/80 hover:text-navy"
                    >
                      <span className="font-mono text-xs tabular text-steel">
                        {s.n}
                      </span>
                      <span>{s.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="md:col-span-9">
            {SECTIONS.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-t border-navy/30 py-12 first:border-t-0 first:pt-0 md:py-16"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-sm tabular text-navy/60">
                    {section.n}
                  </span>
                  <FadeInLines as="h2" className="font-display text-4xl font-medium leading-tight tracking-tight text-balance md:text-5xl">
                    {section.title}
                  </FadeInLines>
                </div>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
                  {section.summary}
                </p>

                <div className="mt-10 divide-y divide-hairline border-y border-hairline">
                  {section.blocks.map((b) => (
                    <div
                      key={b.heading}
                      className="grid gap-4 py-7 md:grid-cols-12"
                    >
                      <h3 className="font-display text-lg font-medium tracking-tight text-navy md:col-span-4">
                        {b.heading}
                      </h3>
                      <p
                        className="leading-relaxed text-ink/80 md:col-span-8"
                        dangerouslySetInnerHTML={{ __html: b.body }}
                      />
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-3 border border-navy/30 px-5 py-3 text-sm font-medium text-navy hover:bg-navy hover:text-bone"
                >
                  <FileText className="h-4 w-4" />
                  Download {section.title} (PDF)
                  <Download className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={FAQ_ITEMS} number="04" label="Protocol questions" />
      <CTASection
        eyebrow="Still have questions"
        title="Call before, not after."
        body="If anything in your protocol is unclear, call. We&apos;d rather answer ten questions before surgery than one after."
      />
    </>
  )
}
