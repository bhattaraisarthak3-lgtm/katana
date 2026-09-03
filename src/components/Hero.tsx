import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { swordAssets } from '../data/assets'

const hud = [
  { pos: 'top-28 left-6 sm:left-10 items-start', lines: ['EST. 2026', 'TOKYO / JAPAN'] },
  { pos: 'top-28 right-6 sm:right-10 items-end text-right', lines: ['HAND FORGED', 'TAMAHAGANE'] },
  { pos: 'bottom-28 right-6 sm:right-10 items-end text-right', lines: ['BLADE NO. 013'] },
]

export default function Hero() {
  const imgRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      if (imgRef.current) {
        imgRef.current.style.transform = `scale(1.08) translate(${x * -10}px, ${y * -8}px)`
      }
    }

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      rafRef.current = requestAnimationFrame(() => {
        const progress = Math.min(window.scrollY / (window.innerHeight * 0.9), 1)
        if (copyRef.current) {
          copyRef.current.style.opacity = String(1 - progress * 1.3)
          copyRef.current.style.transform = `translateY(${progress * -40}px)`
        }
        ticking = false
      })
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-void">
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transition: 'transform 0.6s cubic-bezier(0.22,0.61,0.36,1)' }}
      >
        <img
          src={swordAssets.hero.src}
          alt={swordAssets.hero.alt}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(11,11,12,.55) 0%, rgba(11,11,12,.25) 35%, rgba(11,11,12,.65) 75%, rgba(11,11,12,.96) 100%), linear-gradient(to right, rgba(11,11,12,.6), transparent 55%)',
        }}
      />

      {hud.map((h) => (
        <div key={h.pos} className={`absolute z-10 hidden sm:flex flex-col gap-1 font-mono text-[10px] tracking-widest2 text-ivory/45 ${h.pos}`}>
          {h.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      ))}

      <div ref={copyRef} className="relative z-10 flex h-full flex-col justify-end px-6 pb-28 sm:px-10 sm:pb-32">
        <span className="mb-6 font-mono text-xs uppercase tracking-widest3 text-gold-muted">
          KATANA // 刀
        </span>
        <h1 className="font-serif text-6xl leading-[0.95] text-ivory sm:text-8xl">
          STEEL
          <br />
          REMEMBERS.
        </h1>
        <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
          Hand-forged blades shaped by fire, water, time, and the hand of the artisan.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#products"
            data-cursor="OPEN"
            className="gold-underline font-mono text-xs uppercase tracking-widest2 text-ivory"
          >
            Explore the Forge
          </a>
          <Link
            to="/contact"
            data-cursor="INQUIRE"
            className="gold-underline font-mono text-xs uppercase tracking-widest2 text-ivory/60 hover:text-ivory"
          >
            Inquire About a Commission
          </Link>
        </div>
      </div>
    </section>
  )
}
