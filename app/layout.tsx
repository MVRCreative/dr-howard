import type { Metadata, Viewport } from "next"
import { Fraunces, Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import { SITE } from "@/lib/site"
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
  description: `${SITE.doctor.credentials}. Performance-driven care for athletes and active patients.`,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dr. Samuel Howard, D.O.",
    title: "Dr. Samuel Howard, D.O. — Orthopedic Surgery & Sports Medicine",
    description:
      "Orthopedic surgery built around how you move. Sports medicine, arthroscopy, joint preservation.",
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
