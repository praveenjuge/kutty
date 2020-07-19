---
title: Pagination
---

## Basic

{{< code html >}}

<nav class="pagination" role="navigation" aria-label="pagination">
  <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
  <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
  <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
  <a href="#" class="pagination-disabled" tabindex="-1" aria-label="Goto page 3">3</a>
  <span class="pagination-disabled" tabindex="-1">&hellip;</span>
  <a href="#" class="pagination-link pagination-active" aria-label="Page 5" aria-current="page">5</a>
  <a href="#" class="pagination-link" aria-label="Goto page 6">6</a>
  <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
</nav>
{{< /code >}}

## Sizes

{{< code html >}}

<div class="space-y-2">
  <nav class="pagination pagination-sm" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
    <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
  </nav>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
    <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
  </nav>
  <nav class="pagination pagination-lg" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
    <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
  </nav>
</div>
{{< /code >}}

## Alignment

{{< code html >}}

<div class="space-y-2">
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
    <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
  </nav>
  <nav class="pagination justify-center" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
    <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
  </nav>
  <nav class="pagination justify-end" role="navigation" aria-label="pagination">
    <a href="#" class="pagination-link" aria-label="Goto previous page"><i data-feather="chevron-left"></i></a>
    <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
    <a href="#" class="pagination-link" aria-label="Goto page 2">2</a>
    <a href="#" class="pagination-link" aria-label="Goto page 3">3</a>
    <a href="#" class="pagination-link" aria-label="Goto next page"><i data-feather="chevron-right"></i></a>
  </nav>
</div>
{{< /code >}}
