import { swordAssets } from './assets'

export interface Sword {
  id: string
  name: string
  jp: string
  tagline: string
  description: string
  image: typeof swordAssets.hero
  specs: {
    steel: string
    length: string
    mounting: string
    habaki: string
    tsuba: string
    tsuka: string
    saya: string
    weight: string
  }
  status: 'Commission Only' | 'Limited Availability' | 'By Appointment'
}

export const swords: Sword[] = [
  {
    id: 'kage',
    name: 'KAGE',
    jp: '影',
    tagline: 'Darkened blade, restrained mounting',
    description:
      'A blade finished in a low, shadowed polish, paired with an unadorned black mounting. Kage is built for owners who want presence without ornament.',
    image: swordAssets.collection.kage,
    specs: {
      steel: 'Tamahagane-inspired folded steel',
      length: '72.4 cm',
      mounting: 'Matte black lacquer',
      habaki: 'Blackened copper',
      tsuba: 'Iron, unsigned',
      tsuka: 'Black rayskin, black ito',
      saya: 'Matte black lacquer',
      weight: '890 g (blade only)',
    },
    status: 'Commission Only',
  },
  {
    id: 'hikari',
    name: 'HIKARI',
    jp: '光',
    tagline: 'Bright polished steel, minimalist mounting',
    description:
      'Hikari favors the steel itself — a high mirror polish under a spare, undecorated mounting, so the hamon carries the entire piece.',
    image: swordAssets.collection.hikari,
    specs: {
      steel: 'Tamahagane-inspired folded steel',
      length: '71.8 cm',
      mounting: 'Natural wood, oil-finished',
      habaki: 'Polished silver alloy',
      tsuba: 'Brushed brass, unsigned',
      tsuka: 'Natural rayskin, undyed ito',
      saya: 'Natural lacquer, satin finish',
      weight: '865 g (blade only)',
    },
    status: 'Limited Availability',
  },
  {
    id: 'kurenai',
    name: 'KURENAI',
    jp: '紅',
    tagline: 'Subtle crimson detailing',
    description:
      'The only piece in the collection to carry color: a single crimson line through the habaki and ito, set against an otherwise dark mounting.',
    image: swordAssets.collection.kurenai,
    specs: {
      steel: 'Tamahagane-inspired folded steel',
      length: '72.1 cm',
      mounting: 'Black lacquer, crimson accents',
      habaki: 'Copper with crimson lacquer inlay',
      tsuba: 'Iron, crimson-lacquered rim',
      tsuka: 'Black rayskin, crimson ito',
      saya: 'Black lacquer, crimson crest',
      weight: '895 g (blade only)',
    },
    status: 'Commission Only',
  },
  {
    id: 'shiro',
    name: 'SHIRO',
    jp: '白',
    tagline: 'Light-toned traditional aesthetic',
    description:
      'Shiro is mounted in the plain, undecorated shirasaya style traditionally used for a blade at rest — quiet, pale, and unhurried.',
    image: swordAssets.collection.shiro,
    specs: {
      steel: 'Tamahagane-inspired folded steel',
      length: '72.0 cm',
      mounting: 'Shirasaya, unlacquered hōnoki wood',
      habaki: 'Plain silver alloy',
      tsuba: 'None (shirasaya mounting)',
      tsuka: 'Plain hōnoki wood',
      saya: 'Plain hōnoki wood, unlacquered',
      weight: '850 g (blade only)',
    },
    status: 'By Appointment',
  },
]

/**
 * Conceptual specifications above describe fictional collection pieces
 * inspired by traditional Japanese swordmaking practices. They are not
 * historical certifications or claims about any verified antique object.
 */
