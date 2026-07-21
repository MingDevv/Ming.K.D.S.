/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030303',
          card: 'rgba(18, 18, 18, 0.7)',
          red: {
            deep: '#5a0c10',
            ruby: '#800c12',
            bright: '#e61e2a',
            glow: '#ff3b47',
          },
          border: 'rgba(255, 255, 255, 0.08)',
          text: {
            primary: '#ffffff',
            secondary: '#a1a1aa',
            muted: '#71717a'
          }
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Sarabun', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-red': '0 0 20px rgba(230, 30, 42, 0.25)',
        'glow-red-strong': '0 0 30px rgba(255, 59, 71, 0.5)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
