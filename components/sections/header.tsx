import Link from "next/link"

/**
 * Header — minimal shell, ready to extend.
 * Wired into the root layout.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Site
        </Link>

        <ul className="flex items-center gap-6 text-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-foreground"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/styles"
              className="transition-colors hover:text-foreground"
            >
              Style Guide
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
