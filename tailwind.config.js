/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary: '#76C596',
        secondary: '#4298CB',
        'light-green': '#73C295'
      },
      fontFamily: {
        montserrat : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}