module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html", "./src/js/**/*.js"],
  },
  variants: {
    visibility: ["group-hover"],
    backgroundColor: ["group-hover"],
  },
  theme: {
    typography: {
      default: {
        css: {
          pre: {
            code: {
              "&:after": { content: "none !important" },
            },
          },
        },
      },
    },
  },
  plugins: [require("../index.js")],
};
