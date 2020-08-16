---
title: Tooltips
---

## Basic

{{< code html >}}

<div x-data="tooltip()">
  <button class="btn btn-light" x-spread="trigger">44 Messages</button>
  <span class="tooltip" x-spread="message" x-cloak>20 read, 24 unread, 20 read, 24 unread</span>
</div>
{{< /code >}}
