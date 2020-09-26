module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html", "./src/js/**/*.js"],
  },
  variants: {
    visibility: ({ after }) => after(["group-hover"]),
    backgroundColor: ({ after }) => after(["group-hover"]),
    textColor: ({ after }) => after(["group-hover"]),
    borderColor: ({ after }) => after(["group-hover"]),
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
