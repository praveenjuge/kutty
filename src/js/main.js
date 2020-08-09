import "./alpinejs.js";
import "./collapse.js";
import "./dropdown.js";

import Dialog from "./dialog.js";
import Drawer from "./drawer.js";
import Sidebar from "./sidebar.js";

document.addEventListener("DOMContentLoaded", () => {
  Dialog.init();
  Drawer.init();
  Sidebar.init();
});
