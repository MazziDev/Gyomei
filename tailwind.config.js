/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          /* Warm Ember (yellow -> deep red) */
          50:  '#fff8e8',  // candle glow highlight
          100: '#ffefd1',  // very light amber
          200: '#ffe0a6',  // pale amber
          300: '#ffca68',  // soft golden
          400: '#ffb23a',  // rich amber
          500: '#ff980e',  // bright focal (primary mid)
          600: '#f06d06',  // strong orange (primary used previously as 600)
          700: '#d94c0a',  // orange-red accent
          800: '#b23510',  // deep ember
          900: '#7f250f',  // dark burnt
          950: '#451308'   // near-black warm core
        }
      }
    },
  },
  plugins: [],
}
