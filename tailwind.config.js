/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0B0C',
        charcoal: '#121214',
        elevated: '#18181B',
        ivory: '#E8E2D6',
        gold: '#D4AF37',
        'gold-muted': '#C5A059',
        crimson: '#6E171C',
        'crimson-muted': '#3C1114',
        'crimson-bright': '#C1484F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Serif JP"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'monospace'],
        jp: ['"Noto Serif JP"', 'serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.3em',
      },
      transitionTimingFunction: {
        atelier: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
