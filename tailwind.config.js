export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Epilogue"', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      colors: {
        // Organic Anchor — Primary Surfaces
        'fasal-sand': '#F1E5D1',
        'fasal-oat': '#DFC59D',
        'fasal-cream': '#F1E5D1', // Alias for backward compat (same as sand, never #F0+)

        // Organic Anchor — Earth Accents
        'fasal-terracotta': '#D67641',
        'fasal-ochre': '#C99535',
        'fasal-clay': '#B08B6E',
        'fasal-orange': '#D67641', // Alias → terracotta
        'fasal-golden': '#C99535', // Alias → ochre
        'fasal-yellow': '#D8AA49',

        // Organic Anchor — Greens
        'fasal-moss': '#707A40',
        'fasal-darkgreen': '#3A4820',
        'fasal-leaf': '#7B8A47',
        'fasal-sage': '#9AA883',

        // Organic Anchor — Text
        'fasal-brown': '#493529',

        // Warm overrides (no cold greys, no pure white/black)
        'white': '#D4B895',
        'gray-50': '#EADDC6',
        'gray-100': '#DFD1BA',
        'gray-200': '#D4B895',
        'gray-300': '#B9A180',
        'gray-400': '#9E8A70',
        'gray-500': '#83715C',
        'gray-600': '#655646',
        'gray-700': '#383F25',
        'gray-750': '#2D331C',
        'gray-800': '#1E2311',
        'gray-900': '#1A1E0E',
        'black': '#12160A',

        // Explicit dark surfaces to avoid cool navy cast
        'fasal-night': '#11150B',
        'fasal-ink': '#1A1F10',
        'fasal-panel': '#202617',
      },
      borderRadius: {
        'organic': '16px',
        'organic-lg': '24px',
        'organic-xl': '32px',
      },
      transitionTimingFunction: {
        'organic': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'organic-gentle': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      keyframes: {
        'breathe': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'halo-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.08)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'breathe': 'breathe 6s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'halo-pulse': 'halo-pulse 6s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
}
