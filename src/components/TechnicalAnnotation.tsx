interface TechnicalAnnotationProps {
  label: string
  value: string
  className?: string
}

export default function TechnicalAnnotation({ label, value, className = '' }: TechnicalAnnotationProps) {
  return (
    <div className={`flex items-baseline justify-between gap-4 border-t hairline py-2.5 font-mono text-[11px] ${className}`}>
      <span className="uppercase tracking-widest2 text-ivory/40">{label}</span>
      <span className="text-ivory/85 text-right">{value}</span>
    </div>
  )
}
