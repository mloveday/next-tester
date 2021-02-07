const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,

      blue: colors.blue,
      green: colors.green,
      indigo: colors.indigo,
      purple: colors.purple,
      red: colors.rose,
      teal: colors.teal,
      yellow: colors.amber,
    }
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
}
