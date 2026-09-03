import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import Configurator from './Configurator'
import CommissionForm from './CommissionForm'

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 bg-void">
      <Configurator />

      <div className="border-t hairline">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10 sm:py-32">
          <Reveal>
            <SectionLabel>Bespoke Commission</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
              YOUR BLADE.
              <br />
              YOUR SPECIFICATION.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ivory/60">
              A bespoke commission can begin with a blade profile, a steel preference, a mounting
              direction, a tsuba style, a saya finish, or an engraving idea — even one of these is
              enough to start.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-14">
            <CommissionForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
