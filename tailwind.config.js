/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        surface: {
          1: '#111118',
          2: '#18181b'
        },
        zinc: {
          950: '#09090b',
          900: '#18181b',
          800: '#27272a',
          700: '#3f3f46',
          400: '#a1a1aa',
          200: '#e4e4e7',
        },
        text: {
          main: '#ffffff',
          muted: '#a1a1aa'
        },
        border: 'rgba(255,255,255,0.08)'
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      borderRadius: {
        lg: '8px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
