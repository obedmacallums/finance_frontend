module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'],
  options: {safelist: [/^bg-[red|blue|pink|gray|green|purple|yellow|indigo]*-\d*$/]},
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
