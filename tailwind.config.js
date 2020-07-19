const defaultTheme = require("tailwindcss/defaultTheme");
const kutty = require("./index.js");

module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./src/js/**/*.js"],
  },
  theme: {
    typography: {
      default: {
        css: {
          lineHeight: "inherit",
          h2: {
            marginBottom: defaultTheme.spacing[3],
          },
          pre: {
            color: defaultTheme.colors.gray[900],
            backgroundColor: defaultTheme.colors.gray[200] + "!important",
            lineHeight: "inherit",
            marginBottom: 0,
            marginTop: 0,
          },
        },
      },
    },
  },
  variants: {
    visibility: ["group-hover"],
  },
  plugins: [kutty, require("@tailwindcss/typography")],
};
