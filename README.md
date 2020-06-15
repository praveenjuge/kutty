# Kutty

Kutty is a set of accessible and reusable components for building web applications. It uses Tailwind classes, which is an utility based CSS framework, for styling the components.

## Installation

```sh
npm i kutty --save
```

Tailwind CSS is not available in this package. Learn how to [install tailwind here](https://tailwindcss.com/docs/installation/).

## Usage

For importing the whole package:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
/* Add Kutty here */
@import "kutty";
@import "tailwindcss/utilities";
```

For importing any single component:

```css
@import "tailwindcss/base";
@import "tailwindcss/components";
/* Add Kutty here */
@import "kutty/src/button.css";
@import "tailwindcss/utilities";
```

## Development

Clone the repo, install dependencies, and start the server locally.

```sh
git clone https://github.com/praveenjuge/kutty.git
cd kutty
npm i
npm start
```

Then open [`http://localhost:1313`](http://localhost:1313) in your browser.

| Scripts                               | Description                                     |
| ------------------------------------- | ----------------------------------------------- |
| `npm start`                           | Starts a local Hugo server and Tailwind Watcher |
| `npm run production && hugo --minify` | For generating production docs files            |

## Components

- [x] Alerts
- [x] Avatars
- [x] Buttons
- [x] Badge
- [x] Breadcrumb
- [x] Card
- [x] Forms
- [x] Lists
- [ ] Collapse
- [ ] Dropdowns
- [ ] Modal
- [ ] Pagination
- [ ] Loading
- [ ] Tabs
- [ ] Toasts
- [ ] Tooltips
