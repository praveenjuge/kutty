import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/js/main.js",
    output: [
      { file: "./docs/static/kutty.js", format: "iife", name: "bundle", plugins: [terser()] },
      { file: "./dist/kutty.js", format: "iife", name: "bundle" },
      { file: "./dist/kutty.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
  {
    input: "./src/js/alpinejs.js",
    output: [
      { file: "./dist/alpinejs.js", format: "iife", name: "bundle" },
      { file: "./dist/alpinejs.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
  {
    input: "./src/js/components/collapse.js",
    output: [
      { file: "./dist/collapse.js", format: "iife", name: "bundle" },
      { file: "./dist/collapse.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
  {
    input: "./src/js/components/dropdown.js",
    output: [
      { file: "./dist/dropdown.js", format: "iife", name: "bundle" },
      { file: "./dist/dropdown.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
  {
    input: "./src/js/components/drawer.js",
    output: [
      { file: "./dist/drawer.js", format: "iife", name: "bundle" },
      { file: "./dist/drawer.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
  {
    input: "./src/js/components/dialog.js",
    output: [
      { file: "./dist/dialog.js", format: "iife", name: "bundle" },
      { file: "./dist/dialog.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
  {
    input: "./src/js/components/tooltip.js",
    output: [
      { file: "./dist/tooltip.js", format: "iife", name: "bundle" },
      { file: "./dist/tooltip.min.js", format: "iife", name: "bundle", plugins: [terser()] },
    ],
  },
];
