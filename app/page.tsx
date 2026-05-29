import type { Metadata } from "next"
import { Hero } from "@/components/home/hero"
import { Specialties } from "@/components/home/specialties"
import { AreasServed } from "@/components/home/areas-served"
import { Testimonials } from "@/components/home/testimonials"
import { HowItWorks } from "@/components/home/how-it-works"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Newsletter } from "@/components/newsletter"
import { JsonLd } from "@/components/seo/json-ld"
import { HOME_FAQS } from "@/lib/faqs"
import { buildFAQPageSchema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Orthopedic Sports Medicine Surgeon in Clinton Township, MI",
  description:
    "Dr. Samuel Howard, D.O. — fellowship-trained orthopedic sports medicine surgeon at Macomb Orthopedics. Rotator cuff repair, ACL reconstruction, shoulder replacement, and non-surgical care serving Metro Detroit.",
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFAQPageSchema(HOME_FAQS)} />
      <Hero />
      <Specialties />
      <AreasServed />
      <Testimonials />
      <HowItWorks />
      <FAQSection items={HOME_FAQS} number="06" />
      <CTASection />
      <Newsletter />
    </>
  )
}
