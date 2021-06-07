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
      boxShadow: {
        'floating-bar': '0px 0px 25px rgba(58, 36, 119, 0.1)'
      },
      width: {
        120: '30rem',
      },
    },
  },
  variants: {
    extend: {
      fontStyle: ['hover', 'focus'],
    },
  },
  plugins: [],
}
