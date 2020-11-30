---
date: 2020-11-22T11:57:07+0000
title: "Guide to upgrade Kutty to Tailwind 2"
description: "Use this as a guide to update from Kutty version 0.3.5 which supports till Tailwind 1 to Kutty Version 0.4 which supports Tailwind 2."
---

## Upgrade TailwindCSS First

Go to [Tailwind Upgrade Guide](https://tailwindcss.com/docs/upgrading-to-v2) and make sure you upgrade to the latest version.

TailwindCSS has changed the main color palette which is used in kutty with one change, I replaced `coolGray` with `blueGray` because it looks better.

## Upgrade Kutty Version

After updating Tailwind, use the following command to update kutty

```sh
npm install kutty@latest
```

## Typography plugin is not bundled anymore

Bundling [typography plugin](https://github.com/tailwindlabs/tailwindcss-typography) seems like a good idea at first, but it's a size increase for all the people who didn't need it. And people can't update it's version to their needs.

Now you can install it yourself if you are using it. Make sure you install the latest version that supports TailwindCSS 2.

```sh
npm install @tailwindcss/typography
```

## Alert, Badge, Spinner, Progress has utility classes to change colors

This means we can update these components to have any number of colors which are available in tailwind.

```html
<div class="text-green-800 bg-green-100 alert" role="alert">I'm a alert that informs you of stuff</div>

<span class="text-red-800 bg-red-100 badge">Success</span>

<div class="text-yellow-700 spinner" role="status">
  <span class="sr-only">Loading...</span>
</div>

<progress class="text-gray-900 progress" value="70" max="100">70%</progress>
```

## Update `default` key to `DEFAULT`

While updating the primary colors we used to have default key in lowercase, tailwind changed this to be in uppercase.

```js {hl_lines=[8]}
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

## Removed some unused social buttons

Removed YouTube, Twitch, LinkedIn, Slack button colors as no one was using it and it can be recreated with utility classes.

## Some card classes removed for utility classes

`card-success`, `card-danger`, `card-dark`, `card-title`, `card-subtitle` also removed in favor of utility classes so that any colors and combinations can be used.

## That's it

Hopefully the upgrade was easy for you :) Please [raise an issue](https://github.com/praveenjuge/kutty/issues) if you have any problems or doubts, I'll help you get through it.
