import Image from "next/image"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"
import { Stagger } from "@/components/scroll-reveal"
import { SITE } from "@/lib/site"

const SPECIALTY_PHOTOS: Record<
  string,
  { src: string; alt: string; position?: string; fit?: "cover" | "contain" }
> = {
  Shoulder: {
    src: "/specialties/joints.jpg",
    alt: "Shoulder joint anatomy",
    position: "0% 50%",
    fit: "cover",
  },
  Elbow: {
    src: "/specialties/joints.jpg",
    alt: "Elbow joint anatomy",
    position: "50% 50%",
    fit: "cover",
  },
  Knee: {
    src: "/specialties/joints.jpg",
    alt: "Knee joint anatomy",
    position: "100% 50%",
    fit: "cover",
  },
  "Sports injuries": {
    src: "/specialties/sports-injuries.jpg",
    alt: "Baseball, football, soccer ball, and hockey puck",
    fit: "contain",
  },
  "Non-surgical care": {
    src: "/specialties/non-surgical.jpg",
    alt: "Syringe for injection and non-surgical treatment",
    fit: "contain",
  },
}

export function Specialties() {
  return (
    <section id="specialties" className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number="02">Specialties</SectionLabel>
            <FadeInLines as="h2" className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink text-balance md:text-5xl">
              A focused practice.
              <br />
              <span className="italic text-accent-blue">A deeper bench.</span>
            </FadeInLines>
            <p className="mt-6 max-w-sm text-ink/70">
              {SITE.specialtiesIntro}
            </p>
          </div>

          <div className="md:col-span-8">
            <Stagger as="ul" stagger={0.12} y={24} className="divide-y divide-hairline border-y border-hairline">
              {SITE.specialties.map((s, i) => {
                const photo = SPECIALTY_PHOTOS[s.title]
                return (
                  <li key={s.title} className="py-6 md:py-8">
                    <div className="grid grid-cols-[6.5rem_1fr] items-start gap-x-5 gap-y-4 md:gap-x-8">
                      {photo ? (
                        <span className="relative block h-[8.1rem] w-[6.5rem] overflow-hidden border border-navy/30 bg-white">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className={photo.fit === "contain" ? "object-contain p-1" : "object-cover"}
                            style={photo.position ? { objectPosition: photo.position } : undefined}
                            sizes="104px"
                          />
                        </span>
                      ) : null}
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-xs tabular text-steel">
                            0{i + 1}
                          </span>
                          <h3 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
                            {s.title}
                          </h3>
                        </div>
                        <ul className="mt-4 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                          {s.conditions.map((condition) => (
                            <li
                              key={condition}
                              className="flex items-start gap-2 text-sm leading-relaxed text-ink/75"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/50"
                                aria-hidden
                              />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
