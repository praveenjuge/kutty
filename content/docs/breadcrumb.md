---
title: Breadcrumb
weight: 6
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
    <ul class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Dashboard</a></li>
      <li class="breadcrumb-item"><a href="#">Reports</a></li>
      <li class="breadcrumb-item" aria-current="page">Export</li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-light">
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
        <a href="#"><i data-feather="star"></i> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><i data-feather="clipboard"></i> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <i data-feather="upload-cloud"></i> Export
      </li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#"><i data-feather="star"></i> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><i data-feather="clipboard"></i> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <i data-feather="upload-cloud"></i> Export
      </li>
    </ul>
  </nav>

  <nav aria-label="breadcrumb">
    <ul class="breadcrumb breadcrumb-lg">
      <li class="breadcrumb-item">
        <a href="#"><i data-feather="star"></i> Dashboard</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#"><i data-feather="clipboard"></i> Reports</a>
      </li>
      <li class="breadcrumb-item" aria-current="page">
        <i data-feather="upload-cloud"></i> Export
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
