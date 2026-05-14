"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { FadeInLines } from "@/components/fade-in-lines"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <FadeInLines as="h2" className="font-display text-3xl font-medium leading-tight tracking-tight text-balance md:text-4xl">
              Quarterly recovery and <span className="italic text-navy">prevention insights.</span>
            </FadeInLines>
            <p className="mt-4 max-w-lg text-ink/70">
              Four short emails a year. Written by Dr. Howard. No marketing &mdash;
              just the protocols and research we use ourselves.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (email) setDone(true)
            }}
            className="md:col-span-5"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="flex border-b border-ink/50 focus-within:border-navy">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={done}
                className="w-full bg-transparent py-3 text-base placeholder:text-steel focus:outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={done}
                className="flex shrink-0 items-center gap-2 px-3 text-sm font-medium text-navy transition-colors hover:text-ink disabled:opacity-60"
              >
                {done ? (
                  <>
                    <Check className="h-4 w-4" /> Subscribed
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            <p className="mt-3 text-xs text-steel">
              Unsubscribe any time. We&apos;ll never share your address.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
