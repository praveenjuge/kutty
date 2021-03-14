// Todo
// - On pressing A-Z, a-z the focus moves to the corresponding list item

// Completed Features
// - Click, press enter or press space on the dropdown button to open/close
// dropdown menu
// - Press escape or click outside to close the dropdown menu when opened
// - Up arrow, down arrow focuses on each dropdown item
// - Home, end button moves the focus to top and bottom of the dropdown menu
// - Set aria-haspopup attribute to dropdown button
// - Set aria-controls attribute to dropdown button mapped to dropdown menu
// - Set aria-labelledby attribute to dropdown menu mapped to dropdown button
// - Toggle aria-expanded attribute to dropdown button
// - Set role="menu" attribute to dropdown menu
// - Set role="menuitem" attribute to dropdown menu items
// - Toggle aria-hidden attribute to dropdown menu based on it's open state
// - Add tabindex="-1" to dropdown menu items
// - Restore focus to the dropdown button once the dropdown menu is closed

import { focus, refocusTrigger } from "../utils";

var lastOpenedElement = null;

// Normalize itertion counter - Arrow Up
// Check if the focussedIndex reached a negative number
// If so, assign it to (elements.length - 1)
// Else, decrement the counter
function normalizeNegativeCounter(elements, focussedIndex) {
  if (focussedIndex <= 0) return elements.length - 1;
  return focussedIndex - 1;
}

// Toggle aria atrributes based on the dropdown state
function toggleAriaAtrributes(dropdown, open) {
  let trigger = dropdown.querySelector('[x-spread="trigger"]');
  let dropdownList = dropdown.querySelector('[x-spread="dropdown"]');
  if (trigger && dropdownList) {
    if (open) {
      trigger.setAttribute("aria-expanded", true);
      dropdownList.setAttribute("aria-hidden", false);
    } else {
      trigger.setAttribute("aria-expanded", false);
      dropdownList.setAttribute("aria-hidden", true);
    }
  }
}

// Set attributes when the component is initialized
function init(dropdown) {
  let trigger = dropdown.querySelector('[x-spread="trigger"]');
  let dropdownList = dropdown.querySelector('[x-spread="dropdown"]');
  if (trigger && dropdownList) {
    trigger.setAttribute("aria-haspopup", true);
    trigger.setAttribute("aria-expanded", false);
    trigger.setAttribute("aria-controls", dropdown.id);
    dropdownList.setAttribute("role", "menu");
    dropdownList.setAttribute("aria-labelledby", trigger.id);
    dropdownList.setAttribute("aria-hidden", true);
    let dropdownItems = dropdown.querySelectorAll(".dropdown-item");
    if (dropdownItems.length) {
      [...dropdownItems].forEach(function (dropdownItem) {
        dropdownItem.setAttribute("role", "menuitem");
        dropdownItem.setAttribute("tabindex", -1);
      });
    }
    return Popper.createPopper(trigger, dropdownList, {
      placement: dropdownList.getAttribute("x-position") || "bottom-start",
    });
  }
}

// Initialize attribute for all dropdown elements
window.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('[x-data="dropdown()"]');
  dropdowns.forEach(function (dropdown) {
    init(dropdown);
  });
});

window.dropdown = function () {
  var focussedIndex = -1;
  const DROPDOWN_ITEM_SELECTOR = ".dropdown-item";
  return {
    open: false,
    trigger: {
      ["@keydown.escape"]() {
        this.open = false;
        refocusTrigger(this.$el);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@click"]() {
        this.open = !this.open;
        focussedIndex = -1;
        if (this.open) {
          lastOpenedElement = this.$el;
        } else {
          refocusTrigger(this.$el);
        }
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@keydown.arrow-down"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.arrow-up"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.home"](e) {
        e.preventDefault();
        focussedIndex = -1;
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.end"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
    },
    dropdown: {
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(this.$el);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["x-show.transition.in.duration.100ms.opacity.out.opacity.duration.100ms"]() {
        return this.open;
      },
      ["@click.away"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@keydown.arrow-down"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.arrow-up"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = normalizeNegativeCounter(dropdownElements, focussedIndex);
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.home"](e) {
        e.preventDefault();
        focussedIndex = -1;
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.end"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
    },
  };
};
