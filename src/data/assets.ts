/**
 * Centralized image configuration.
 *
 * Two sources are mixed deliberately:
 *  - Macro/technical detail shots (steel, hamon, tsuba, tsuka, saya) are real
 *    photographs sourced from Wikimedia Commons under open licenses — see
 *    each entry's `sourceUrl` for the file page and full license text.
 *  - Hero, forging, story, and collection imagery are studio photographs
 *    provided directly for this project and served locally from `/public`.
 */

const filePath = (name: string, width: number) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=${width}`

const local = (file: string) => `/images/katana/${file}`

export interface CreditedImage {
  src: string
  credit: string
  license: string
  sourceUrl: string
  alt: string
}

export const swordAssets = {
  hero: {
    src: local('katana-museum-gallery.jpeg'),
    credit: 'Studio photography',
    license: 'Provided for this project',
    sourceUrl: local('katana-museum-gallery.jpeg'),
    alt: 'A single katana on a black display stand, lit by one narrow beam of light against total darkness.',
  } satisfies CreditedImage,

  steel: {
    src: filePath('Katana_blade_with_hi_and_hamon.jpg', 1600),
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA 3.0 / GFDL',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Katana_blade_with_hi_and_hamon.jpg',
    alt: 'Detail of a katana blade showing the hi groove and hamon temper line.',
  } satisfies CreditedImage,

  hamon: {
    src: filePath('Hamon, the temper line of a Japanese sword.jpg', 1400),
    credit: 'Dan Culleton',
    license: 'CC BY 2.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hamon,_the_temper_line_of_a_Japanese_sword.jpg',
    alt: 'Close-up macro photograph of a hamon, the temper line on a Japanese sword blade.',
  } satisfies CreditedImage,

  tsuba: {
    src: filePath('Sword Guard (Tsuba) MET 38.25.40 002apr2014.jpg', 1400),
    credit: 'The Metropolitan Museum of Art',
    license: 'CC0 1.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Sword_Guard_(Tsuba)_MET_38.25.40_002apr2014.jpg',
    alt: 'A Japanese sword guard, or tsuba, photographed against a plain background.',
  } satisfies CreditedImage,

  tsuka: {
    src: filePath('Hilt of katana.jpg', 1600),
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA 4.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Hilt_of_katana.jpg',
    alt: 'The wrapped handle, or tsuka, of an early Edo-period katana.',
  } satisfies CreditedImage,

  forging: {
    src: local('katana-blacksmith-forge-1.jpeg'),
    credit: 'Studio photography',
    license: 'Provided for this project',
    sourceUrl: local('katana-blacksmith-forge-1.jpeg'),
    alt: 'A katana resting on a display stand beside a glowing forge, embers rising in the dark.',
  } satisfies CreditedImage,

  saya: {
    src: filePath('Katana saya.JPG', 1600),
    credit: 'Wikimedia Commons contributor',
    license: 'CC BY-SA 3.0',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Katana_saya.JPG',
    alt: 'A traditional lacquered katana scabbard, or saya.',
  } satisfies CreditedImage,

  storyTemple: {
    src: local('katana-temple.jpeg'),
    credit: 'Studio photography',
    license: 'Provided for this project',
    sourceUrl: local('katana-temple.jpeg'),
    alt: 'A mounted katana displayed on a stand inside a wooden temple hall, lit by a shaft of warm light.',
  } satisfies CreditedImage,

  swordReveal: {
    src: local('katana-storm-1.jpeg'),
    credit: 'Studio photography',
    license: 'Provided for this project',
    sourceUrl: local('katana-storm-1.jpeg'),
    alt: 'A bare blade planted upright on a rain-soaked rock, lightning striking distant mountains behind it.',
  } satisfies CreditedImage,

  forgeTransitionBg: {
    src: local('katana-stone-pedestal.jpeg'),
    credit: 'Studio photography',
    license: 'Provided for this project',
    sourceUrl: local('katana-stone-pedestal.jpeg'),
    alt: 'A katana and its scabbard standing on a dark volcanic stone, wrapped in red mist.',
  } satisfies CreditedImage,

  collection: {
    kage: {
      src: local('katana-storm-2.jpeg'),
      credit: 'Studio photography',
      license: 'Provided for this project',
      sourceUrl: local('katana-storm-2.jpeg'),
      alt: 'A katana and scabbard resting on wet dark rock under a lightning-lit stormy sky.',
    } satisfies CreditedImage,
    hikari: {
      src: local('katana-snow-mountain.jpeg'),
      credit: 'Studio photography',
      license: 'Provided for this project',
      sourceUrl: local('katana-snow-mountain.jpeg'),
      alt: 'A katana resting on snow-covered rock under a full moon and clear night sky.',
    } satisfies CreditedImage,
    shiro: {
      src: local('katana-wooden-platform.jpeg'),
      credit: 'Studio photography',
      license: 'Provided for this project',
      sourceUrl: local('katana-wooden-platform.jpeg'),
      alt: 'A pale-hilted katana resting on a wooden platform in a temple garden, cherry blossom petals drifting past.',
    } satisfies CreditedImage,
    kurenai: {
      src: local('katana-blacksmith-forge-2.jpeg'),
      credit: 'Studio photography',
      license: 'Provided for this project',
      sourceUrl: local('katana-blacksmith-forge-2.jpeg'),
      alt: 'A katana with deep crimson handle wrap and scabbard, displayed beside a glowing forge.',
    } satisfies CreditedImage,
  },
}
