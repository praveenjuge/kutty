---
title: Drawer
---

## Basic

{{< code html >}}

<div x-data="drawer()">
  <button class="btn btn-primary" x-spread="trigger">Open Drawer</button>
  <div class="dialog" x-spread="drawer" x-cloak>
    <div class="drawer-content">
      <div class="dialog-header">Drawer Title
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

<div x-data="drawer()">
  <button class="btn btn-primary mb-1" x-spread="trigger">Small Drawer</button>
  <div class="dialog dialog-sm" x-spread="drawer" x-cloak>
    <div class="drawer-content">
      <div class="dialog-header">Small drawer
        <button type="button" class="btn btn-light btn-sm btn-icon" aria-label="Close" @click="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
      </div>
      <div class="dialog-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
      <div class="dialog-footer">
        <button type="button" class="btn btn-light" @click="close">Close</button>
        <button type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>

<div x-data="drawer()">
  <button class="btn btn-primary mb-1" x-spread="trigger">Large Drawer</button>
  <div class="dialog dialog-lg" x-spread="drawer" x-cloak>
    <div class="drawer-content">
      <div class="dialog-header">Large drawer
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

<div x-data="drawer()">
  <button class="btn btn-primary" x-spread="trigger">Full Screen Drawer</button>
  <div class="dialog dialog-full" x-spread="drawer" x-cloak>
    <div class="drawer-content">
      <div class="dialog-header">Full Screen drawer
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

## Direction

{{< code html >}}

<div x-data="drawer()">
  <button class="btn btn-primary mb-1" x-spread="trigger">Left Drawer</button>
  <div class="dialog" x-spread="drawer" x-cloak>
    <div class="drawer-content">
      <div class="dialog-header">Drawer Title
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

<div x-data="drawer()">
  <button class="btn btn-primary" x-spread="trigger">Right Drawer</button>
  <div class="dialog dialog-right" x-spread="drawer" x-cloak>
    <div class="drawer-content">
      <div class="dialog-header">Drawer Title
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
