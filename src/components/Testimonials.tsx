import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const reviews = [
  {
    quote:
      'The balance on my KAGE is unlike anything I have handled from a production forge. It moves like a piece built for one person.',
    name: 'D. Alvarez',
    role: 'Iaido practitioner, twelve years',
  },
  {
    quote:
      'I commissioned KURENAI as a display piece and ended up training with it. The hamon is genuinely something to sit with.',
    name: 'M. Okafor',
    role: 'Private collector',
  },
  {
    quote:
      'The consultation alone took longer than most brands spend on the entire order. That care shows in the finished blade.',
    name: 'S. Tanaka-Reyes',
    role: 'First commission, 2026',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-void px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 text-center">
          <SectionLabel>Correspondence</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl text-ivory sm:text-5xl">FROM THOSE WHO CARRY ONE.</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1} className="border-t hairline pt-6">
              <p className="font-serif text-xl italic leading-snug text-ivory/85">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-widest2 text-ivory/40">
                {r.name} — {r.role}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
