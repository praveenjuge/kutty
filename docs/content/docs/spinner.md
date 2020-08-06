---
title: Spinner
---

## Basic

{{< code html >}}

<div class="spinner" role="status">
  <span class="sr-only">Loading...</span>
</div>
{{< /code >}}

## Colors

{{< code html >}}

<div class="space-x-2">
  <div class="spinner text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner text-gray-700" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner text-red-700" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner text-green-700" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner text-yellow-700" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner text-gray-200" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner text-gray-900" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{{< /code >}}

## Sizes

{{< code html >}}

<div class="space-x-2">
  <div class="spinner spinner-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner spinner-lg" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</div>
{{< /code >}}

## Spinner on Button

{{< code html >}}

<button class="btn btn-primary btn-loading">
  <span class="spinner spinner-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</button>
<button class="btn btn-outline-dark btn-loading">
  <span class="spinner spinner-sm" role="status" aria-hidden="true"></span>
  <span class="pl-2">Loading...</span>
</button>
{{< /code >}}
