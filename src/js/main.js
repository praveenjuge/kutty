import "./alpinejs.js";
import "./collapse.js";

import Dialog from "./dialog.js";
import Drawer from "./drawer.js";
import Dropdown from "./dropdown.js";
import Sidebar from "./sidebar.js";

document.addEventListener("DOMContentLoaded", () => {
  Dialog.init();
  Drawer.init();
  Dropdown.init();
  Sidebar.init();
});
