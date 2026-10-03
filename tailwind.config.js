const c = (v) => `rgb(var(--${v}) / <alpha-value>)`
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { bg: c('bg'), fg: c('fg'), card: c('card'), brand: c('brand'), accent: c('accent'), muted: c('muted') },
      fontFamily: { display: ['"Playfair Display"', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
