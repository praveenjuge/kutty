---
title: Tooltip
---

## Basic

{{< code html >}}
<button class="btn btn-light" x-data="tooltip()" x-spread="tooltip" title="Regular Tooltip">Tooltip</button>
{{< /code >}}

## Placement

{{< code html >}}
<button class="btn btn-light" x-data="tooltip()" x-spread="tooltip" x-position="top" title="Tooltip on top">Tooltip on top</button>
<button class="btn btn-light" x-data="tooltip()" x-spread="tooltip" x-position="left" title="Tooltip on left">Tooltip on left</button>
<button class="btn btn-light" x-data="tooltip()" x-spread="tooltip" x-position="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
<button class="btn btn-light" x-data="tooltip()" x-spread="tooltip" x-position="right" title="Tooltip on right">Tooltip on right</button>
{{< /code >}}

## On Card

{{< code html >}}
<a href="#" class="card" x-data="tooltip()" x-spread="tooltip" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.">
  <div class="card-header">Normal Card</div>
  <div class="card-body">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
  </div>
</a>
{{< /code >}}
