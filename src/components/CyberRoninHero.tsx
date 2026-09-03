import { useEffect, useRef } from 'react'
import './CyberRoninHero.css'

const BASE_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_115955_2a9adb39-5e9b-4ced-96e2-6900eabe3de9.png&w=1920&q=85'

const REVEAL_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_123709_183f0065-efb2-4bb2-a849-13aaa5af2f3f.png&w=1920&q=85'

const PRODUCT_IMG =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_121937_3f02b5a0-5b86-43d9-b30e-03c5e46632e7.png&w=1920&q=85'

export default function CyberRoninHero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const revealImg = revealRef.current
    if (!root || !revealImg) return

    // ---- spotlight reveal ----
    const setSpotlight = (clientX: number, clientY: number) => {
      const rect = revealImg.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top
      const radius = window.innerWidth < 480 ? 120 : window.innerWidth < 720 ? 160 : 260
      const mask = `radial-gradient(circle ${radius}px at ${x}px ${y}px, #fff 0%, #fff 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, transparent 100%)`
      revealImg.style.setProperty('-webkit-mask-image', mask)
      revealImg.style.maskImage = mask
    }

    const onMouseMove = (e: MouseEvent) => setSpotlight(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (touch) setSpotlight(touch.clientX, touch.clientY)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    // ---- word split ----
    const splitEls = root.querySelectorAll<HTMLElement>('.words-pull-up')
    splitEls.forEach((el) => {
      if (el.dataset.split) return
      el.dataset.split = 'true'

      let wordIndex = 0

      const wrapWords = (text: string): DocumentFragment => {
        const frag = document.createDocumentFragment()
        const words = text.split(/\s+/).filter(Boolean)
        words.forEach((word, i) => {
          const span = document.createElement('span')
          span.className = 'pull-word'
          span.style.animationDelay = `${wordIndex * 0.1}s`
          span.textContent = word
          frag.appendChild(span)
          wordIndex += 1
          if (i < words.length - 1) frag.appendChild(document.createTextNode(' '))
        })
        return frag
      }

      if (el.tagName === 'H1' && el.querySelector(':scope > span')) {
        const lines = Array.from(el.querySelectorAll<HTMLElement>(':scope > span'))
        lines.forEach((line) => {
          line.classList.add('pull-line')
          line.style.display = 'block'
          const text = line.textContent ?? ''
          line.textContent = ''
          line.appendChild(wrapWords(text))
        })
      } else {
        const text = el.textContent ?? ''
        el.textContent = ''
        el.appendChild(wrapWords(text))
      }
    })

    // ---- scroll reveal ----
    if (typeof IntersectionObserver === 'undefined') {
      root.querySelectorAll<HTMLElement>('.words-pull-up').forEach((el) => el.classList.add('words-visible'))
      root.querySelectorAll<HTMLElement>('.fade-up-reveal').forEach((el) => {
        el.style.animationDelay = '0s'
        el.classList.add('is-visible')
      })
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('touchmove', onTouchMove)
      }
    }

    const wordsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('words-visible')
            wordsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ?? '0'
            el.style.animationDelay = `${delay}s`
            el.classList.add('is-visible')
            fadeObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    root.querySelectorAll<HTMLElement>('.words-pull-up').forEach((el) => wordsObserver.observe(el))
    root.querySelectorAll<HTMLElement>('.fade-up-reveal').forEach((el) => fadeObserver.observe(el))

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      wordsObserver.disconnect()
      fadeObserver.disconnect()
    }
  }, [])

  return (
    <div className="cyber-ronin" ref={rootRef}>
      <main className="hero">
        <div className="hero-base-img hero-image-animate" style={{ backgroundImage: `url('${BASE_IMG}')` }} />
        <div className="hero-reveal-img" id="reveal-img" ref={revealRef} style={{ backgroundImage: `url('${REVEAL_IMG}')` }} />

        <div className="hero-ui">
          <div className="hero-left">
            <div className="hero-copy">
              <h1 className="words-pull-up">
                <span>RONIN-X //</span>
                <span>SHADOW</span>
                <span>NIGHTFALL</span>
              </h1>
              <p className="fade-up-reveal" data-delay="0.5">
                Cultivated with high-res optics and a zero-gravity frame for those who don&apos;t just watch the
                future—they wield it. Shift your reality.
              </p>
              <div className="icon-row fade-up-reveal" data-delay="0.65">
                <button className="icon-btn" type="button" aria-label="Main core">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.4L13.8 4.7V11.3L8 14.6L2.2 11.3V4.7L8 1.4Z" />
                    <circle cx="8" cy="8" r="1.35" fill="currentColor" />
                  </svg>
                </button>
                <button className="icon-btn" type="button" aria-label="Vision">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5.2V2h3.2" strokeLinecap="round" />
                    <path d="M14 5.2V2h-3.2" strokeLinecap="round" />
                    <path d="M2 10.8V14h3.2" strokeLinecap="round" />
                    <path d="M14 10.8V14h-3.2" strokeLinecap="round" />
                    <rect x="5.2" y="5.2" width="5.6" height="5.6" />
                  </svg>
                </button>
                <button className="icon-btn" type="button" aria-label="Force">
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.2 1.6L4 9.1h3.5L6.8 14.4 12 6.9H8.5L9.2 1.6Z" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            <article className="product-card">
              <div className="product-thumb" aria-hidden="true" style={{ backgroundImage: `url('${PRODUCT_IMG}')` }} />
              <div className="product-body">
                <h2 className="words-pull-up">CR-01: CYBER FRAME</h2>
                <p className="fade-up-reveal" data-delay="1.05">
                  Precision-grade optics and a light frame for comfort and clarity.
                </p>
              </div>
              <button className="cart-btn fade-up-reveal" data-delay="1.15" type="button">
                Reserve Now
              </button>
            </article>
          </div>

          <div className="hero-page fade-up-reveal" data-delay="0.75">
            1/26
          </div>

          <div className="specs">
            <h3 className="words-pull-up">Operative Specs</h3>
            <div className="spec-row fade-up-reveal" data-delay="1.2">
              <span className="spec-label">Vision</span>
              <span className="spec-value">Dual 8K Pulse-OLED</span>
            </div>
            <div className="spec-row fade-up-reveal" data-delay="1.3">
              <span className="spec-label">Nerve</span>
              <span className="spec-value">R1 - Ronin Engines</span>
            </div>
            <div className="spec-row fade-up-reveal" data-delay="1.4">
              <span className="spec-label">Reflex</span>
              <span className="spec-value">144Hz Low-Lag Ops</span>
            </div>
            <div className="spec-row fade-up-reveal" data-delay="1.5">
              <span className="spec-label">Armor</span>
              <span className="spec-value">Lightweight Shadow Shell</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
