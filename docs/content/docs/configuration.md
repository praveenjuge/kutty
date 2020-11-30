---
title: Configuration
weight: 2
---

## Updating Color

```js
// tailwind.config.js
...
theme: {
  extend: {
    colors: {
      primary: {
        light: "#fefcbf", // For lighter primary color
        DEFAULT: "#b7791f", // Normal primary color
        dark: "#744210", // Used for hover, active, etc.
      },
    },
  },
},
...
```

## Primary Color Palette

{{< code html >}}

<div class="space-y-2">
  <div class="flex space-x-2">
    <div class="w-10 h-10 bg-primary-light"></div>
    <div class="border border-primary-light text-primary-light">Hello</div>
  </div>
  <div class="flex space-x-2">
    <div class="w-10 h-10 bg-primary"></div>
    <div class="border border-primary text-primary">Hello</div>
  </div>
  <div class="flex space-x-2">
    <div class="w-10 h-10 bg-primary-dark"></div>
    <div class="border border-primary-dark text-primary-dark">Hello</div>
  </div>
</div>
{{< /code >}}
