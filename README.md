# Kutty

Kutty is a tailwind plugin for building web applications. It has a set of accessible and reusable components that are commonly used in web applications.

This plugin requires Tailwind CSS 1.6 or later.

## Installation

```sh
npm i kutty --save
```

Tailwind CSS is not included in this package. Learn how to [install tailwind here](https://tailwindcss.com/docs/installation/).

## Usage

### For CSS

Require the installed plugin directly to your Tailwind config:

```js
// tailwind.config.js
plugins: [require("kutty")],
```

### For JS

We bundle AlpineJS v2.6.0 for reactivity in our components. Learn more about [AlpineJS here](https://github.com/alpinejs/alpine).

Place the following script tag before the closing body tag.

```html
<script src="https://cdn.jsdelivr.net/npm/kutty@latest/dist/kutty.min.js"></script>
```

## Documentation

View full documentation at [https://kutty.netlify.app](https://kutty.netlify.app).

## Feature/Components Requests

Need something new? [Suggest on Hellonext](https://kutty.hellonext.co).

## Bugs

Found a bug? [Please open a new issue](https://github.com/praveenjuge/kutty/issues/new).

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

## License

See the [LICENSE](https://github.com/praveenjuge/kutty/blob/master/LICENSE) file.
