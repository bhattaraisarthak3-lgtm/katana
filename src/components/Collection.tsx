import { useState } from 'react'
import { swords } from '../data/swords'
import SectionLabel from './SectionLabel'
import SwordCard from './SwordCard'
import SwordDetailPanel from './SwordDetailPanel'
import Reveal from './Reveal'
import InspectionMode from './InspectionMode'
import { swordAssets } from '../data/assets'
import type { Sword } from '../data/swords'
import ArchivalGrid from './ArchivalGrid'

export default function Collection() {
  const [selected, setSelected] = useState<Sword | null>(null)
  const [inspecting, setInspecting] = useState(false)

  return (
    <section id="products" className="relative scroll-mt-24 bg-void px-6 py-28 sm:px-10 sm:py-36">
      <ArchivalGrid labels={['BLADE STUDY / 013', 'MATERIAL RECORD', 'PROFILE A', 'COLLECTION 2026']} />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 border-b hairline pb-12 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel>Collection // 01</SectionLabel>
            <h2 className="mt-4 font-serif text-5xl leading-[0.95] text-ivory sm:text-6xl">
              BLADES OF
              <br />
              DISTINCTION.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-xs">
            <p className="text-sm leading-relaxed text-ivory/55">
              Every blade begins as a material study and ends as an individual object. No two
              pieces are finished identically.
            </p>
            <button
              type="button"
              onClick={() => setInspecting(true)}
              data-cursor="VIEW"
              className="gold-underline mt-6 font-mono text-xs uppercase tracking-widest2 text-ivory/70 hover:text-ivory"
            >
              Inspect Blade
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {swords.map((sword, i) => (
            <Reveal key={sword.id} delay={i * 0.08}>
              <SwordCard sword={sword} onSelect={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <SwordDetailPanel sword={selected} onClose={() => setSelected(null)} />
      <InspectionMode
        open={inspecting}
        onClose={() => setInspecting(false)}
        image={swordAssets.hero}
      />
    </section>
  )
}
