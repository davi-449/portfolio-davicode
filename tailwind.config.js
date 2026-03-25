/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: {
          1: '#111118',
          2: '#1a1a28'
        },
        accent: {
          DEFAULT: '#7c6aff', // violeta elétrico Davicode
          hover: '#9284ff',
          alt: '#ff6b6b' // vermelho coral
        },
        gold: '#f0c060', // detalhes premium
        text: {
          main: '#f0f0f8',
          muted: '#6b6b8a'
        },
        border: 'rgba(124,106,255,0.15)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
