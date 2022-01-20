module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      backgroundImage: {
        'app-logo': "url('../public/assets/logo.png')",
        'location': "url('../public/assets/location.png')",
        'home': "url('../public/assets/home.png')",
        'menu': "url('../public/assets/menu.png')",
        'search': "url('../public/assets/search.png')",
      }
    },
  },
  plugins: [],
}
