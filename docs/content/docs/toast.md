---
title: Toast
---

## Basic

{{< code html >}}

<div class="toast bg-primary-light text-primary" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="flex items-center justify-between mb-1">
    <span class="font-bold">Toast Title</span>
    <button class="btn btn-light-primary btn-xs"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  This is a toast message that shows up whenever you want.
</div>

{{< /code >}}

## Show from Button

{{< code html >}}

<div class="fixed text-white bg-gray-900 bottom-5 right-5 toast" role="alert" x-on:toast1.window="open = !open" x-data="{ open: false }" x-show.transition="open" x-cloak>
  <div class="flex items-center justify-between mb-1">
    <span class="font-bold">Toast Title</span>
    <button class="btn btn-dark btn-xs" @click="open = false"><svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  This is a toast message that shows up whenever you want.
</div>

<button @click="$dispatch('toast1')" class="btn btn-primary">Show Toast</button>

{{< /code >}}

## Show from Javascript

```js
dispatchEvent(new CustomEvent("toast1"));
```
