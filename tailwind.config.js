/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Blue: '#01A0E1',
        Yellow: '#F1EC21',

      }
    },
  },
  plugins: [],
}

