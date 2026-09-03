import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { swordAssets } from '../data/assets'

const points = [
  { id: 'hamon', label: 'HAMON', note: 'The temper line, born from differential hardening.', x: 62, y: 40 },
  { id: 'hada', label: 'HADA', note: 'The surface grain left by repeated folding of the steel.', x: 30, y: 62 },
  { id: 'edge', label: 'EDGE', note: 'The hardened cutting edge, tempered separately from the spine.', x: 75, y: 70 },
  { id: 'polish', label: 'POLISH', note: 'Progressive stones bring the hamon and hada into full view.', x: 45, y: 25 },
]

export default function MaterialMacro() {
  return (
    <section className="relative bg-void py-24">
      <Reveal className="mx-auto mb-10 max-w-6xl px-6 sm:px-10">
        <SectionLabel>Material Study</SectionLabel>
        <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">STEEL UNDER LIGHT</h2>
      </Reveal>

      <Reveal delay={0.1} className="relative mx-auto aspect-[16/9] w-full max-w-6xl overflow-hidden px-6 sm:px-10">
        <div className="relative h-full w-full overflow-hidden">
          <img
            src={swordAssets.hamon.src}
            alt={swordAssets.hamon.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.5), transparent 30%, rgba(0,0,0,.7))' }}
          />

          {points.map((p) => (
            <div
              key={p.id}
              className="group absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${p.x}%`, top: `${p.y}%` }}
            >
              <span className="block h-2.5 w-2.5 rounded-full border border-gold bg-void/40" />
              <div className="pointer-events-none absolute left-5 top-1/2 w-48 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="font-mono text-[10px] uppercase tracking-widest2 text-gold">{p.label}</p>
                <p className="mt-1 text-xs leading-snug text-ivory/70">{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
