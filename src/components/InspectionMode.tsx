import { useEffect, useRef, useState } from 'react'
import { CreditedImage } from '../data/assets'

interface InspectionModeProps {
  open: boolean
  onClose: () => void
  image: CreditedImage
}

const markers = [
  { id: 'hamon', label: 'HAMON', x: 42, y: 58 },
  { id: 'edge', label: 'EDGE', x: 58, y: 70 },
  { id: 'spine', label: 'SPINE', x: 35, y: 42 },
  { id: 'habaki', label: 'HABAKI', x: 50, y: 30 },
]

export default function InspectionMode({ open, onClose, image }: InspectionModeProps) {
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!open) return
    setZoom(1)
    setPan({ x: 0, y: 0 })
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    last.current = { x: e.clientX, y: e.clientY }
    setPan((p) => ({ x: p.x + dx, y: p.y + dy }))
  }
  const endDrag = () => {
    dragging.current = false
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Blade inspection mode"
      className="fixed inset-0 z-[70] flex flex-col bg-void"
    >
      <div className="flex items-center justify-between px-6 py-5 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-widest2 text-ivory/50">
          Inspection Mode — drag to pan, use +/- to zoom
        </span>
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(1, z - 0.25))}
            className="font-mono text-sm text-ivory/70 hover:text-ivory"
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="font-mono text-xs text-ivory/50">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
            className="font-mono text-sm text-ivory/70 hover:text-ivory"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs uppercase tracking-widest2 text-ivory hover:text-gold"
          >
            Esc — Close
          </button>
        </div>
      </div>

      <div
        className="relative flex-1 overflow-hidden cursor-grab active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transition: dragging.current ? 'none' : 'transform 0.3s ease',
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            draggable={false}
            className="max-h-full max-w-full select-none object-contain"
          />
          {markers.map((m) => (
            <button
              key={m.id}
              type="button"
              className="group absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/70"
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
            >
              <span className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-sm bg-void/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest2 text-ivory opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                {m.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
