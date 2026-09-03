import { useState } from 'react'
import Reveal from './Reveal'
import SectionLabel from './SectionLabel'

const bladeOptions = ['KOGARASU', 'SHINOGI', 'CUSTOM'] as const
const mountingOptions = { BLACK: '#0f0f10', NATURAL: '#8a6a45', CRIMSON: '#3c1114' } as const
const tsubaOptions = { IRON: '#3a3a3d', BRASS: '#b08d47', CUSTOM: '#6b6b6f' } as const
const sayaOptions = ['MATTE', 'LACQUER', 'TEXTURED'] as const

const bladePaths: Record<(typeof bladeOptions)[number], string> = {
  KOGARASU: 'M40,150 C120,120 260,95 380,86 L382,94 C264,104 122,128 44,156 Z',
  SHINOGI: 'M40,150 L382,100 L382,108 L40,158 Z',
  CUSTOM: 'M40,150 C140,110 260,100 382,84 L382,92 C262,108 142,118 44,156 Z',
}

type Mounting = keyof typeof mountingOptions
type Tsuba = keyof typeof tsubaOptions
type Saya = (typeof sayaOptions)[number]

export default function Configurator() {
  const [blade, setBlade] = useState<(typeof bladeOptions)[number]>('SHINOGI')
  const [mounting, setMounting] = useState<Mounting>('BLACK')
  const [tsuba, setTsuba] = useState<Tsuba>('IRON')
  const [saya, setSaya] = useState<Saya>('MATTE')

  const sayaOpacity = saya === 'LACQUER' ? 1 : saya === 'TEXTURED' ? 0.85 : 0.95

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <Reveal>
        <SectionLabel>Visual Configurator</SectionLabel>
        <h3 className="mt-4 font-serif text-3xl text-ivory sm:text-4xl">Shape Your Own.</h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-ivory/55">
          A visual configuration guide to start the conversation — not a manufacturing quote. Final
          specification is confirmed with your commissioning artisan.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <Reveal delay={0.1} className="flex aspect-[16/9] items-center justify-center bg-charcoal border hairline">
          <svg viewBox="0 0 420 220" className="h-full w-full" role="img" aria-label="Sword configuration preview">
            <rect
              x="8"
              y="150"
              width="34"
              height="16"
              rx="2"
              fill={mountingOptions[mounting]}
              stroke="rgba(255,255,255,0.15)"
            />
            <rect
              x="30"
              y="146"
              width="14"
              height="24"
              fill={tsubaOptions[tsuba]}
              stroke="rgba(255,255,255,0.2)"
            />
            <path
              d={bladePaths[blade]}
              fill={saya === 'TEXTURED' ? 'url(#texture)' : '#c9ccd1'}
              opacity={sayaOpacity}
              stroke="rgba(255,255,255,0.25)"
              strokeWidth={1}
            />
            <defs>
              <pattern id="texture" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="#c9ccd1" />
                <path d="M0 6 L6 0" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
              </pattern>
            </defs>
          </svg>
        </Reveal>

        <Reveal delay={0.2} className="flex flex-col gap-8">
          <ConfigRow label="Blade" value={blade} options={bladeOptions} onChange={setBlade} />
          <ConfigRow
            label="Mounting"
            value={mounting}
            options={Object.keys(mountingOptions) as Mounting[]}
            onChange={setMounting}
          />
          <ConfigRow label="Tsuba" value={tsuba} options={Object.keys(tsubaOptions) as Tsuba[]} onChange={setTsuba} />
          <ConfigRow label="Saya" value={saya} options={sayaOptions} onChange={setSaya} />
        </Reveal>
      </div>
    </div>
  )
}

function ConfigRow<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: readonly T[]
  onChange: (v: T) => void
}) {
  return (
    <div>
      <span className="font-mono text-[11px] uppercase tracking-widest2 text-ivory/40">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            aria-pressed={value === opt}
            className={`border px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest2 transition-colors ${
              value === opt
                ? 'border-gold text-gold'
                : 'border-ivory/15 text-ivory/50 hover:border-ivory/40 hover:text-ivory/80'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}
