module.exports = {
  plugins: [
    require("postcss-import")({
      path: ["assets/css"],
    }),
    require("tailwindcss")("./assets/css/tailwind.config.js"),
    require("autoprefixer"),
  ],
};
