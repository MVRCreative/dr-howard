/**
 * Footer — minimal shell, ready to extend.
 * Wired into the root layout.
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Marketing Site</p>
        <p>
          Built with Next.js, Tailwind&nbsp;CSS & GSAP
        </p>
      </div>
    </footer>
  )
}
