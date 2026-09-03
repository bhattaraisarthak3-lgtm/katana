import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'SWORDS', to: '/swords' },
  { label: 'OUR STORY', to: '/our-story' },
  { label: 'INQUIRE', to: '/contact' },
]

export default function Navbar() {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,padding,border-color] duration-500 ${
          scrolled ? 'bg-void/85 backdrop-blur-md border-b hairline py-3' : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-10">
          <NavLink
            to="/"
            aria-label="Return to homepage"
            className={`font-serif tracking-[0.08em] text-ivory transition-all duration-500 gold-underline ${
              scrolled ? 'text-lg' : 'text-xl'
            }`}
          >
            KATANA <span className="jp-glyph text-gold-muted">// 刀</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                data-cursor="OPEN"
                className={({ isActive }) =>
                  `gold-underline font-mono text-xs uppercase tracking-widest2 transition-colors ${
                    isActive ? 'is-active text-ivory' : 'text-ivory/70 hover:text-ivory'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden relative h-8 w-8 shrink-0"
          >
            <span
              className={`absolute left-1 right-1 h-px bg-ivory transition-all duration-300 ${
                menuOpen ? 'top-1/2 rotate-45' : 'top-[10px]'
              }`}
            />
            <span
              className={`absolute left-1 right-1 top-1/2 h-px bg-ivory transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-1 right-1 h-px bg-ivory transition-all duration-300 ${
                menuOpen ? 'top-1/2 -rotate-45' : 'top-[22px]'
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-opacity duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span
          className="jp-glyph absolute right-2 top-1/3 select-none text-[45vw] leading-none text-ivory/[0.04]"
          aria-hidden="true"
        >
          刀
        </span>

        <nav className="relative z-10 flex h-full flex-col items-start justify-center gap-2 px-8">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={`font-serif text-4xl text-ivory transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${menuOpen ? i * 90 : 0}ms` }}
            >
              <span className="font-mono text-sm align-middle text-gold-muted mr-3">
                0{i + 1} /
              </span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  )
}
