interface SectionLabelProps {
  children: string
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-widest2 text-gold-muted ${className}`}
    >
      {children}
    </span>
  )
}
