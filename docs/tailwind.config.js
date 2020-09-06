module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html", "./src/js/**/*.js"],
  },
  variants: {
    visibility: ["group-hover"],
  },
  plugins: [require("../index.js")],
};
