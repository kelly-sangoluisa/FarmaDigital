/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',      // Si tienes utilitarios en lib
    './src/**/*.{js,ts,jsx,tsx}',      // Incluye si tu código está en src/
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#136FBC',
          light:   '#60A4BF',
        },
        secondary: {
          DEFAULT: '#98BF45',
          light:   '#C6D99C',
        },
        neutral: {
          DEFAULT: '#F2F2F2',
          dark:    '#E0E0E0',
        },
      },
    },
  },
  // Si en algún momento generas clases dinámicas (ej. `bg-${color}`),
  // descomenta y ajusta la safelist:
  // safelist: [
  //   'bg-primary', 'bg-primary-light',
  //   'bg-secondary', 'bg-secondary-light',
  //   'bg-neutral', 'bg-neutral-dark'
  // ],
  plugins: [],
  experimental: {
    // Desactiva lightningcss en Next.js 15+ para evitar errores en Vercel
    optimizeUniversalDefaults: false,
  },
}
