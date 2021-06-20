module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx,vue}'],
  mode: 'jit',
  theme: {
    screens: {
      '2xs': '200px',
      'xs': '400px',
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1600px',
    },


    extend: {},
  },

  plugins: [],
}
