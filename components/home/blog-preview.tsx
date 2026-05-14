import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { POSTS } from "@/lib/posts"
import { SectionLabel } from "@/components/section-label"
import { FadeInLines } from "@/components/fade-in-lines"

export function BlogPreview() {
  const [featured, ...rest] = POSTS.slice(0, 3)

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel number="07">Field notes</SectionLabel>
            <FadeInLines as="h2" className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-5xl">
              Writing from the practice.
            </FadeInLines>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm font-medium text-ink hover:border-navy hover:text-navy"
          >
            All posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group md:col-span-7"
          >
            <div className="relative aspect-[5/4] overflow-hidden bg-bone-muted md:aspect-[6/5]">
              <Image
                src={featured.image || "/placeholder.svg"}
                alt=""
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-steel">
              <span>{featured.category}</span>
              <span className="h-1 w-1 rounded-full bg-steel" />
              <span>{featured.date}</span>
            </div>
            <h3 className="mt-3 max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-ink text-balance group-hover:text-navy md:text-4xl">
              {featured.title}
            </h3>
          </Link>

          <div className="md:col-span-5 md:divide-y md:divide-hairline md:border-t md:border-hairline">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col gap-2 py-6 md:py-8"
              >
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-steel">
                  <span>{p.category}</span>
                  <span className="h-1 w-1 rounded-full bg-steel" />
                  <span>{p.date}</span>
                </div>
                <h3 className="font-display text-xl font-medium leading-tight tracking-tight text-ink text-balance group-hover:text-navy md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-sm text-ink/70">
                  <span dangerouslySetInnerHTML={{ __html: p.excerpt }} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
