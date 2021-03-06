module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'index-background': "url('/pozadi_hth_n.jpg')",
        'projects-backround': "url('/pozadi_projects.jpg')",
        'success-backround': "url('/success.jpg')",
        'helper-backround': "url('/pozadi_helper.jpg')",
      }),

      colors: {
        grey: { light: '#f3eff5', DEFAULT: '#454955', dark: '#0d0a0b' },
        green: { DEFAULT: '#72b01d', dark: '#3f7d20' },
      },
      fontFamily: { body: ['Montserrat'], title: ['Bebas Neue'] },

      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        50: '50%',
        75: '75%',
      },

      screens: { xsm: '500px' },

      minWidth: { '1/2': '50%' },
      maxWidth: { '1/2': '50%' },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
