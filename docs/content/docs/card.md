---
title: Card
---

## Basic

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="card">
    <div class="card-header">Normal Card</div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
    <div class="card-footer">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <a class="card" href="#">
    <div class="card-header">Card as Link</div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
  </a>
</div>
{{< /code >}}

## Header

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="card">
    <div class="card-header">
      <div class="card-title">Card Title</div>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div>
        <div class="card-title">Card Title</div>
        <div class="card-subtitle">Card Subtitle</div>
      </div>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Card Title</div>
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Card Title</div>
      <button class="btn btn-icon btn-sm btn-outline-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="card-title">Card Title</div>
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
</div>

{{< /code >}}

## Footer

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer justify-end">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer justify-between">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer card-footer-border">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
  </div>
</div>
{{< /code >}}

## Image

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="card">
    <img class="card-image rounded-t" src="/og.png" />
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <img class="card-image rounded-b" src="/og.png" />
  </div>
  <div class="card">
    <div class="card-header">Card Title</div>
    <img class="card-image" src="/og.png" />
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="grid grid-cols-3">
      <div class="col-span-1">
        <img class="card-image" src="/og-vertical.png" />
      </div>
      <div class="col-span-2">
        <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
      </div>
      <div class="col-span-1">
        <img class="card-image" src="/og-vertical.png" />
      </div>
    </div>
  </div>
  <div class="card">
    <img class="card-image rounded" src="/og.png" />
    <div class="card-image-overlay">
      <div class="card-body">
        <div class="card-title">Image Overlay</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
    </div>
  </div>
</div>

{{< /code >}}

## Colors

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="card card-success">
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer"><a href="#" class="btn btn-success btn-sm">Success</a></div>
  </div>
  <div class="card card-danger">
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer"><a href="#" class="btn btn-danger btn-sm">Danger</a></div>
  </div>
  <div class="card card-dark">
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="card-footer"><a href="#" class="btn btn-light btn-sm">Light</a></div>
  </div>
</div>

{{< /code >}}

## Loading

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
  <div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-body card-loading h-32">
      <div class="spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>

{{< /code >}}
