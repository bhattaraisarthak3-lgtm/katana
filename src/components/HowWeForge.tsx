import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import { swordAssets } from '../data/assets'

const steps = [
  { n: '01', title: 'TAMAHAGANE', text: 'Steel is chosen and sorted for carbon content.' },
  { n: '02', title: 'ORIKITAE', text: 'Repeated folding removes impurities and builds grain.' },
  { n: '03', title: 'SHAPING', text: 'The curve, ridge line, and point are established.' },
  { n: '04', title: 'YAKIMAE', text: 'Clay coating and quenching form the hamon.' },
  { n: '05', title: 'POLISHING', text: 'Successive stones bring the hamon into view.' },
  { n: '06', title: 'MOUNTING', text: 'Habaki, tsuba, tsuka, and saya become one object.' },
]

export default function HowWeForge() {
  return (
    <section className="bg-charcoal px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <img
            src={swordAssets.forging.src}
            alt={swordAssets.forging.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.4), transparent 40%, rgba(0,0,0,.8))' }}
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel>How It&rsquo;s Made</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
              SIX STAGES.
              <br />
              ONE OBJECT.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/55">
              Inspired by traditional Japanese swordmaking practices, every blade passes through
              the same six stages by hand — nothing is cast, stamped, or assembled from stock parts.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.n} className="border-t hairline pt-4">
                <span className="font-mono text-xs tracking-widest2 text-gold-muted">{s.n}</span>
                <h3 className="mt-1 font-serif text-xl text-ivory">{s.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-ivory/50">{s.text}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              to="/our-story"
              data-cursor="OPEN"
              className="gold-underline mt-10 inline-block font-mono text-xs uppercase tracking-widest2 text-ivory/70 hover:text-ivory"
            >
              Walk Through the Forge
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
