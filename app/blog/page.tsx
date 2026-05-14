import Image from "next/image"
import Link from "next/link"
import { POSTS } from "@/lib/posts"
import { SectionLabel } from "@/components/section-label"
import { Newsletter } from "@/components/newsletter"
import { FadeInLines } from "@/components/fade-in-lines"

export const metadata = {
  title: "Field notes",
  description:
    "Clinical writing from Dr. Samuel Howard, D.O. on sports orthopedics, surgery, and recovery.",
}

export default function BlogIndexPage() {
  const [featured, ...rest] = POSTS

  return (
    <>
      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-14 md:pb-16 md:pt-20">
          <SectionLabel>Field notes</SectionLabel>
          <FadeInLines as="h1" className="mt-6 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-balance md:text-7xl">
            Writing from the practice.
          </FadeInLines>
          <p className="mt-6 max-w-2xl text-lg text-ink/75">
            Clinical observations, evidence reviews, and the occasional honest
            take on what the orthopedic literature gets wrong.
          </p>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <div className="relative aspect-[5/4] overflow-hidden bg-bone-muted md:aspect-[7/5]">
                  <Image
                    src={featured.image || "/placeholder.svg"}
                    alt=""
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 55vw, 100vw"
                  />
                </div>
              </div>
              <div className="md:col-span-5 md:flex md:flex-col md:justify-end">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-steel">
                  <span className="text-navy">Featured</span>
                  <span className="h-1 w-1 rounded-full bg-steel" />
                  <span>{featured.category}</span>
                  <span className="h-1 w-1 rounded-full bg-steel" />
                  <span>{featured.date}</span>
                </div>
                <FadeInLines as="h2" className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance group-hover:text-navy md:text-5xl">
                  {featured.title}
                </FadeInLines>
                <p
                  className="mt-5 text-lg text-ink/75"
                  dangerouslySetInnerHTML={{ __html: featured.excerpt }}
                />
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-navy">
                  Read the post &rarr;
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-3 md:gap-10">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bone-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 30vw, 100vw"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-steel">
                  <span>{post.category}</span>
                  <span className="h-1 w-1 rounded-full bg-steel" />
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium leading-tight tracking-tight text-balance group-hover:text-navy">
                  {post.title}
                </h3>
                <p
                  className="mt-3 text-sm text-ink/70"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
