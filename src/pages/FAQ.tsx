import { useState } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionLabel from '../components/SectionLabel'

const faqs = [
  {
    q: 'Are your swords functional, or display only?',
    a: 'Every blade is fully functional unless listed as a display or ceremonial piece. Functional blades are differentially hardened and inspected before they leave the atelier.',
  },
  {
    q: 'What steel do you use?',
    a: 'Our collection uses folded, clay-tempered high-carbon steel, produced in a process inspired by traditional tamahagane practices rather than certified as historical tamahagane itself.',
  },
  {
    q: 'Can I customize fittings, engravings, or blade length?',
    a: 'Yes. Every commission includes a fitting consultation covering tsuba style, saya finish, tsuka wrap, and optional engraving before the blade is finished.',
  },
  {
    q: 'Is it legal for me to own or import a sword like this?',
    a: 'Ownership and import laws vary by country and region. We ask every client to confirm local rules before committing to a commission; our studio can provide documentation to support customs clearance.',
  },
  {
    q: 'How should I care for my blade?',
    a: 'Each sword ships with oil, a cleaning cloth, and a printed maintenance guide. In short: wipe after handling, oil lightly before long-term storage, and avoid humid, unventilated conditions.',
  },
  {
    q: 'What is your commission timeline and return policy?',
    a: 'Commissions typically take 8-14 weeks depending on mounting complexity, and ship insured in a protective case. Unused, unsharpened pieces can be returned within 30 days; custom engravings are final.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Every piece carries a lifetime warranty against forging defects, covering the blade, tang, and fittings for as long as you own it.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="bg-void">
      <Navbar />

      <section className="border-b hairline px-6 py-24 pt-32 text-center sm:px-10 sm:pt-40">
        <SectionLabel>Support</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">Frequently Asked Questions</h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-ivory/55">
          Materials, customization, legality, and care. Can&rsquo;t find your answer below? Reach out
          directly.
        </p>
      </section>

      <section className="px-6 py-20 sm:px-10">
        <div className="mx-auto flex max-w-3xl flex-col">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.q} className="border-t hairline last:border-b">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-ivory sm:text-xl">{item.q}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-gold-muted transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && <div className="pb-6 text-sm leading-relaxed text-ivory/60">{item.a}</div>}
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t hairline px-6 py-24 text-center sm:px-10">
        <h2 className="font-serif text-3xl text-ivory sm:text-4xl">Still Have Questions?</h2>
        <p className="mt-4 text-sm text-ivory/55">Our studio replies to every message within two business days.</p>
        <a
          href="mailto:atelier@katana.example"
          data-cursor="INQUIRE"
          className="gold-underline mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-ivory"
        >
          <Mail size={14} />
          Email the Atelier
        </a>
      </section>

      <Footer />
    </div>
  )
}
