---
title: Sidebar
---

## Basic

Shown as normal on large screens, moves to the side on small screens. This is a basic sidebar navigation used in this site, remove the relative class in the `nav` to make it fixed.

{{< code html >}}
<button class="btn btn-light btn-sm flex md:hidden sidebar-open" data-sidebar="#demosidebar">Open sidebar</button>

<nav role="navigation" class="sidebar relative" id="demosidebar">
  <a class="sidebar-item" href="#">Dashboard</a>
  <a class="sidebar-item active" href="#">Users</a>
  <a class="sidebar-item" href="#">Billing</a>
  <a class="sidebar-item" href="#">Settings</a>
</nav>

{{< /code >}}
