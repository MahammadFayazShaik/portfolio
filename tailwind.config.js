/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a78bfa",       /* Soft Violet */
        secondary: "#67e8f9",     /* Aqua Cyan */
        accent: "#fb923c",        /* Warm Orange */
        creative: "#f9a8d4",      /* Blush Pink */
        background: "#100c1e",    /* Deep Warm Purple-Black */
        "card-bg": "rgba(255, 255, 255, 0.04)",
        "glow-primary": "rgba(167, 139, 250, 0.3)",
        "glow-secondary": "rgba(103, 232, 249, 0.3)",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-chase': 'glow-chase 6s linear infinite',
        'morph-liquid': 'morph-liquid 10s ease-in-out infinite',
        'float-fancy': 'float-fancy 8s ease-in-out infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'aura-flow': 'aura-flow 8s linear infinite',
      },
      keyframes: {
        'glow-chase': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'morph-liquid': {
          '0%, 100%': { 'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { 'border-radius': '30% 60% 70% 30% / 50% 60% 30% 60%' },
        },
        'float-fancy': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(2deg)' },
        },
        'aura-flow': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      },
      backgroundImage: {
        'aura-gradient': 'conic-gradient(from 180deg at 50% 50%, var(--primary) 0deg, var(--secondary) 180deg, var(--accent) 360deg)',
      }
    },
  },
  plugins: [],
}
