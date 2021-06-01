const colors = require('./styles/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        markwebpro: ['MarkWebPro'],
      },
      colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
