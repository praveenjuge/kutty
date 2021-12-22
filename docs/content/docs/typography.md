---
title: Typography
---

Kutty uses [Tailwind's Typography Plugin](https://github.com/tailwindlabs/tailwindcss-typography), check out their [documentation](https://tailwindcss.com/docs/typography-plugin) for more information.

## Installation

Install the plugin from npm:

```sh
# Using npm
npm install @tailwindcss/typography

# Using Yarn
yarn add @tailwindcss/typography
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
```
