module.exports = {
  purge: {
    content: ['./public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        great: "'Great Vibes', cursive",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
