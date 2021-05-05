const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    /* fontFamily: {
      sans: ['"Arial Nova"'],
    }, */
    extend: {
      colors: {
        orange: colors.orange,
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
