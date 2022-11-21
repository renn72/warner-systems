/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["josefin sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
