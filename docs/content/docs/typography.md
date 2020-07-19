---
title: Typography
---

<div class="alert alert-warning mb-2" role="alert">
  <i data-feather="alert-triangle"></i>
  <p>
   <a href="https://github.com/tailwindcss/typography" target="_blank">Tailwind's Typography Plugin</a> is needed.
  </p>
</div>

Install the plugin from npm:

```sh
npm install @tailwindcss/typography
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
plugins: [require("@tailwindcss/typography")],
```

## Basic

{{< code html >}}

<article class="prose">
  Your Content
</article>
{{< /code >}}
