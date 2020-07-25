---
title: Alert
---

## Basic

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-primary" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-primary alert-closable" role="alert">
    I'm a alert that informs you of stuff.
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
</div>
{{< /code >}}

## Colors

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-primary" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-success" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-danger" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-warning" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-light" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-dark" role="alert">I'm a alert that informs you of stuff.</div>
</div>
{{< /code >}}

## Outline

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-outline-primary" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-outline-success" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-outline-danger" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-outline-warning" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-outline-light" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-outline-dark" role="alert">I'm a alert that informs you of stuff.</div>
</div>
{{< /code >}}

## Bordered

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-primary alert-top" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-success alert-left" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-danger alert-right" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-warning alert-bottom" role="alert">I'm a alert that informs you of stuff.</div>
</div>
{{< /code >}}

## Solid Colors

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-solid-primary" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-solid-success" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-solid-danger" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-solid-warning" role="alert">I'm a alert that informs you of stuff.</div>
</div>
{{< /code >}}

## Size

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-primary alert-sm" role="alert">I'm a small alert for less important stuff.</div>
  <div class="alert alert-primary" role="alert">I'm a alert that informs you of stuff.</div>
  <div class="alert alert-primary alert-lg" role="alert">I'm a big boy alert that is very important.</div>
</div>
{{< /code >}}

## Status

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-primary" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> I'm a alert that informs you of stuff.</div>
  <div class="alert alert-success" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> I'm a alert that informs you of stuff.</div>
  <div class="alert alert-danger" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg> I'm a alert that informs you of stuff.</div>
  <div class="alert alert-warning" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> I'm a alert that informs you of stuff.</div>
</div>
{{< /code >}}

## With Description

{{< code html >}}

<div class="alert alert-primary" role="alert">
  <div>
    I'm a alert that informs you of stuff.
    <span class="alert-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </span>
  </div>
</div>
{{< /code >}}

## Closable

{{< code html >}}

<div class="space-y-2">
  <div class="alert alert-primary alert-closable" role="alert">I'm a alert that informs you of stuff.
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-primary alert-closable alert-top" role="alert">I'm a alert that informs you of stuff.
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-primary alert-closable" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> I'm a alert that informs you of stuff.
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-outline-primary alert-closable" role="alert">I'm a alert that informs you of stuff.
    <button class="btn btn-link btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-solid-primary alert-closable" role="alert">I'm a alert that informs you of stuff.
    <button class="btn btn-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-primary alert-closable alert-sm" role="alert">I'm a alert that informs you of stuff.
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-primary alert-closable alert-lg" role="alert">I'm a alert that informs you of stuff.
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
  <div class="alert alert-primary alert-closable" role="alert">
    <div>
      I'm a alert that informs you of stuff.
      <span class="alert-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </span>
    </div>
    <button class="btn btn-light-primary btn-sm alert-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
  </div>
</div>
{{< /code >}}
