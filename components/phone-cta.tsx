import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export const PHONE_DISPLAY = "(555) 123-4567"
export const PHONE_HREF = "tel:+15551234567"

type Variant = "solid" | "outline" | "inverted" | "ghost"
type Size = "sm" | "md" | "lg" | "xl"

interface PhoneCTAProps {
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
  solid:
    "bg-navy text-bone hover:bg-ink focus-visible:ring-navy",
  outline:
    "border border-navy text-navy hover:bg-navy hover:text-bone focus-visible:ring-navy",
  inverted:
    "bg-bone text-navy hover:bg-white focus-visible:ring-bone",
  ghost:
    "text-navy hover:text-ink focus-visible:ring-navy",
}

export function PhoneCTA({
  variant = "solid",
  size = "md",
  label,
  className,
  showIcon = true,
}: PhoneCTAProps) {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Call Dr. Howard&apos;s office at ${PHONE_DISPLAY}`}
      className={cn(
        "inline-flex items-center justify-center font-medium tracking-tight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bone",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {showIcon && <Phone className="h-[1.1em] w-[1.1em]" aria-hidden="true" />}
      <span className="tabular">{label ?? PHONE_DISPLAY}</span>
    </a>
  )
}
