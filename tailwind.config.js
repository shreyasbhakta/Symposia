/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        symposia: {
          red: '#FF6B6B',
          yellow: '#FFD93D',
          gray: '#A4A4A4',
          orange: '#FF9F43',
          tan: '#D4A373',
          lime: '#C8FF3D',
          turquoise: '#4ECDC4'
        }
      }
    },
  },
  plugins: [],
};