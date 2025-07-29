/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rose-gold': '#e8b4b8',
        'deep-rose': '#c44569',
        'burgundy': '#8b1538',
        'blush': '#ffc3d0',
        'wine': '#722f37',
        'deep-black': '#0a0a0a',
        'card-black': '#1a0f12',
        'soft-pink': '#f8d7da',
        'dark-pink': '#d63384',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'lora': ['Lora', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
        'merriweather': ['Merriweather', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in-left': 'fadeInLeft 1s ease-out',
        'fade-in-right': 'fadeInRight 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-custom': 'pulse 1.5s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'twinkle': 'twinkle var(--duration, 2s) ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        'scroll-lyrics': 'scrollLyrics 60s linear infinite',
        'slide-down': 'slideDown 1s ease-out',
        'sparkle': 'sparkle var(--duration, 2s) ease-in-out infinite',
        'music-pulse': 'musicPulse var(--duration, 2s) ease-in-out infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(232, 180, 184, 0.3)',
        'glow-lg': '0 0 40px rgba(232, 180, 184, 0.5)',
        'ambient': '0 0 20px rgba(232, 180, 184, 0.1), 0 0 40px rgba(232, 180, 184, 0.05), inset 0 0 20px rgba(232, 180, 184, 0.02)',
      },
    },
  },
  plugins: [],
};