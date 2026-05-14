import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { POSTS, getPost } from "@/lib/posts"
import { Newsletter } from "@/components/newsletter"
import { CTASection } from "@/components/cta-section"
import { ArrowLeft } from "lucide-react"
import { FadeInLines } from "@/components/fade-in-lines"
import { FadeIn, Stagger } from "@/components/scroll-reveal"

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt.replace(/&apos;/g, "'"),
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <>
      <article className="border-b border-hairline">
        <div className="mx-auto max-w-4xl px-6 pb-12 pt-14 md:pt-20">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-steel hover:text-navy"
          >
            <ArrowLeft className="h-4 w-4" /> All field notes
          </Link>

          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-steel">
            <span className="text-navy">{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-steel" />
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-steel" />
            <span>{post.readTime}</span>
          </div>

          <FadeInLines as="h1" className="mt-6 font-display text-4xl font-medium leading-[1.05] tracking-tight text-balance md:text-6xl">
            {post.title}
          </FadeInLines>

          <p className="mt-6 max-w-2xl text-lg text-ink/70">
            <span dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </p>

          <div className="mt-10 flex items-center gap-4 border-y border-hairline py-5">
            <div className="flex h-11 w-11 items-center justify-center border border-navy/30 bg-bone font-display text-sm text-navy">
              SH
            </div>
            <div className="text-sm">
              <p className="font-medium text-ink">Samuel Howard, D.O.</p>
              <p className="text-steel">Orthopedic surgery, sports medicine</p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <div className="relative aspect-[16/9] overflow-hidden bg-bone-muted">
            <Image
              src={post.image || "/placeholder.svg"}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>

        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20">
          <Stagger stagger={0.08} y={14}>
            {post.body.map((para, i) => (
              <p
                key={i}
                className={`mb-7 text-lg leading-[1.75] text-ink/85 ${
                  i === 0 ? "dropcap" : ""
                }`}
                dangerouslySetInnerHTML={{ __html: para }}
              />
            ))}
          </Stagger>

          <FadeInLines as="blockquote" className="my-12 border-l-2 border-navy py-2 pl-6 font-display text-2xl font-normal leading-snug tracking-tight text-ink text-balance md:text-3xl">
            The work that matters happens in the months before and after the
            operation &mdash; not just on the table.
          </FadeInLines>

          {post.body.slice(0, 1).map((_, i) => (
            <FadeIn
              as="p"
              key={`closing-${i}`}
              className="mt-7 text-lg leading-[1.75] text-ink/85"
            >
              If you have a question about anything in this post, the office line
              is the fastest way to reach the team. We&apos;re happy to talk
              through it.
            </FadeIn>
          ))}
        </div>
      </article>

      <section className="border-b border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-steel">
            Related notes
          </p>
          <Stagger stagger={0.12} y={16} className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex gap-6"
              >
                <div className="relative aspect-square w-32 shrink-0 overflow-hidden bg-bone-muted md:w-40">
                  <Image
                    src={p.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="160px"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-steel">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-tight tracking-tight text-balance group-hover:text-navy md:text-2xl">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </Stagger>
        </div>
      </section>

      <Newsletter />
      <CTASection />
    </>
  )
}
