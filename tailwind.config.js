const kutty = require("./index.js");

module.exports = {
  purge: {
    content: ["./layouts/**/*.html", "./content/**/*.md", "./src/js/**/*.js"],
  },
  theme: {
    extend: {},
  },
  variants: {
    visibility: ["group-hover"],
  },
  plugins: [kutty],
};
