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
  <ul class="list list-options">
    <li class="list-item">Reddit
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item">Twitter
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item">GitHub
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item">Dribbble
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
    <li class="list-item">Todoist
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </li>
  </ul>
</div>
{{< /code >}}

## Colors

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <ul class="list">
    <li class="list-item list-primary">Reddit</li>
    <li class="list-item list-success">Twitter</li>
    <li class="list-item list-danger">GitHub</li>
    <li class="list-item list-warning">Dribbble</li>
    <li class="list-item list-dark">Todoist</li>
  </ul>
</div>
{{< /code >}}
