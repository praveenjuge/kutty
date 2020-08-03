---
title: Tooltips
draft: true
---

## Basic

{{< code html >}}

<div x-data="tooltip()" class="relative">
  <button class="btn btn-light" x-spread="trigger">44 Messages</button>
  <span class="tooltip" x-spread="message">20 read, 24 unread</span>
</div>
{{< /code >}}
