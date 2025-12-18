/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./Pages/**/*.html",
    "./JavaScript/**/*.js"
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
    },
  },
  plugins: [],
}
