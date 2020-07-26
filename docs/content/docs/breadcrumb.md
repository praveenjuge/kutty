---
title: Breadcrumb
---

## Basic

{{< code html >}}

<div class="space-y-2">
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

<div class="space-y-2">
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

<div class="space-y-2">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb bg-gray-100">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-dark">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Sizes

{{< code html >}}

<div class="space-y-2">
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

<div class="space-y-2">
  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-sm">
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg> Export
      </li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg> Export
      </li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-lg">
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg> Export
      </li>
    </ul>
  </nav>
</div>

{{< /code >}}

## Separators

{{< code html >}}

<div class="space-y-2">
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
