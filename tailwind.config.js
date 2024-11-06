/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        subheading: ["Roboto Slab", "serif"],
        body: ["Open Sans", "sans-serif"],
      },

    },
  },
  plugins: [],
};

