import { cn } from "@/lib/utils"

export function SectionLabel({
  children,
  className,
  number,
}: {
  children: React.ReactNode
  className?: string
  number?: string
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-navy/40" aria-hidden />
      {number && (
        <span className="font-mono text-xs tabular text-accent-blue">{number}</span>
      )}
      <span className="text-xs font-medium uppercase tracking-[0.22em] text-navy">
        {children}
      </span>
    </div>
  )
}
