import type { FAQ } from "@/lib/faqs"
import { SITE, formatFullAddress } from "@/lib/site"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelhoward.md"

export const SCHEMA_IDS = {
  website: `${siteUrl}/#website`,
  physician: `${siteUrl}/#physician`,
  clinic: `${siteUrl}/#clinic`,
} as const

function openingHoursSpecification() {
  return SITE.hours.map((h) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: h.day,
    opens: convertTimeTo24h(h.open),
    closes: convertTimeTo24h(h.close),
  }))
}

function convertTimeTo24h(time: string): string {
  const match = time.match(/^(\d{1,2}):(\d{2})([ap])$/i)
  if (!match) return time
  let hours = parseInt(match[1]!, 10)
  const minutes = match[2]
  const period = match[3]!.toLowerCase()
  if (period === "p" && hours !== 12) hours += 12
  if (period === "a" && hours === 12) hours = 0
  return `${hours.toString().padStart(2, "0")}:${minutes}`
}

export function buildPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": SCHEMA_IDS.physician,
    name: SITE.doctor.fullName,
    honorificPrefix: "Dr.",
    jobTitle: "Orthopedic Sports Medicine Surgeon",
    medicalSpecialty: [
      "Orthopedic Surgery",
      "Sports Medicine",
      "Arthroscopic Surgery",
    ],
    description: SITE.doctor.googleBio,
    alumniOf: SITE.education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    memberOf: SITE.memberships.map((m) => ({
      "@type": "Organization",
      name: m,
    })),
    worksFor: { "@id": SCHEMA_IDS.clinic },
    url: `${siteUrl}/about`,
    telephone: SITE.phone.href.replace("tel:", ""),
  }
}

export function buildMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": SCHEMA_IDS.clinic,
    name: SITE.practiceName,
    description: SITE.doctor.googleBio,
    url: siteUrl,
    telephone: SITE.phone.href.replace("tel:", ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: SITE.areasServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    employee: { "@id": SCHEMA_IDS.physician },
  }
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SCHEMA_IDS.website,
    name: `${SITE.doctor.fullName} — Orthopedic Surgery & Sports Medicine`,
    url: siteUrl,
    publisher: { "@id": SCHEMA_IDS.clinic },
  }
}

export function buildFAQPageSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  }
}

export function buildGlobalSchemas() {
  return [buildWebSiteSchema(), buildPhysicianSchema(), buildMedicalClinicSchema()]
}

export { formatFullAddress }
