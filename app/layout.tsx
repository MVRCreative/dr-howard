import type { Metadata, Viewport } from "next"
import { Fraunces, Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { JsonLd } from "@/components/seo/json-ld"
import { SITE } from "@/lib/site"
import { buildGlobalSchemas } from "@/lib/schema"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samuelhoward.md"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Samuel Howard, D.O. — Orthopedic Surgery & Sports Medicine",
    template: "%s | Dr. Samuel Howard, D.O.",
  },
  description: `${SITE.doctor.credentials} at ${SITE.practiceName} in Clinton Township, MI. Rotator cuff repair, ACL reconstruction, shoulder replacement, and sports medicine serving Metro Detroit.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dr. Samuel Howard, D.O.",
    title: "Dr. Samuel Howard, D.O. — Orthopedic Surgery & Sports Medicine",
    description:
      "Fellowship-trained orthopedic sports medicine surgeon at Macomb Orthopedics in Clinton Township, MI. Arthroscopic shoulder, knee, and elbow surgery serving Metro Detroit.",
  },
  twitter: { card: "summary_large_image" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B2A4E",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} bg-bone`}
    >
      <body className="font-sans">
        <JsonLd data={buildGlobalSchemas()} />
        <SmoothScrollProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
