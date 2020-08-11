import "./alpinejs.js";
import "./collapse.js";
import "./dropdown.js";
import "./dialog.js";

import Drawer from "./drawer.js";
import Sidebar from "./sidebar.js";

document.addEventListener("DOMContentLoaded", () => {
  Drawer.init();
  Sidebar.init();
});
