---
title: Breadcrumb
---

## Basic

{{< code html >}}

<div class="space-y-4">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item" aria-current="page">Dashboard</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item" aria-current="page">Reports</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Alignment

{{< code html >}}

<div class="space-y-4">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb justify-center">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb justify-end">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Background Colors

{{< code html >}}

<div class="space-y-4">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb p-2 rounded bg-gray-100">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb p-2 rounded breadcrumb-dark bg-gray-900">
      <li class="breadcrumb-item"><a href="#" class="text-white">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#" class="text-white">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Sizes

{{< code html >}}

<div class="space-y-4">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-sm">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-lg">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Icons

{{< code html >}}

<div class="space-y-4">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-sm">
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" /><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" /></svg> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v4m0 0l-2-2m2 2l2-2" /></svg> Export
      </li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" /><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" /></svg> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v4m0 0l-2-2m2 2l2-2" /></svg> Export
      </li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-lg">
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" /><path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" /></svg> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v4m0 0l-2-2m2 2l2-2" /></svg> Export
      </li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Separators

{{< code html >}}

<div class="space-y-4">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-arrow">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-bullet">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-arrowhead">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>
</div>

{{< /code >}}
