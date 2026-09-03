import { useState } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { swordAssets } from '../data/assets'

const parts = [
  { n: '01', label: 'TSUBA', text: 'The hand guard — often the most individually crafted fitting on the sword.', image: swordAssets.tsuba },
  { n: '02', label: 'HABAKI', text: 'The collar that seats the blade in its mounting and locks it in the saya.', image: swordAssets.steel },
  { n: '03', label: 'TSUKA', text: 'The handle, built from wood, rayskin, and a final wrap of cord or leather.', image: swordAssets.tsuka },
  { n: '04', label: 'SAYA', text: 'The scabbard — lacquered, fitted, and finished to match the mounting.', image: swordAssets.saya },
]

export default function TsubaDetail() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative bg-charcoal py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <SectionLabel>Component Study</SectionLabel>
          <h2 className="mt-4 max-w-lg font-serif text-4xl text-ivory sm:text-5xl">
            THE DETAILS ARE THE SIGNATURE.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.1} className="relative aspect-square overflow-hidden">
            {parts.map((p, i) => (
              <img
                key={p.n}
                src={p.image.src}
                alt={p.image.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                style={{ opacity: active === i ? 1 : 0 }}
              />
            ))}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.4), transparent 35%, rgba(0,0,0,.75))' }}
            />
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-center gap-1">
            {parts.map((p, i) => (
              <button
                key={p.n}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex items-start gap-5 border-t hairline py-5 text-left transition-colors ${
                  i === parts.length - 1 ? 'border-b' : ''
                }`}
              >
                <span
                  className={`font-mono text-sm transition-colors ${active === i ? 'text-gold' : 'text-ivory/35'}`}
                >
                  {p.n}
                </span>
                <span>
                  <span
                    className={`block font-serif text-2xl transition-colors ${
                      active === i ? 'text-ivory' : 'text-ivory/50'
                    }`}
                  >
                    {p.label}
                  </span>
                  <span
                    className={`mt-1 block max-w-sm text-sm leading-relaxed transition-colors ${
                      active === i ? 'text-ivory/65' : 'text-ivory/30'
                    }`}
                  >
                    {p.text}
                  </span>
                </span>
              </button>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
