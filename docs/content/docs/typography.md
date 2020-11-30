---
title: Typography
---

<div class="mt-10 -mb-5 alert bg-primary-light text-primary" role="alert">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
  <p>Kutty uses <a href="https://github.com/tailwindlabs/tailwindcss-typography" target="_blank" rel="noopener noreferrer">Tailwind's Typography Plugin</a>, check out their <a href="https://github.com/tailwindlabs/tailwindcss-typography" target="_blank" rel="noopener noreferrer">documentation</a> for more information.</p>
</div>

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

## Basic

{{< code html >}}

<article class="prose">
  <h1>A Christmas Carol</h1>
  <p>By Charles Dickens</p>
  <p>Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner. Scrooge signed it: and Scrooge’s name was good upon ’Change, for anything he chose to put his hand to. Old Marley was as dead as a door-nail.</p>
  <p>Mind! I don’t mean to say that I know, of my own knowledge, what there is particularly dead about a door-nail. I might have been inclined, myself, to regard a coffin-nail as the deadest piece of ironmongery in the trade. But the wisdom of our ancestors is in the simile; and my unhallowed hands shall not disturb it, or the Country’s done for. You will therefore permit me to repeat, emphatically, that Marley was as dead as a door-nail.</p>
</article>
{{< /code >}}
