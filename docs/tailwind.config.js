module.exports = {
  purge: {
    content: ["./docs/layouts/**/*.html", "./docs/content/**/*.md", "./docs/content/**/*.html", "./src/js/**/*.js"],
  },
  plugins: [require("../index.js"), require("@tailwindcss/typography")],
};
