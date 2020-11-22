---
title: Collapse
---

## Basic

{{< code html >}}

<div x-data="collapse()">
  <button class="btn btn-primary" aria-controls="basicCollapse" aria-expanded="false" x-spread="trigger">Open Collapse</button>
  <div class="card card-body mt-2" id="basicCollapse" x-spread="collapse" x-cloak>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
</div>
{{< /code >}}

## Accordion

{{< code html >}}

<div class="divide-y divide-gray-200">

  <div x-data="collapse()">
    <div x-spread="trigger" class="p-3 flex justify-between items-center" role="button" aria-controls="basicAccordion1" aria-expanded="false">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?
      <svg :class="{ 'rotate-180': open }" class="transition transform h-4 w-4 flex-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>
    <div x-spread="collapse" x-cloak class="px-3 pb-3" id="basicAccordion1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div x-data="collapse()">
    <div x-spread="trigger" class="p-3 flex justify-between items-center" role="button" aria-controls="basicAccordion2" aria-expanded="false">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?
      <svg :class="{ 'rotate-180': open }" class="transition transform h-4 w-4 flex-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>
    <div x-spread="collapse" x-cloak class="px-3 pb-3" id="basicAccordion2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

  <div x-data="collapse()">
    <div x-spread="trigger" class="p-3 flex justify-between items-center" role="button" aria-controls="basicAccordion3" aria-expanded="false">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?
      <svg :class="{ 'rotate-180': open }" class="transition transform h-4 w-4 flex-none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </div>
    <div x-spread="collapse" x-cloak class="px-3 pb-3" id="basicAccordion3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
  </div>

</div>

{{< /code >}}
