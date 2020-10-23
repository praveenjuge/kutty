---
title: File
---

## Basic

{{< code html >}}
<label class="form-input cursor-pointer" for="basicfile">
  <input type="file" class="sr-only" id="basicfile">
  <span>Choose file...</span>
</label>
{{< /code >}}

## Single File

{{< code html >}}
<label class="form-input cursor-pointer" for="singlefile" x-data="{ files: null }">
  <input type="file" class="sr-only" id="singlefile" x-on:change="files = Object.values($event.target.files)">
  <span class="block w-full truncate" x-text="files ? files.map(file => file.name).join(', ') : 'Choose single file...'">Choose single file...</span>
</label>
{{< /code >}}

## Multiple Files

{{< code html >}}
<label class="form-input cursor-pointer" for="multiplefile" x-data="{ files: null }">
  <input type="file" class="sr-only" id="multiplefile" multiple="true" x-on:change="files = Object.values($event.target.files)">
  <span class="block w-full truncate" x-text="files ? files.map(file => file.name).join(', ') : 'Choose multiple files...'">Choose multiple files...</span>
</label>
{{< /code >}}

## With Reset Form

{{< code html >}}

<form action="#" x-data="{ files: null }">
  <label class="form-input cursor-pointer" for="withreset">
    <input type="file" class="sr-only" id="withreset" x-on:change="files = Object.values($event.target.files)">
    <span class="block w-full truncate" x-text="files ? files.map(file => file.name).join(', ') : 'Choose file...'">Choose file...</span>
  </label>
  <button type="reset" @click="files = null" class="btn btn-light mt-2">Reset</button>
</form>
{{< /code >}}
