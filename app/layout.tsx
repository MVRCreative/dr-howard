import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider"
import "./globals.css"

/* ─── Font Setup ─── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
})

/* ─── Metadata ─── */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marketing Site",
    template: "%s | Marketing Site",
  },
  description:
    "A modern marketing website built with Next.js, Tailwind CSS, and GSAP.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Marketing Site",
    title: "Marketing Site",
    description:
      "A modern marketing website built with Next.js, Tailwind CSS, and GSAP.",
  },
  twitter: {
    card: "summary_large_image",
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
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
