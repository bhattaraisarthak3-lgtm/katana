import Reveal from './Reveal'
import { swordAssets } from '../data/assets'

export default function ForgeTransition() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 overflow-hidden bg-void px-6 py-32 text-center sm:py-40">
      <img
        src={swordAssets.forgeTransitionBg.src}
        alt={swordAssets.forgeTransitionBg.alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(11,11,12,.85) 70%), rgba(11,11,12,.55)' }}
      />

      <Reveal className="relative w-full max-w-md">
        <span className="gold-line block h-px w-full bg-gold" />
      </Reveal>
      <Reveal delay={0.2} className="relative">
        <p className="font-mono text-xs uppercase tracking-widest3 text-ivory/60">
          The Hand Behind the Steel
        </p>
      </Reveal>
      <Reveal delay={0.35} className="relative">
        <p className="max-w-md font-serif text-2xl italic text-ivory/80">
          Before the blade becomes an object, it becomes a process.
        </p>
      </Reveal>
    </div>
  )
}
