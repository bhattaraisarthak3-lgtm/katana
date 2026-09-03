import { useEffect, useRef, useState } from 'react'

/**
 * A small ivory dot with a trailing label ring. Reads `data-cursor="VIEW"`
 * (etc.) off whatever element is currently hovered via event delegation, so
 * no other component needs to know the cursor exists.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || reduced) return

    const move = (e: PointerEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
      setActive(true)
    }

    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement
      const el = target.closest<HTMLElement>('[data-cursor]')
      setLabel(el ? el.dataset.cursor ?? null : null)
    }

    const leave = () => setActive(false)

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ opacity: active ? (label ? 0 : 1) : 0 }}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          opacity: active && label ? 1 : 0,
          width: label ? undefined : '12px',
          height: label ? '34px' : '12px',
        }}
        aria-hidden="true"
      >
        {label}
      </div>
    </>
  )
}
