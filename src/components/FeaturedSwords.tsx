import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { swords } from '../data/swords'

export default function FeaturedSwords() {
  const featured = swords.slice(0, 3)

  return (
    <section className="bg-void px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 border-b hairline pb-10 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel>Collection // 01</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
              THREE BLADES,
              <br />
              THREE TEMPERS.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/swords"
              data-cursor="OPEN"
              className="gold-underline font-mono text-xs uppercase tracking-widest2 text-ivory/70 hover:text-ivory"
            >
              View Full Collection
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {featured.map((sword, i) => (
            <Reveal key={sword.id} delay={i * 0.1}>
              <Link to="/swords" data-cursor="INSPECT" className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-charcoal">
                  <img
                    src={sword.image.src}
                    alt={sword.image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-atelier group-hover:scale-[1.06]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.7), transparent 40%, rgba(0,0,0,.9))' }}
                  />
                  <div className="absolute inset-x-5 bottom-5">
                    <span className="block h-px w-8 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                    <h3 className="mt-3 font-serif text-2xl text-ivory">{sword.name}</h3>
                    <p className="mt-1 text-xs text-ivory/55">{sword.tagline}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
