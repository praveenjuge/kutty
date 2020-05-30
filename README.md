# Kutty

Kutty is a set of accessible and reusable components for building web applications. It uses Tailwind classes, which is an utility based CSS framework, for styling the components.

## Installation

```sh
npm i kutty --save
```

Tailwind CSS is not available in this package. Learn how to install tailwind [here](https://tailwindcss.com/docs/installation/).

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

## Components

- [x] Alerts
- [x] Avatars
- [x] Buttons
- [ ] Badge
- [ ] Breadcrumb
- [ ] Card
- [ ] Collapse
- [ ] Dropdowns
- [ ] Forms
- [ ] List Group
- [ ] Modal
- [ ] Pagination
- [ ] Loading
- [ ] Tabs
- [ ] Toasts
- [ ] Tooltips
