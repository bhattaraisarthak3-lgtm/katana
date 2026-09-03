import { Sword } from '../data/swords'

interface SwordCardProps {
  sword: Sword
  onSelect: (sword: Sword) => void
}

export default function SwordCard({ sword, onSelect }: SwordCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(sword)}
      data-cursor="INSPECT"
      className="group relative block w-full text-left"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
        <img
          src={sword.image.src}
          alt={sword.image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-atelier group-hover:scale-[1.06]"
        />
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.75), transparent 40%, rgba(0,0,0,.95))' }}
        />

        <div className="absolute left-5 right-5 top-5 flex items-start justify-between">
          <span className="jp-glyph text-2xl text-ivory/70">{sword.jp}</span>
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-ivory/50">
            {sword.status}
          </span>
        </div>

        <div className="absolute inset-x-5 bottom-5">
          <span className="block h-px w-8 bg-gold origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          <h3 className="mt-3 font-serif text-3xl text-ivory">{sword.name}</h3>
          <p className="mt-1 text-xs text-ivory/55">{sword.tagline}</p>

          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 overflow-hidden font-mono text-[10px] uppercase tracking-widest2 text-ivory/0 opacity-0 max-h-0 transition-all duration-500 group-hover:max-h-16 group-hover:opacity-100 group-hover:text-ivory/60">
            <span>Steel / {sword.specs.steel.split(' ')[0]}</span>
            <span>Blade / {sword.specs.length}</span>
          </div>
        </div>
      </div>
    </button>
  )
}
