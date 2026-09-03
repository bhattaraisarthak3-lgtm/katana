import { useEffect, useRef, useState } from 'react'
import { swordAssets } from '../data/assets'

const stages = [
  { from: 0, to: 0.22, label: 'A REFLECTION APPEARS' },
  { from: 0.22, to: 0.45, label: 'THE HAMON EMERGES' },
  { from: 0.45, to: 0.68, label: 'THE TSUBA BECOMES VISIBLE' },
  { from: 0.68, to: 0.88, label: 'THE HANDLE IS REVEALED' },
  { from: 0.88, to: 1, label: 'THE BLADE, COMPLETE' },
]

export default function SwordRevealMoment() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const reducedRef = useRef(false)

  useEffect(() => {
    reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedRef.current) {
      setProgress(1)
      return
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const el = wrapperRef.current
        if (el) {
          const rect = el.getBoundingClientRect()
          const total = rect.height - window.innerHeight
          const scrolled = -rect.top
          const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0
          setProgress(p)
        }
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const activeStage = stages.find((s) => progress >= s.from && progress < s.to) ?? stages[stages.length - 1]
  const reveal = 18 + progress * 95

  return (
    <div ref={wrapperRef} className="relative bg-void" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <div
          className="absolute inset-0 -m-20"
          style={{
            filter: `brightness(${0.1 + progress * 0.9}) saturate(${0.5 + progress * 0.6})`,
            clipPath: `circle(${reveal}% at 50% 50%)`,
            transition: reducedRef.current ? 'none' : 'clip-path 0.1s linear, filter 0.1s linear',
          }}
        >
          <img
            src={swordAssets.swordReveal.src}
            alt={swordAssets.swordReveal.alt}
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(11,11,12,.9) 78%), linear-gradient(to bottom, rgba(11,11,12,.6), transparent 30%, transparent 70%, rgba(11,11,12,.85))',
          }}
        />

        <div className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-4 px-6 text-center">
          <span className="font-mono text-[10px] uppercase tracking-widest3 text-gold-muted">
            {String(Math.round(progress * 100)).padStart(3, '0')}%
          </span>
          <p className="font-serif text-2xl italic text-ivory/85 sm:text-3xl">{activeStage.label}</p>
        </div>
      </div>
    </div>
  )
}
