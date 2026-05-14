import { Hero } from "@/components/home/hero"
import { Specialties } from "@/components/home/specialties"
import { Testimonials } from "@/components/home/testimonials"
import { HowItWorks } from "@/components/home/how-it-works"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Newsletter } from "@/components/newsletter"
import { BlogPreview } from "@/components/home/blog-preview"

const FAQ_ITEMS = [
  {
    q: "What insurance does the practice accept?",
    a: "We accept most major commercial plans including Anthem, United Healthcare, Aetna, Cigna, Humana, and Medicare. Call the office for the current list and to verify your specific plan before your first visit.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "Plan for about an hour. Dr. Howard will review your history, perform a focused physical exam, and look at any imaging you bring with you. By the end of the visit you&apos;ll have a working diagnosis and a written plan with next steps.",
  },
  {
    q: "How long is recovery after surgery?",
    a: "It depends entirely on the procedure and the patient. A simple knee arthroscopy may have you back to work in a few days; ACL reconstruction is a nine-to-twelve-month return to full sport. We&apos;ll give you a realistic timeline before we operate, never after.",
  },
  {
    q: "Do you offer second opinions?",
    a: "Yes. We see second-opinion patients every week. Bring your imaging on a disc, your operative reports if applicable, and any questions you have. We&apos;ll give you a candid read &mdash; even if that read is that your current plan is the right one.",
  },
  {
    q: "Is telehealth available?",
    a: "For follow-ups and certain consultations, yes. For new injuries and pre-surgical evaluations we prefer to see you in person so we can perform a proper exam. Ask the front desk if your visit is a good fit for telehealth.",
  },
  {
    q: "How quickly can I be seen?",
    a: "Most new patients are seen within a week. For acute injuries we hold same-day and next-day slots. Call the office &mdash; the front desk will work with you on the soonest workable time.",
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Specialties />
      <Testimonials />
      <HowItWorks />
      <FAQSection items={FAQ_ITEMS} />
      <CTASection />
      <Newsletter />
      <BlogPreview />
    </>
  )
}
