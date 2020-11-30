---
title: Forms
---

## Input Tag

{{< code html >}}
<label class="block text-sm mb-1" for="name">Your Name</label>
<input class="form-input" placeholder="Praveen Juge" id="name">
{{< /code >}}

## Select Tag

{{< code html >}}
<label class="block text-sm mb-1" for="color">Select a color</label>
<select class="form-select" id="color">
  <option>Red</option>
  <option>Blue</option>
</select>
{{< /code >}}

## Checkbox

{{< code html >}}

<label class="flex items-center">
  <input type="checkbox" class="form-checkbox">
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
{{< /code >}}

## Radio

{{< code html >}}

<label class="flex items-center">
  <input type="radio" class="form-radio" name="radio" value="1">
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
{{< /code >}}

## Textarea

{{< code html >}}
<label class="block text-sm mb-1" for="story">Tell us your story:</label>
<textarea class="form-input" id="story" placeholder="Use this to write your next great novel" rows="3"></textarea>
{{< /code >}}

## Select Multiple

{{< code html >}}

<label class="block text-sm mb-1" for="multiple">Select multiple color</label>
<select class="form-select" id="multiple" multiple>
  <option>Red</option>
  <option>Blue</option>
  <option>Green</option>
  <option>Yellow</option>
  <option>Cyan</option>
</select>
{{< /code >}}

## Range

{{< code html >}}

<label class="block text-sm mb-1" for="myrange">Get in my range</label>
<input type="range" class="form-input" id="myrange">
{{< /code >}}

## Sizing

### Input Sizes

{{< code html >}}

<label class="block text-xs mb-1" for="name1">Your Name</label>
<input class="form-input form-input-sm" placeholder="Praveen Juge" id="name1">

<label class="block text-lg mb-1 mt-3" for="name2">Your Name</label>
<input class="form-input form-input-lg" placeholder="Praveen Juge" id="name2">
{{< /code >}}

### Select Sizes

{{< code html >}}

<label class="block text-xs mb-1" for="color1">Select a color</label>
<select class="form-select form-select-sm" id="color1"><option>Red</option></select>

<label class="block text-lg mb-1 mt-3" for="color2">Select a color</label>
<select class="form-select form-select-lg" id="color2"><option>Red</option></select>
{{< /code >}}

## Icons

{{< code html >}}

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="form-icon">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input class="form-input" placeholder="Search for posts...">
  </div>
  <div class="form-icon form-icon-r">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
    <input class="form-input" placeholder="Search for posts...">
  </div>
</div>
{{< /code >}}

## Addons

{{< code html >}}

<div class="space-y-3">
  <div class="form-append">
    <input class="form-input" placeholder="Praveen Juge">
    <button class="btn btn-dark">Save</button>
  </div>
  <div class="form-append">
    <input class="form-input" placeholder="Praveen Juge">
    <span class="bg-gray-200 rounded-r px-3 flex items-center">@email.com</span>
  </div>
</div>

{{< /code >}}

## Validation

{{< code html >}}

<label class="block text-sm mb-1" for="namesuccess">Your Name</label>
<input class="form-input bg-green-100" value="Praveen Juge" id="namesuccess">
<span class="text-green-700 text-sm mt-1">That's your name alright!</span>

<label class="block text-sm mb-1 mt-4" for="namefail">Your Name</label>
<input class="form-input bg-red-100" value="Praveen Juge" id="namefail">
<span class="text-red-700 text-sm mt-1">Are you sure about this?</span>

<label class="block text-sm mb-1 mt-4" for="colorsuccess">Select a color</label>
<select class="form-select bg-green-100" id="colorsuccess"><option>Red</option></select>
<span class="text-green-700 text-sm mt-1">Yup, that's a color!</span>

<label class="block text-sm mb-1 mt-4" for="colordanger">Select a color</label>
<select class="form-select bg-red-100" id="colordanger"><option>Red</option></select>
<span class="text-red-700 text-sm mt-1">Are you sure about this?</span>

<hr />

<label class="flex items-center mt-4">
  <input type="checkbox" class="form-checkbox bg-green-100">
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
<span class="text-green-700 block text-sm mt-1">You clicked!</span>

<label class="flex items-center mt-4">
  <input type="checkbox" class="form-checkbox bg-red-100">
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
<span class="text-red-700 block text-sm mt-1">Click please</span>

<label class="flex items-center mt-4">
  <input type="radio" class="form-radio bg-green-100" name="radio" value="1">
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
<span class="text-green-700 block text-sm mt-1">You clicked!</span>

<label class="flex items-center mt-4">
  <input type="radio" class="form-radio bg-red-100" name="radio" value="1">
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
<span class="text-red-700 block text-sm mt-1">Click please</span>

{{< /code >}}

## Disabled

{{< code html >}}

<label class="block text-sm mb-1" for="name3">Your Name</label>
<input class="form-input" placeholder="Praveen Juge" id="name3" disabled>

<label class="block text-sm mb-1" for="color3">Select a color</label>
<select class="form-select" id="color3" disabled><option>Red</option></select>

<label class="flex items-center">
  <input type="checkbox" class="form-checkbox" disabled>
  <span class="ml-2 cursor-pointer">Click me</span>
</label>

<label class="flex items-center">
  <input type="radio" class="form-radio" name="radio" value="1" disabled>
  <span class="ml-2 cursor-pointer">Click me</span>
</label>
{{< /code >}}

## Readonly

{{< code html >}}
<label class="block text-sm mb-1" for="name4">Your Name</label>
<input class="form-input" placeholder="Praveen Juge" readonly id="name4">
{{< /code >}}

## Example: Login Form

{{< code html >}}

<form class="w-full md:w-4/12 mx-auto py-10">
  <label class="block text-sm mb-1" for="emailinput">Your Email</label>
  <input class="form-input" type="email" placeholder="Ex. james@bond.com" id="emailinput" required />
  <label class="block text-sm mb-1 mt-4" for="passwordinput">Your Password</label>
  <input class="form-input" type="password" placeholder="••••••••" id="passwordinput" required />
  <label class="flex items-center mt-4">
    <input type="checkbox" class="form-checkbox" />
    <span class="ml-2 cursor-pointer text-sm">Remember me</span>
  </label>
  <input type="submit" class="btn btn-primary w-full mt-4" value="Login" />
</form>
{{< /code >}}
