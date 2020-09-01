const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html", "./src/js/**/*.js"],
  },
  theme: {
    typography: {
      default: {
        css: {
          lineHeight: "inherit",
          h1: {
            fontWeight: "700",
          },
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
  plugins: [require("../index.js")],
};
