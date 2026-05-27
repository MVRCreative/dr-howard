import { ExternalLink } from "lucide-react"
import { SITE } from "@/lib/site"
import { cn } from "@/lib/utils"

type Variant = "solid" | "outline" | "inverted" | "ghost"
type Size = "sm" | "md" | "lg" | "xl"

interface BookOnlineCTAProps {
  variant?: Variant
  size?: Size
  label?: string
  className?: string
  showIcon?: boolean
}

const sizes: Record<Size, string> = {
  sm: "px-3 py-2 text-sm gap-2",
  md: "px-5 py-3 text-base gap-2.5",
  lg: "px-7 py-4 text-lg gap-3",
  xl: "px-9 py-5 text-xl gap-3",
}

const variants: Record<Variant, string> = {
  solid: "bg-navy text-bone hover:bg-ink focus-visible:ring-navy",
  outline:
    "border border-navy text-navy hover:bg-navy hover:text-bone focus-visible:ring-navy",
  inverted:
    "bg-bone text-navy hover:bg-white focus-visible:ring-bone",
  ghost: "text-navy hover:text-ink focus-visible:ring-navy",
}

export function BookOnlineCTA({
  variant = "outline",
  size = "md",
  label = SITE.booking.onlineLabel,
  className,
  showIcon = true,
}: BookOnlineCTAProps) {
  return (
    <a
      href={SITE.booking.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} at Macomb Orthopedics (opens in new tab)`}
      className={cn(
        "inline-flex items-center justify-center font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bone",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {showIcon && (
        <ExternalLink className="h-[1.1em] w-[1.1em]" aria-hidden="true" />
      )}
      <span>{label}</span>
    </a>
  )
}
