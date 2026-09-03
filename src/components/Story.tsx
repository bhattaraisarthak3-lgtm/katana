import Reveal from './Reveal'
import SectionLabel from './SectionLabel'
import ForgeTimeline from './ForgeTimeline'
import MaterialMacro from './MaterialMacro'
import TsubaDetail from './TsubaDetail'
import ArchivalQuote from './ArchivalQuote'
import { swordAssets } from '../data/assets'
import ArchivalGrid from './ArchivalGrid'

export default function Story() {
  return (
    <section id="story" className="relative scroll-mt-24 bg-void">
      <ArchivalGrid labels={['FORGING NOTES', 'ARCHIVE 06', 'HAND RECORD', 'STUDY / STEEL']} />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-28 sm:px-10 sm:py-36 md:grid-cols-2 md:items-center md:gap-16">
        <Reveal className="relative aspect-[4/5] overflow-hidden">
          <img
            src={swordAssets.storyTemple.src}
            alt={swordAssets.storyTemple.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.4), transparent 40%, rgba(0,0,0,.8))' }}
          />
        </Reveal>

        <Reveal delay={0.15}>
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] text-ivory sm:text-5xl">
            FORGED BY HAND.
            <br />
            FINISHED BY MEMORY.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-ivory/60">
            Every commission begins with a conversation and ends months later at the anvil. Inspired
            by traditional Japanese swordmaking practices, each blade in the collection is
            individually forged, inspected, and finished — never assembled from stock parts.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/60">
            We do not claim lineage to any historical school. What we offer is restraint,
            patience, and a process that respects the one it borrows from.
          </p>
        </Reveal>
      </div>

      <ForgeTimeline />
      <MaterialMacro />
      <TsubaDetail />
      <ArchivalQuote />
    </section>
  )
}
