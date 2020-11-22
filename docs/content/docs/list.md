---
title: List
---

## Basic

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <ul class="list">
    <li class="list-item">Reddit</li>
    <li class="list-item">Twitter</li>
    <li class="list-item">GitHub</li>
    <li class="list-item">Dribbble</li>
    <li class="list-item">Todoist</li>
  </ul>
  <div class="list">
    <a href="#" class="list-item list-active">Reddit</a>
    <a href="#" class="list-item">Twitter</a>
    <a href="#" class="list-item">GitHub</a>
    <a href="#" class="list-item">Dribbble</a>
    <a href="#" class="list-item list-disabled" tabindex="-1" aria-disabled="true">Todoist</a>
  </div>
</div>
{{< /code >}}

## Flushed

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <ul class="list list-flush">
    <li class="list-item">Reddit</li>
    <li class="list-item">Twitter</li>
    <li class="list-item">GitHub</li>
    <li class="list-item">Dribbble</li>
    <li class="list-item">Todoist</li>
  </ul>
</div>
{{< /code >}}

## Options

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <ul class="list">
    <li class="list-item flex justify-between">Reddit
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item flex justify-between">Twitter
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item flex justify-between">GitHub
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item flex justify-between">Dribbble
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item flex justify-between">Todoist
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
  </ul>
</div>
{{< /code >}}

## Colors

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <ul class="list">
    <li class="list-item bg-primary-light text-primary">Reddit</li>
    <li class="list-item bg-green-100 text-green-700">Twitter</li>
    <li class="list-item bg-red-100 text-red-700">GitHub</li>
    <li class="list-item bg-yellow-100 text-yellow-700">Dribbble</li>
    <li class="list-item bg-gray-900 text-white">Todoist</li>
  </ul>
</div>
{{< /code >}}
