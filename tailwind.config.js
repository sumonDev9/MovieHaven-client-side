/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#706F6F',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
