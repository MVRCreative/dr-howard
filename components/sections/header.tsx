"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { PHONE_DISPLAY, PHONE_HREF, PhoneCTA } from "@/components/phone-cta"

const NAV = [
  { href: "/about", label: "About" },
  { href: "/protocols", label: "Protocols" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Book" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-bone/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20">
        <Link href="/" className="flex items-center" aria-label="Dr. Samuel Howard, D.O. — Home">
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-medium tracking-tight text-ink">
              Samuel Howard, D.O.
            </span>
            <span className="mt-1 text-[11px] uppercase tracking-[0.18em] text-steel">
              Orthopedic Surgery
            </span>
          </div>
        </Link>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 text-sm font-medium text-ink/80 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="relative py-1 transition-colors hover:text-navy"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={PHONE_HREF}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy/20 text-navy"
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone className="h-4 w-4" />
          </a>
          <div className="hidden md:block">
            <PhoneCTA variant="solid" size="sm" />
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ink"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-bone md:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-xl text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-4 border-t border-hairline pt-4">
              <PhoneCTA variant="solid" size="md" className="w-full" />
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
