import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function CommissionTeaser() {
  return (
    <section className="border-t hairline bg-rust/[0.08] px-6 py-24 text-center sm:px-10 sm:py-28">
      <Reveal className="mx-auto max-w-xl">
        <h2 className="font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
          YOUR BLADE.
          <br />
          YOUR SPECIFICATION.
        </h2>
        <p className="mt-6 text-sm leading-relaxed text-ivory/60">
          A bespoke commission can begin with a blade profile, a steel preference, or nothing more
          than an idea. Our studio takes it from there.
        </p>
        <Link
          to="/contact"
          data-cursor="INQUIRE"
          className="mt-9 inline-block border border-ivory px-8 py-3.5 font-mono text-xs uppercase tracking-widest2 text-ivory transition-colors hover:border-gold hover:text-gold"
        >
          Begin an Inquiry
        </Link>
      </Reveal>
    </section>
  )
}
