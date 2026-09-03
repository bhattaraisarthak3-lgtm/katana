import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sword } from '../data/swords'
import TechnicalAnnotation from './TechnicalAnnotation'

interface SwordDetailPanelProps {
  sword: Sword | null
  onClose: () => void
}

export default function SwordDetailPanel({ sword, onClose }: SwordDetailPanelProps) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sword) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [sword, onClose])

  if (!sword) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sword-detail-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-void/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={panelRef}
        className="relative grid max-h-full w-full max-w-4xl grid-cols-1 overflow-y-auto bg-charcoal md:grid-cols-2 border hairline"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close sword details"
          className="absolute right-4 top-4 z-10 font-mono text-xs uppercase tracking-widest2 text-ivory/70 hover:text-ivory"
        >
          Close ✕
        </button>

        <div className="relative aspect-[4/5] md:aspect-auto">
          <img
            src={sword.image.src}
            alt={sword.image.alt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-7 py-10 sm:px-10">
          <span className="jp-glyph text-3xl text-gold-muted">{sword.jp}</span>
          <h2 id="sword-detail-title" className="mt-3 font-serif text-4xl text-ivory">
            {sword.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ivory/60">{sword.description}</p>

          <div className="mt-6">
            <TechnicalAnnotation label="Blade Steel" value={sword.specs.steel} />
            <TechnicalAnnotation label="Blade Length" value={sword.specs.length} />
            <TechnicalAnnotation label="Mounting" value={sword.specs.mounting} />
            <TechnicalAnnotation label="Habaki" value={sword.specs.habaki} />
            <TechnicalAnnotation label="Tsuba" value={sword.specs.tsuba} />
            <TechnicalAnnotation label="Tsuka" value={sword.specs.tsuka} />
            <TechnicalAnnotation label="Saya" value={sword.specs.saya} />
            <TechnicalAnnotation label="Weight" value={sword.specs.weight} />
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-widest2 text-ivory/35">
            Conceptual specification — inspired by traditional Japanese swordmaking practices.
          </p>

          <Link
            to="/contact"
            onClick={onClose}
            data-cursor="INQUIRE"
            className="gold-underline mt-8 inline-block w-fit font-mono text-xs uppercase tracking-widest2 text-ivory"
          >
            Request Details
          </Link>
        </div>
      </div>
    </div>
  )
}
