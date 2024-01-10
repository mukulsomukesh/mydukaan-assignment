module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50:"#FFFFFF",
          100: '#4D4D4D',
          200: '#F2F2F2',
          300: '#1E2640',
          400:"#353C53",
          500:"#494f64"
        },
        secondary:{
          50:"#353C53",
          100:"#353C53"
        }
      },
    },
  },
  plugins: [],
};
