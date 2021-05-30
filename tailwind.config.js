module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'index-background': "url('/pozadi_hth.jpg')",
      }),
    },
    colors: {
      grey: { light: '#f3eff5', DEFAULT: '#454955', dark: '#0d0a0b' },
      green: { DEFAULT: '#72b01d', dark: '#3f7d20' },
    },
    fontFamily: { body: ['Montserrat'], title: ['Bebas Neue'] },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
