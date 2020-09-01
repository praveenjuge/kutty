import { FOCUSABLE_ELEMENTS } from "../constants";
import { adjustScrollBar, focus, refocusTrigger } from "../utils";

// Data
var lastOpenedElement = null;

// Set attributes when the component is initialized
function init(drawer) {
  var trigger = drawer.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute("aria-haspopup", "dialog");
    var drawer = drawer.querySelectorAll('[x-spread="drawer"]');
    if (drawer.length) {
      drawer = drawer[0];
      drawer.setAttribute("role", "drawer");
      drawer.setAttribute("aria-hidden", true);
      drawer.setAttribute("aria-modal", true);
      drawer.setAttribute("tabindex", -1);
    }
  }
}

// Toggle aria atrributes based on the drawer state
function toggleAriaAtrributes(drawer, isOpen) {
  drawer = drawer.querySelectorAll('[x-spread="drawer"]');
  if (drawer.length) {
    drawer = drawer[0];
    if (isOpen) {
      drawer.setAttribute("aria-hidden", false);
    } else {
      drawer.setAttribute("aria-hidden", true);
    }
  }
}

// Initialize attribute for all drawer elements
var drawers = document.querySelectorAll('[x-data="drawer()"]');
drawers.forEach(function (drawer) {
  init(drawer);
});

window.drawer = function () {
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ["@click"]() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement = this.$el;
          var drawer = this.$el.querySelector('[x-spread="drawer"]');
          var drawerElements = drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
          focussedIndex++;
          focus(drawerElements, focussedIndex);
        } else {
          focussedIndex = -1;
        }
        adjustScrollBar(this.open);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement);
        adjustScrollBar(this.open);
        toggleAriaAtrributes(this.$el, this.open);
      },
    },
    drawer: {
      ["x-show.transition.opacity.duration.100ms"]() {
        const drawerContent = this.$el.querySelector('[x-spread="drawer"]');
        if (this.open) {
          setTimeout(() => drawerContent.classList.add("active"), 100);
        } else {
          drawerContent.classList.remove("active");
        }
        return this.open;
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement);
        adjustScrollBar(this.open);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@keydown.tab"](e) {
        e.preventDefault();
        var drawer = this.$el.querySelector('[x-spread="drawer"]');
        var drawerElements = drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        focussedIndex++;
        focus(drawerElements, focussedIndex);
      },
      ["@click"](e) {
        if (this.open && e.target.hasAttribute("x-spread")) {
          this.open = false;
          focussedIndex = -1;
          refocusTrigger(lastOpenedElement);
          adjustScrollBar(this.open);
          toggleAriaAtrributes(this.$el, this.open);
        }
      },
    },
    close() {
      this.open = false;
      focussedIndex = -1;
      refocusTrigger(lastOpenedElement);
      adjustScrollBar(this.open);
      toggleAriaAtrributes(this.$el, this.open);
    },
  };
};
