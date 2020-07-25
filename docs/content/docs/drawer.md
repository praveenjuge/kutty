---
title: Drawer
---

## Basic

{{< code html >}}
<button class="btn btn-primary drawer-open" data-drawer="#demodrawer">Open Drawer</button>

<div class="drawer" id="demodrawer" aria-hidden="true">
  <div class="drawer-content">
    <div class="drawer-header">Drawer Title
      <button type="button" class="btn btn-light drawer-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="drawer-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-light drawer-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

{{< /code >}}

## Sizes

{{< code html >}}

<button class="btn btn-primary drawer-open" data-drawer="#smalldrawer">Small Drawer</button>
<button class="btn btn-primary drawer-open" data-drawer="#largedrawer">Large Drawer</button>
<button class="btn btn-primary drawer-open" data-drawer="#fulldrawer">Full Screen Drawer</button>

<div class="drawer drawer-sm" id="smalldrawer" aria-hidden="true">
  <div class="drawer-content">
    <div class="drawer-header">Small drawer
      <button type="button" class="btn btn-light drawer-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="drawer-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-light drawer-close">Close</button>
      <button type="button" class="btn btn-primary">Save</button>
    </div>
  </div>
</div>

<div class="drawer drawer-lg" id="largedrawer" aria-hidden="true">
  <div class="drawer-content">
    <div class="drawer-header">Large drawer
      <button type="button" class="btn btn-light drawer-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="drawer-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-light drawer-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

<div class="drawer drawer-full" id="fulldrawer" aria-hidden="true">
  <div class="drawer-content">
    <div class="drawer-header">Full Screen drawer
      <button type="button" class="btn btn-light drawer-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="drawer-body"><img class="w-5/6 mx-auto rounded" src="/og.png" /></div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-light drawer-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

{{< /code >}}

## Direction

{{< code html >}}
<button class="btn btn-primary drawer-open" data-drawer="#leftdrawer">Left Drawer</button>
<button class="btn btn-primary drawer-open" data-drawer="#rightdrawer">Right Drawer</button>

<div class="drawer" id="leftdrawer" aria-hidden="true">
  <div class="drawer-content">
    <div class="drawer-header">Drawer Title
      <button type="button" class="btn btn-light drawer-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="drawer-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-light drawer-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

<div class="drawer drawer-right" id="rightdrawer" aria-hidden="true">
  <div class="drawer-content">
    <div class="drawer-header">Drawer Title
      <button type="button" class="btn btn-light drawer-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
    </div>
    <div class="drawer-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eius fugiat illum repudiandae commodi inventore magnam unde vero cupiditate molestiae?</div>
    <div class="drawer-footer">
      <button type="button" class="btn btn-light drawer-close">Close</button>
      <button type="button" class="btn btn-primary">Save changes</button>
    </div>
  </div>
</div>

{{< /code >}}
