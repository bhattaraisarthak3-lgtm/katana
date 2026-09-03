import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="relative border-t hairline bg-void px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-5xl leading-[0.95] text-ivory sm:text-7xl">
          THE BLADE
          <br />
          REMAINS.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-12 border-t hairline pt-12 sm:grid-cols-3">
          <div>
            <span className="font-serif text-lg tracking-[0.08em] text-ivory">
              KATANA <span className="jp-glyph text-gold-muted">// 刀</span>
            </span>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-ivory/40">
              Commissioned, forged, inspected, and finished individually — inspired by traditional
              Japanese swordmaking practices.
            </p>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ivory/40">Explore</span>
            <ul className="mt-4 flex flex-col gap-2.5 font-mono text-xs uppercase tracking-widest2 text-ivory/60">
              <li><Link to="/" className="gold-underline hover:text-ivory">Home</Link></li>
              <li><Link to="/swords" className="gold-underline hover:text-ivory">Swords</Link></li>
              <li><Link to="/our-story" className="gold-underline hover:text-ivory">Our Story</Link></li>
              <li><Link to="/contact" className="gold-underline hover:text-ivory">Inquire</Link></li>
              <li><Link to="/faq" className="gold-underline hover:text-ivory">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest2 text-ivory/40">Contact</span>
            <ul className="mt-4 flex flex-col gap-2.5 font-mono text-xs uppercase tracking-widest2 text-ivory/60">
              <li>Private Commissions</li>
              <li>
                <a href="mailto:atelier@katana.example" className="gold-underline hover:text-ivory">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="gold-underline hover:text-ivory">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t hairline pt-6 font-mono text-[10px] uppercase tracking-widest2 text-ivory/30 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; 2026 KATANA // 刀</span>
          <span>Craft / Steel / Time</span>
        </div>
      </div>
    </footer>
  )
}
