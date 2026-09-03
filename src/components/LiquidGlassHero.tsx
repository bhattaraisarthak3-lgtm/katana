import { Link } from 'react-router-dom'

const BG_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4'

export default function LiquidGlassHero() {
  return (
    <div className="font-geist-hero relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute bottom-0 left-0 z-20 max-w-2xl px-6 pb-10 sm:px-12 sm:pb-16">
        <h1 className="mb-4 text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Steel Carried Through Generations
        </h1>
        <p className="mb-7 max-w-md text-sm leading-relaxed text-white/60">
          Every blade in our collection begins where the last master left off — folded steel,
          hand-quenched tempers, and a lineage of smiths who refuse to let the craft fade into
          machine-stamped steel.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#our-story-content"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-7 sm:text-base"
          >
            Meet Our Smiths
          </a>
          <Link
            to="/swords"
            className="liquid-glass rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-7 sm:text-base"
          >
            View Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
