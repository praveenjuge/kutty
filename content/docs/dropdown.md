---
title: Dropdown
---

## Basic

{{< code html >}}

<div class="dropdown">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu">
    Open Dropdown <i data-feather="chevron-down"></i>
  </button>
  <div id="color-menu" class="dropdown-list">
    <a href="#" class="dropdown-item">Red</a>
    <a href="#" class="dropdown-item">Blue</a>
    <a href="#" class="dropdown-item">Green</a>
  </div>
</div>
{{< /code >}}

## Size

{{< code html >}}

<div class="flex space-x-2">
  <div class="dropdown dropdown-sm">
    <button class="btn btn-primary btn-sm dropdown-trigger" id="open-color-menu">
      Open Dropdown <i data-feather="chevron-down"></i>
    </button>
    <div id="color-menu" class="dropdown-list">
      <a href="#" class="dropdown-item">Red</a>
      <a href="#" class="dropdown-item">Blue</a>
      <a href="#" class="dropdown-item">Green</a>
    </div>
  </div>
  <div class="dropdown dropdown-lg">
    <button class="btn btn-primary btn-lg dropdown-trigger" id="open-color-menu">
      Open Dropdown <i data-feather="chevron-down"></i>
    </button>
    <div id="color-menu" class="dropdown-list">
      <a href="#" class="dropdown-item">Red</a>
      <a href="#" class="dropdown-item">Blue</a>
      <a href="#" class="dropdown-item">Green</a>
    </div>
  </div>
</div>
{{< /code >}}

## Dividers & Headings

{{< code html >}}

<div class="dropdown">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu">
    Open Dropdown <i data-feather="chevron-down"></i>
  </button>
  <div id="color-menu" class="dropdown-list">
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

<div class="dropdown">
  <button class="btn btn-primary dropdown-trigger" id="open-color-menu">
    Open Dropdown <i data-feather="chevron-down"></i>
  </button>
  <div id="color-menu" class="dropdown-list">
    <a href="#" class="dropdown-item justify-between">Red<i data-feather="bell"></i></a>
    <a href="#" class="dropdown-item justify-between">Green<i data-feather="shield"></i></a>
    <a href="#" class="dropdown-item"><i data-feather="at-sign" class="mr-2"></i> Blue</a>
  </div>
</div>
{{< /code >}}
