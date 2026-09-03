import Reveal from './Reveal'

const marks = ['EST. 2026', 'HAND FORGED', 'TAMAHAGANE-INSPIRED STEEL', 'COMMISSIONED INDIVIDUALLY', 'TOKYO / JAPAN']

export default function TrustStrip() {
  return (
    <div className="border-b hairline bg-void px-6 py-8 sm:px-10">
      <Reveal className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:justify-between">
        {marks.map((m) => (
          <span key={m} className="font-mono text-[10px] uppercase tracking-widest2 text-ivory/40">
            {m}
          </span>
        ))}
      </Reveal>
    </div>
  )
}
