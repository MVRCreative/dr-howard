import Link from "next/link"
import { PHONE_DISPLAY, PHONE_HREF } from "@/components/phone-cta"
import { MapPin, Clock, Phone } from "lucide-react"
import { SITE, formatOfficeHoursLine } from "@/lib/site"

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="leading-tight">
              <p className="font-display text-lg text-ink">{SITE.doctor.name}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-steel">
                Orthopedic Surgery
              </p>
            </div>
            <p className="mt-6 max-w-sm text-sm text-ink/70">
              {SITE.doctor.credentials}. Performance-driven care for athletes and
              active patients.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-steel">
              Practice
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-navy">About</Link></li>
              <li><Link href="/protocols" className="hover:text-navy">Protocols</Link></li>
              <li><Link href="/blog" className="hover:text-navy">Blog</Link></li>
              <li>
                <a
                  href={SITE.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy"
                >
                  {SITE.booking.label}
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-navy">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-steel">
              Office
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                {/* TODO(client): Replace with confirmed Macomb Orthopedics office address */}
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.cityStateZip}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                <span>
                  {SITE.hours.map((h) => (
                    <span key={h.day} className="block">
                      {formatOfficeHoursLine(h)}
                    </span>
                  ))}
                  <span className="mt-2 block text-xs text-steel">
                    {SITE.inClinicNote}
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-medium uppercase tracking-[0.18em] text-steel">
              Call the office
            </h4>
            <a
              href={PHONE_HREF}
              className="mt-4 inline-flex items-center gap-2 font-display text-2xl text-navy hover:text-ink tabular"
            >
              <Phone className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>
            <p className="mt-3 text-xs text-steel">
              New patients welcome. Most major insurance accepted.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-6 text-xs text-steel md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} {SITE.doctor.name} All rights reserved.</p>
          <p>
            The content on this site is for informational purposes only and does not
            constitute medical advice.
          </p>
        </div>
      </div>
    </footer>
  )
}
