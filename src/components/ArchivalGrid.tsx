import Reveal from './Reveal'

interface ArchivalGridProps {
  labels?: string[]
}

const corners = ['top-6 left-6', 'top-6 right-6 text-right', 'bottom-6 left-6', 'bottom-6 right-6 text-right']

export default function ArchivalGrid({ labels = [] }: ArchivalGridProps) {
  return (
    <div className="archival-grid" aria-hidden="true">
      {labels.slice(0, 4).map((label, i) => (
        <Reveal
          key={label}
          delay={i * 0.1}
          className={`absolute hidden font-mono text-[9px] uppercase tracking-widest2 text-ivory/25 sm:block ${corners[i]}`}
        >
          {label}
        </Reveal>
      ))}
    </div>
  )
}
