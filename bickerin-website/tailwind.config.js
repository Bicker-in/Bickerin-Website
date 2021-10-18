module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'matte-black': "#28282B",
        'gradient-mid': "#1C4D40",
        'light-gray': "#D2D2D2",
        'bright-green': '#0FC100'
      },
      fontFamily: {
        'primary-font': ['Prompt', 'Ubuntu', 'Rubik'],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active'],
      borderBottomWidth: ['hover'],
    },
  },
  plugins: [],
}
