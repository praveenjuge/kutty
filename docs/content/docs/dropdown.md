---
title: Dropdown
---

## Basic

{{< code html >}}

<div x-data="dropdown()">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu" x-spread="trigger">Open Dropdown</button>
  <div class="dropdown-list" id="color-menu" x-spread="dropdown" x-cloak>
    <a href="#" class="dropdown-item">Red</a>
    <a href="#" class="dropdown-item">Blue</a>
    <a href="#" class="dropdown-item">Green</a>
  </div>
</div>
{{< /code >}}

## With Arrow

{{< code html >}}

<div x-data="dropdown()">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu-arrow" x-spread="trigger">
    Open Dropdown
    <svg class="dropdown-arrow" :class="{ 'rotate-180': open }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
  </button>
  <div class="dropdown-list" id="color-menu-arrow" x-spread="dropdown" x-cloak>
    <a href="#" class="dropdown-item">Red</a>
    <a href="#" class="dropdown-item">Blue</a>
    <a href="#" class="dropdown-item">Green</a>
  </div>
</div>
{{< /code >}}

## Size

{{< code html >}}

<div class="flex space-x-2">
  <div class="dropdown-sm" x-data="dropdown()">
    <button class="btn btn-primary btn-sm dropdown-trigger" id="open-color-menu-small" x-spread="trigger">
      Open Dropdown
      <svg class="dropdown-arrow" :class="{ 'rotate-180': open }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div class="dropdown-list" id="color-menu-small" x-spread="dropdown" x-cloak>
      <a href="#" class="dropdown-item">Red</a>
      <a href="#" class="dropdown-item">Blue</a>
      <a href="#" class="dropdown-item">Green</a>
    </div>
  </div>
  <div class="dropdown-lg" x-data="dropdown()">
    <button class="btn btn-primary btn-lg dropdown-trigger" id="open-color-menu-large" x-spread="trigger">
      Open Dropdown
      <svg class="dropdown-arrow" :class="{ 'rotate-180': open }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div class="dropdown-list" id="color-menu-large" x-spread="dropdown" x-cloak>
      <a href="#" class="dropdown-item">Red</a>
      <a href="#" class="dropdown-item">Blue</a>
      <a href="#" class="dropdown-item">Green</a>
    </div>
  </div>
</div>
{{< /code >}}

## Dividers & Headings

{{< code html >}}

<div x-data="dropdown()">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu-divider" x-spread="trigger">
    Open Dropdown
    <svg class="dropdown-arrow" :class="{ 'rotate-180': open }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
  </button>
  <div class="dropdown-list" id="color-menu-divider" x-spread="dropdown" x-cloak>
    <a href="#" class="dropdown-item">Red</a>
    <div class="dropdown-divide"></div>
    <a href="#" class="dropdown-item">Blue</a>
    <a href="#" class="dropdown-item">Green</a>
    <div class="dropdown-divide"></div>
    <p class="dropdown-header">Color and Fruit</p>
    <a href="#" class="dropdown-item">Orange</a>
  </div>
</div>
{{< /code >}}

## Icons

{{< code html >}}

<div x-data="dropdown()">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu-icons" x-spread="trigger">
    Open Dropdown
    <svg class="dropdown-arrow" :class="{ 'rotate-180': open }" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
  </button>
  <div class="dropdown-list" id="color-menu-icons" x-spread="dropdown" x-cloak>
    <a href="#" class="dropdown-item justify-between">Red <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
    <a href="#" class="dropdown-item justify-between">Green <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
    <a href="#" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg> Blue</a>
  </div>
</div>
{{< /code >}}
