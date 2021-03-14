---
title: Dialog
---

## Basic

{{< code html >}}

<div x-data="dialog()">
  <button class="btn btn-primary" x-spread="trigger">Open Dialog</button>
  <div class="dialog" x-spread="dialog" x-cloak>
    <div class="dialog-content">
      <div class="dialog-header">Dialog Title
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
      <div class="dialog-footer">
        <button type="button" class="btn btn-light" @click="close">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{< /code >}}

## Sizes

{{< code html >}}

<div x-data="dialog()">
  <button class="mb-1 btn btn-primary" x-spread="trigger">Small Dialog</button>
  <div class="dialog dialog-sm" x-spread="dialog" x-cloak>
    <div class="dialog-content">
      <div class="dialog-header">Small Dialog
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
      <div class="dialog-footer">
        <button type="button" class="btn btn-light" @click="close">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div x-data="dialog()">
  <button class="mb-1 btn btn-primary" x-spread="trigger">Large Dialog</button>
  <div class="dialog dialog-lg" x-spread="dialog" x-cloak>
    <div class="dialog-content">
      <div class="dialog-header">Large Dialog
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
      <div class="dialog-footer">
        <button type="button" class="btn btn-light" @click="close">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div x-data="dialog()">
  <button class="btn btn-primary" x-spread="trigger">Full Screen Dialog</button>
  <div class="dialog dialog-full" x-spread="dialog" x-cloak>
    <div class="dialog-content">
      <div class="dialog-header">Full Screen Dialog
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <div class="dialog-body"><img class="w-5/6 mx-auto rounded" src="/og.png" /></div>
      <div class="dialog-footer">
        <button type="button" class="btn btn-light" @click="close">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{< /code >}}

## Scrollable

{{< code html >}}

<div x-data="dialog()">
  <button class="btn btn-primary" x-spread="trigger">Open Dialog</button>
  <div class="dialog" x-spread="dialog" x-cloak>
    <div class="dialog-content">
      <div class="dialog-header">Scrollable Dialog
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <div class="dialog-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae
      </div>
      <div class="dialog-footer">
        <button type="button" class="btn btn-light" @click="close">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{{< /code >}}

## Image Dialog

{{< code html >}}

<div x-data="dialog()">
  <button class="btn btn-primary" x-spread="trigger">Open Dialog</button>
  <div class="dialog" x-spread="dialog" x-cloak>
    <div class="dialog-content">
      <div class="dialog-header"> kutty-og.png
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <img class="w-full rounded-b" src="/og.png" />
    </div>
  </div>
</div>
{{< /code >}}
