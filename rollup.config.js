import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/js/main.js",
  output: [
    { file: "./dist/kutty.js", format: "iife", name: "bundle" },
    { file: "./docs/static/kutty.js", format: "iife", name: "bundle" },
    { file: "./dist/kutty.min.js", format: "iife", name: "bundle", plugins: [terser()] },
  ],
};
