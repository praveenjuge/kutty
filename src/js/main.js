import "./alpinejs.js";
import "./collapse.js";
import "./dropdown.js";
import "./tooltip.js";

import Dialog from "./dialog.js";
import Drawer from "./drawer.js";

document.addEventListener("DOMContentLoaded", () => {
  Dialog.init();
  Drawer.init();
});
