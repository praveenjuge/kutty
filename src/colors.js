const tailwindColors = require("tailwindcss/colors.js");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  gray: { ...tailwindColors.blueGray },
  primary: {
    light: defaultTheme.colors.purple[100],
    DEFAULT: defaultTheme.colors.purple[700],
    dark: defaultTheme.colors.purple[900],
  },
};
