import { CreditedImage } from '../data/assets'

interface ImageFrameProps {
  image: CreditedImage
  aspect?: string
  className?: string
  priority?: boolean
  overlay?: boolean
  showCredit?: boolean
  imgClassName?: string
}

/**
 * Shared image treatment: a reserved aspect ratio (no layout shift), lazy
 * loading below the fold, and the site-wide dark grading so every
 * photograph — regardless of source lighting — reads as one art direction.
 */
export default function ImageFrame({
  image,
  aspect = 'aspect-[4/5]',
  className = '',
  priority = false,
  overlay = true,
  showCredit = false,
  imgClassName = '',
}: ImageFrameProps) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {overlay && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,.55), transparent 45%, rgba(0,0,0,.85)), radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.5))',
          }}
        />
      )}
      {showCredit && (
        <a
          href={image.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-2 right-2 font-mono text-[9px] tracking-widest2 text-ivory/40 hover:text-ivory/70 transition-colors"
        >
          {image.credit} / {image.license}
        </a>
      )}
    </div>
  )
}
