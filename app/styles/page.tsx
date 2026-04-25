import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { GSAPDemos } from "@/components/sections/gsap-demos"

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Design system reference — typography, colors, spacing, buttons, and GSAP animation demos.",
}

/* ─── Section wrapper ─── */
function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="border-b border-border pb-3 font-display text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

/* ─── Color swatch ─── */
function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 w-full rounded-lg border border-border"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <p className="text-xs font-medium text-foreground">{name}</p>
      <p className="font-mono text-xs text-muted-foreground">{cssVar}</p>
    </div>
  )
}

/* ─── Spacing bar ─── */
function SpacingBar({ label, size }: { label: string; size: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">
        {label}
      </span>
      <div
        className="h-4 rounded bg-foreground/20"
        style={{ width: size }}
      />
      <span className="font-mono text-xs text-muted-foreground">{size}</span>
    </div>
  )
}

/* ─── Page ─── */
export default function StyleGuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <div className="flex flex-col gap-4 pb-16">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Style Guide
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A living reference of the design tokens, typography, components, and
          animation primitives available in this boilerplate.
        </p>
      </div>

      <div className="flex flex-col gap-20">
        {/* ─── Typography ─── */}
        <Section title="Typography">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {"font-display (Geist)"}
              </p>
              <p className="font-display text-lg text-foreground">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {"font-sans (Inter)"}
              </p>
              <p className="font-sans text-lg text-foreground">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {"font-mono (Geist Mono)"}
              </p>
              <p className="font-mono text-lg text-foreground">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">h1</span>
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Heading One
              </h1>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">h2</span>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Heading Two
              </h2>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">h3</span>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                Heading Three
              </h3>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">h4</span>
              <h4 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                Heading Four
              </h4>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">h5</span>
              <h5 className="font-display text-lg font-semibold text-foreground md:text-xl">
                Heading Five
              </h5>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">h6</span>
              <h6 className="font-display text-base font-semibold text-foreground md:text-lg">
                Heading Six
              </h6>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">body</span>
              <p className="text-base text-foreground leading-relaxed">
                Body text set in Inter. Comfortable line-height for readability
                across long paragraphs and content sections.
              </p>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 font-mono text-xs text-muted-foreground">small</span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Smaller text for captions, labels, and secondary information.
              </p>
            </div>
          </div>
        </Section>

        {/* ─── Colors ─── */}
        <Section title="Color Palette">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            <Swatch name="Background" cssVar="--background" />
            <Swatch name="Foreground" cssVar="--foreground" />
            <Swatch name="Primary" cssVar="--primary" />
            <Swatch name="Primary FG" cssVar="--primary-foreground" />
            <Swatch name="Secondary" cssVar="--secondary" />
            <Swatch name="Secondary FG" cssVar="--secondary-foreground" />
            <Swatch name="Muted" cssVar="--muted" />
            <Swatch name="Muted FG" cssVar="--muted-foreground" />
            <Swatch name="Accent" cssVar="--accent" />
            <Swatch name="Accent FG" cssVar="--accent-foreground" />
            <Swatch name="Destructive" cssVar="--destructive" />
            <Swatch name="Border" cssVar="--border" />
          </div>
        </Section>

        {/* ─── Spacing ─── */}
        <Section title="Spacing Scale">
          <div className="flex flex-col gap-3">
            <SpacingBar label="4" size="1rem" />
            <SpacingBar label="8" size="2rem" />
            <SpacingBar label="12" size="3rem" />
            <SpacingBar label="16" size="4rem" />
            <SpacingBar label="24" size="6rem" />
            <SpacingBar label="32" size="8rem" />
            <SpacingBar label="48" size="12rem" />
            <SpacingBar label="64" size="16rem" />
            <SpacingBar label="96" size="24rem" />
          </div>
        </Section>

        {/* ─── Buttons ─── */}
        <Section title="Button Variants">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </Section>

        {/* ─── GSAP Animations ─── */}
        <Section title="GSAP Animation Demos">
          <p className="text-sm text-muted-foreground">
            Scroll down to trigger each animation. Each uses the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
              {"<AnimatedText>"}
            </code>{" "}
            component with different props.
          </p>
          <GSAPDemos />
        </Section>
      </div>
    </div>
  )
}
