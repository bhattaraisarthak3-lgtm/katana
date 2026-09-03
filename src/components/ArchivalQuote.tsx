import Reveal from './Reveal'

export default function ArchivalQuote() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-void px-6 py-24 text-center">
      <Reveal>
        <p className="max-w-2xl font-serif text-4xl leading-snug text-ivory sm:text-5xl">
          &ldquo;A blade is not finished when it is forged.&rdquo;
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-8 max-w-md font-serif text-lg italic text-ivory/50">
          It is finished when every detail belongs together.
        </p>
      </Reveal>
      <Reveal delay={0.35}>
        <p className="mt-10 font-mono text-[10px] uppercase tracking-widest2 text-ivory/30">
          Katana // 刀, brand philosophy
        </p>
      </Reveal>
    </section>
  )
}
