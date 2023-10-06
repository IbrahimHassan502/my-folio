/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/js/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "folio-black": "#101113",
        "folio-light-black": "#1E1E1E",
        "folio-dark-mustard": "#A6A001",
      },
      fontFamily: {
        heading: ["Helvetica Rounded Bold Condensed"],
        main: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
