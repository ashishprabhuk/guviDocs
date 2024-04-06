/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",flowbite.content(),],
  theme: {
    extend: {
      fontFamily: {
        'dms':['DM Sans', 'sans-serif'],
        'pac': ['Pacifico', 'cursive'],
        'lex': ['Lexend', 'sans-serif'],
        'mono': ['Sometype Mono', 'monospace'],
        'noto': ['Noto Sans', 'sans-serif'],
        'pop': ['Poppins', 'sans-serif'],
      },
      colors: {
        'logo': '#0DBA4B',
        'lightG': '#c4f2cb',
      }
    },
  },
  plugins: [flowbite.plugin(),],
}

