---
title: Installation & Usage
weight: 1
---

Kutty is a tailwind plugin for building web applications. It has a set of accessible and reusable components that are commonly used in web applications.

## Installation

```sh
npm install kutty --save
```

This plugin requires Tailwind CSS 2 or later. Tailwind CSS is not included in this package. Learn how to [install tailwind here](https://tailwindcss.com/docs/installation/).

## Usage

### For CSS

Require the installed plugin directly to your Tailwind config:

```js
// tailwind.config.js
plugins: [require("kutty")],
```

### For JS

We bundle AlpineJS v2.8.0 for reactivity in our components. Learn more about [AlpineJS here](https://github.com/alpinejs/alpine). Place the following script tag before the closing body tag.

```html
<!-- All components in one -->
<script src="https://cdn.jsdelivr.net/npm/kutty@latest/dist/kutty.min.js"></script>
```

```html
<!-- Single component -->
<!-- Include AlpineJS first -->
<script src="https://cdn.jsdelivr.net/npm/kutty@latest/dist/alpinejs.min.js"></script>
<!-- And then the single component -->
<script src="https://cdn.jsdelivr.net/npm/kutty@latest/dist/dropdown.min.js"></script>
```

### For Vue

By default, this project uses AlpineJS' `@click` shorthand for dynamic content such as dialogs or drawers. However, this clashes with Vue's `@click` shorthand, which takes precedence. Therefore, if you want to leverage these features, you'll have to change any `@click` bindings in the documentation/components to `x-on:click`.

## Development

You need [Hugo](https://gohugo.io/) to run the dev server. If you have [Homebrew](https://brew.sh/) you can do the following:

```sh
brew install hugo
```

Check this [Hugo installation page](https://gohugo.io/getting-started/installing/) for installing on other systems.

Then clone the repo, install dependencies, and start the server locally.

```sh
git clone https://github.com/praveenjuge/kutty.git
cd kutty
npm i
npm start
```

Open [`http://localhost:1313`](http://localhost:1313) in your browser.

| Scripts              | Description                                     |
| -------------------- | ----------------------------------------------- |
| `npm start`          | Starts a local Hugo server and Tailwind Watcher |
| `npm run production` | For generating production docs files            |
