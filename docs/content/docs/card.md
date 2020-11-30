---
title: Card
---

## Basic

{{< code html >}}

<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
  <div class="card">
    <div class="card-header">Normal Card</div>
    <div class="card-body">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
    </div>
    <div class="justify-end card-footer">
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

<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
  <div class="card">
    <div class="card-header">
      <div class="font-semibold text-gray-900">Card Title</div>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div>
        <div class="font-semibold text-gray-900">Card Title</div>
        <span class="text-sm text-gray-600">Card Subtitle</span>
      </div>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="font-semibold text-gray-900">Card Title</div>
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="font-semibold text-gray-900">Card Title</div>
      <button class="btn btn-icon btn-sm btn-outline-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="font-semibold text-gray-900">Card Title</div>
      <button class="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
</div>

{{< /code >}}

## Footer

{{< code html >}}

<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
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
    <div class="justify-end card-footer">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="justify-between card-footer">
      <a href="#" class="btn btn-link btn-sm">Cancel</a>
      <a href="#" class="btn btn-light-primary btn-sm">Sure</a>
    </div>
  </div>
  <div class="card">
    <div class="card-header">Card header</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="bg-transparent border-t card-footer">
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

<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
  <div class="card">
    <img class="rounded-t card-image" src="/og.png" />
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
  </div>
  <div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <img class="rounded-b card-image" src="/og.png" />
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
    <img class="rounded card-image" src="/og.png" />
    <div class="absolute inset-0 px-3 py-2">
      <div class="card-body">
        <div class="font-semibold text-gray-900">Image Overlay</div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </div>
    </div>
  </div>
</div>

{{< /code >}}

## Colors

{{< code html >}}

<div class="grid grid-cols-1 gap-3 md:grid-cols-3">

  <div class="text-green-900 border-green-100 bg-green-50 card">
    <div class="text-green-900 border-green-100 card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="bg-green-100 card-footer"><a href="#" class="btn btn-success btn-sm">Success</a></div>
  </div>

  <div class="text-red-900 border-red-100 bg-red-50 card">
    <div class="text-red-900 border-red-100 card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="bg-red-100 card-footer"><a href="#" class="btn btn-danger btn-sm">Danger</a></div>
  </div>

  <div class="text-gray-100 bg-gray-900 border-gray-800 card">
    <div class="text-gray-100 border-gray-800 card-header">Card Title</div>
    <div class="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
    <div class="bg-gray-800 card-footer"><a href="#" class="btn btn-light btn-sm">Light</a></div>
  </div>
  
</div>

{{< /code >}}

## Loading

{{< code html >}}

<div class="grid grid-cols-1 gap-3 md:grid-cols-3">
  <div class="card">
    <div class="card-header">Card Title</div>
    <div class="flex items-center justify-center h-32 card-body">
      <div class="spinner" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>

{{< /code >}}
