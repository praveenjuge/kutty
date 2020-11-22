---
title: Badge
---

## Basic

{{< code html >}}
<span class="badge bg-primary text-white">I'm a Badge</span>
<a class="badge bg-primary hover:bg-primary-dark" href="#">
  <span class="text-white">I'm a Link as a Badge</span>
</a>
{{< /code >}}

## Normal Colors

{{< code html >}}
<span class="badge bg-primary text-white">Primary</span>
<span class="badge bg-green-700 text-white">Success</span>
<span class="badge bg-red-700 text-white">Danger</span>
<span class="badge bg-yellow-600 text-white">Warning</span>
<span class="badge bg-gray-100 text-gray-900">Light</span>
<span class="badge bg-gray-900 text-white">Dark</span>

<span class="badge bg-primary-light text-primary">Primary</span>
<span class="badge bg-green-100 text-green-800">Success</span>
<span class="badge bg-red-100 text-red-700">Danger</span>
<span class="badge bg-yellow-100 text-yellow-800">Warning</span>
{{< /code >}}

## Link Colors

{{< code html >}}
<a class="badge bg-primary hover:bg-primary-dark" href="#"><span class="text-white">Primary</span></a>
<a class="badge bg-green-700 hover:bg-green-900" href="#"><span class="text-white">Success</span></a>
<a class="badge bg-red-700 hover:bg-red-900" href="#"><span class="text-white">Danger</span></a>
<a class="badge bg-yellow-600 hover:bg-yellow-800" href="#"><span class="text-white">Warning</span></a>
<a class="badge bg-gray-100 hover:bg-gray-400" href="#"><span class="text-gray-900">Light</span></a>
<a class="badge bg-gray-900 hover:bg-gray-700" href="#"><span class="text-white">Dark</span></a>

<a class="badge bg-primary-light hover:bg-opacity-50" href="#"><span class="text-primary">Primary</span></a>
<a class="badge bg-green-100 hover:bg-green-300" href="#"><span class="text-green-800">Success</span></a>
<a class="badge bg-red-100 hover:bg-red-300" href="#"><span class="text-red-700">Danger</span></a>
<a class="badge bg-yellow-100 hover:bg-yellow-300" href="#"><span class="text-yellow-800">Warning</span></a>
{{< /code >}}

## Closable

{{< code html >}}
<span class="badge bg-primary text-white">Primary<button class="btn btn-xs btn-icon btn-primary badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-green-700 text-white">Success<button class="btn btn-xs btn-icon btn-success badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-red-700 text-white">Danger<button class="btn btn-xs btn-icon btn-danger badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-yellow-600 text-white">Warning<button class="btn btn-xs btn-icon btn-warning badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-gray-100 text-gray-900">Light<button class="btn btn-xs btn-icon btn-light badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-gray-900 text-white">Dark<button class="btn btn-xs btn-icon btn-dark badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-primary-light text-primary">Primary<button class="btn btn-xs btn-icon btn-light-primary badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-green-100 text-green-800">Success<button class="btn btn-xs btn-icon text-current hover:bg-green-200 badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-red-100 text-red-700">Danger<button class="btn btn-xs btn-icon text-current hover:bg-red-200 badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></span>
<span class="badge bg-yellow-100 text-yellow-800">Warning<button class="btn btn-xs btn-icon text-current hover:bg-yellow-200 badge-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
{{< /code >}}
