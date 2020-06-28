---
title: Forms
---

## Input Tag

{{< code html >}}

<label class="tag-label">
  <span>Your Name</span>
  <input class="tag-input" placeholder="Praveen Juge">
</label>
{{< /code >}}

## Select Tag

{{< code html >}}

<label class="tag-label">
  <span>Select a color</span>
  <select class="tag-select">
    <option>Red</option>
    <option>Blue</option>
  </select>
</label>
{{< /code >}}

## Checkbox

{{< code html >}}

<label class="tag-label">
  <input type="checkbox" class="tag-checkbox">
  <span class="ml-1">Click me</span>
</label>
{{< /code >}}

## Radio

{{< code html >}}

<label class="tag-label">
  <input type="radio" class="tag-radio" name="radio" value="1">
  <span class="ml-1">Click me</span>
</label>
{{< /code >}}

## Textarea

{{< code html >}}

<label class="tag-label">
  <span>Textarea</span>
  <textarea class="tag-input" rows="3" placeholder="Use this to write your next great novel"></textarea>
</label>
{{< /code >}}

## Select Multiple

{{< code html >}}

<label class="tag-label">
  <span>Select multiple color</span>
  <select class="tag-select tag-multiple" multiple>
    <option>Red</option>
    <option>Blue</option>
    <option>Green</option>
    <option>Yellow</option>
    <option>Cyan</option>
  </select>
</label>
{{< /code >}}

## Range

{{< code html >}}

<label class="tag-label">
  <span>Get in my range</span>
  <input type="range" class="tag-range">
</label>

{{< /code >}}

## Sizing

### Input Sizes

{{< code html >}}

<div class="space-y-3">
  <label class="tag-label tag-label-sm">
    <span>Your Name</span>
    <input class="tag-input tag-input-sm" placeholder="Praveen Juge">
  </label>
  <label class="tag-label tag-label-lg">
    <span>Your Name</span>
    <input class="tag-input tag-input-lg" placeholder="Praveen Juge">
  </label>
</div>
{{< /code >}}

### Select Sizes

{{< code html >}}

<div class="space-y-3">
  <label class="tag-label tag-label-sm">
    <span>Select a color</span>
    <select class="tag-select tag-select-sm"><option>Red</option></select>
  </label>
  <label class="tag-label tag-label-lg">
    <span>Select a color</span>
    <select class="tag-select tag-select-lg"><option>Red</option></select>
  </label>
</div>
{{< /code >}}

## Icons

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <label class="tag-label">
    <span>Search</span>
    <div class="tag-icon">
      <i data-feather="search"></i>
      <input class="tag-input" placeholder="Search for posts...">
    </div>
  </label>
  <label class="tag-label">
    <span>Search</span>
    <div class="tag-icon tag-icon-r">
      <i data-feather="search"></i>
      <input class="tag-input" placeholder="Search for posts...">
    </div>
  </label>
</div>
{{< /code >}}

## Addons

{{< code html >}}

<div class="space-y-3">
  <label class="tag-label">
    <div class="tag-append">
      <input class="tag-input" placeholder="Praveen Juge">
      <button class="btn btn-dark">Save</button>
    </div>
  </label>
  <label class="tag-label">
    <div class="tag-append">
      <input class="tag-input" placeholder="Praveen Juge">
      <span class="tag-text">@email.com</span>
    </div>
  </label>
</div>

{{< /code >}}

## Validation

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
  <label class="tag-label tag-success">
    <span>Your Name</span>
    <input class="tag-input" value="Praveen Juge">
    <span class="tag-validation">That's your name alright!</span>
  </label>
  <label class="tag-label tag-success">
    <span>Select a color</span>
    <select class="tag-select"><option>Red</option></select>
    <span class="tag-validation">Yup, that's a color!</span>
  </label>
  <label class="tag-label tag-danger">
    <span>Your Name</span>
    <input class="tag-input" value="Praveen Juge">
    <span class="tag-validation">Are you sure about this?</span>
  </label>
  <label class="tag-label tag-danger">
    <span>Select a color</span>
    <select class="tag-select"><option>Red</option></select>
    <span class="tag-validation">Are you sure about this?</span>
  </label>
  <label class="tag-label tag-success">
    <input type="checkbox" class="tag-checkbox">
    <span class="ml-1">Click me</span>
    <span class="tag-validation">You clicked!</span>
  </label>
  <label class="tag-label tag-success">
    <input type="radio" class="tag-radio" name="radio" value="1">
    <span class="ml-1">Click me</span>
    <span class="tag-validation">You clicked!</span>
  </label>
  <label class="tag-label tag-danger">
    <input type="checkbox" class="tag-checkbox">
    <span class="ml-1">Click me</span>
    <span class="tag-validation">Click please</span>
  </label>
  <label class="tag-label tag-danger">
    <input type="radio" class="tag-radio" name="radio" value="1">
    <span class="ml-1">Click me</span>
    <span class="tag-validation">Click please</span>
  </label>
</div>
{{< /code >}}

## Disabled

{{< code html >}}

<div class="space-y-3">
  <label class="tag-label">
    <span>Your Name</span>
    <input class="tag-input" placeholder="Praveen Juge" disabled>
  </label>
  <label class="tag-label">
    <span>Select a color</span>
    <select class="tag-select" disabled>
      <option>Red</option>
      <option>Blue</option>
    </select>
  </label>
  <label class="tag-label">
    <input type="checkbox" class="tag-checkbox" disabled>
    <span class="ml-1">Click me</span>
  </label>
  <label class="tag-label">
    <input type="radio" class="tag-radio" name="radio" value="1" disabled>
    <span class="ml-1">Click me</span>
  </label>
  <label class="tag-label">
    <span>Get in my range</span>
    <input type="range" class="tag-range" disabled>
  </label>
  <button type="submit" class="btn btn-primary" disabled>Submit</button>
</div>
{{< /code >}}

## Readonly

{{< code html >}}

<label class="tag-label">
  <span>Your Name</span>
  <input class="tag-input" value="Praveen Juge" readonly>
</label>
{{< /code >}}

## Example: Login Form

{{< code html >}}

<div class="bg-gray-100">
  <form class="w-full md:w-5/12 mx-auto space-y-4 px-5 py-10">
    <label class="tag-label">
      <span>Your Email</span>
      <input class="tag-input" type="email" placeholder="Ex. james@bond.com" required />
    </label>
    <label class="tag-label">
      <span>Your Password</span>
      <input class="tag-input" type="password" placeholder="••••••••" required />
    </label>
    <label class="tag-label">
      <input type="checkbox" class="tag-checkbox" />
      <span class="ml-1">Remember me</span>
    </label>
    <input type="submit" class="btn btn-primary" value="Login" />
  </form>
</div>

{{< /code >}}
