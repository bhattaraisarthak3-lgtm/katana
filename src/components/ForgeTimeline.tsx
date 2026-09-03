import { useEffect, useRef, useState } from 'react'
import { swordAssets } from '../data/assets'

const steps = [
  {
    n: '01',
    key: 'tamahagane',
    title: 'TAMAHAGANE',
    text: 'Material selection. Steel is chosen and sorted for carbon content before any shaping begins.',
    image: swordAssets.steel,
  },
  {
    n: '02',
    key: 'orikitae',
    title: 'ORIKITAE',
    text: 'Folding and forging. The steel is repeatedly folded to distribute carbon and remove impurities.',
    image: swordAssets.forging,
  },
  {
    n: '03',
    key: 'shaping',
    title: 'SHAPING',
    text: 'Establishing the blade geometry — the curve, the ridge line, the point that will carry an edge.',
    image: swordAssets.steel,
  },
  {
    n: '04',
    key: 'yakimae',
    title: 'YAKIMAE',
    text: 'Thermal treatment and hamon formation, through differential clay coating and controlled quenching.',
    image: swordAssets.hamon,
  },
  {
    n: '05',
    key: 'polishing',
    title: 'POLISHING',
    text: 'Progressive refinement of the blade across successive stones, each finer than the last.',
    image: swordAssets.hamon,
  },
  {
    n: '06',
    key: 'mounting',
    title: 'MOUNTING',
    text: 'Final assembly and finishing — habaki, tsuba, tsuka, and saya brought together as one object.',
    image: swordAssets.saya,
  },
]

export default function ForgeTimeline() {
  const [active, setActive] = useState(0)
  const refs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-24 sm:px-10 md:grid-cols-2 md:gap-16">
      <div className="relative order-2 hidden h-[60vh] md:sticky md:top-28 md:order-1 md:block">
        {steps.map((step, i) => (
          <img
            key={step.key}
            src={step.image.src}
            alt={step.image.alt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
            style={{ opacity: active === i ? 1 : 0 }}
          />
        ))}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.5), transparent 40%, rgba(0,0,0,.85))' }}
        />
      </div>

      <div className="relative order-1 md:order-2">
        <div className="absolute left-[3px] top-2 bottom-2 hidden w-px bg-ivory/10 md:block">
          <div
            className="w-px bg-gold transition-all duration-500"
            style={{ height: `${((active + 1) / steps.length) * 100}%` }}
          />
        </div>

        <div className="flex flex-col gap-24 md:pl-8">
          {steps.map((step, i) => (
            <div
              key={step.key}
              ref={(el) => {
                refs.current[i] = el
              }}
              className="flex min-h-[30vh] flex-col justify-center transition-opacity duration-500"
              style={{ opacity: active === i ? 1 : 0.35 }}
            >
              <span className="font-mono text-xs tracking-widest2 text-gold-muted">{step.n}</span>
              <h3 className="mt-2 font-serif text-3xl text-ivory">{step.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/60">{step.text}</p>
              <img
                src={step.image.src}
                alt={step.image.alt}
                loading="lazy"
                className="mt-6 aspect-[4/3] w-full max-w-sm object-cover md:hidden"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
