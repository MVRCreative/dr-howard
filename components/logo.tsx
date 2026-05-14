import { cn } from "@/lib/utils"

/**
 * Stylized Spartan-helmet mark — geometric, navy.
 * Not a full illustration; an emblem that reads at small sizes.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      <rect
        x="2"
        y="2"
        width="44"
        height="44"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.25"
      />
      {/* Helmet silhouette */}
      <path
        d="M14 32c0-7 4-12 10-12s10 5 10 12v3H14v-3Z"
        fill="currentColor"
      />
      <path
        d="M14 35v3c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* Crest */}
      <path
        d="M22 12c0-2 1-4 2-4s2 2 2 4v8h-4v-8Z"
        fill="currentColor"
      />
      <path
        d="M16 18c2 0 4 1 4 3M32 18c-2 0-4 1-4 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Eye slit */}
      <rect x="20" y="27" width="8" height="2" rx="1" fill="var(--bone)" />
    </svg>
  )
}
