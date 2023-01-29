/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          250: '#f3ef7c',
          450: '#c1f762'
        }
      }
    },
  },
  plugins: [],
}
