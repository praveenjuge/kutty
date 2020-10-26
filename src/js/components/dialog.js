// Todo
// - Set aria-labelledby attribute to dialog modal
// - Set aria-describedby attribute to dialog modal

// Completed Features
// - Click, press enter or press space on the dialog trigger to open/close
// dialog modal
// - Press escape or click outside the dialog modal to close the dialog modal
// - Set aria-haspopup="dialog" attribute to dialog trigger
// - Add role="dialog" attribute to dialog modal
// - Add aria-modal="true" attribute to dialog modal
// - Add tabindex="-1" to dialog modal
// - Restore focus to the dialog trigger button once the dialog modal is closed
// - Make sure it's closable with a button inside the dialog modal
// - Toggle aria-hidden attribute to dialog modal based on it's open state
// When the dialog modal is opened, do the following:
// - Focus on the first focusable element when dialog modal is opened
// - Make sure tab focuses are restricted to modal itself
// - Add overflow: hidden; style to html tag
// - Add padding-right style to the body, where the value is the scroll bar -
// find the scroll bar width and set as padding right to html body width

import { FOCUSABLE_ELEMENTS } from "../constants";
import { adjustScrollBar, focus, refocusTrigger } from "../utils";

// Data
var lastOpenedElement = null;

// Set attributes when the component is initialized
function init(dialog) {
  var trigger = dialog.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute("aria-haspopup", "dialog");
    var dialog = dialog.querySelectorAll('[x-spread="dialog"]');
    if (dialog.length) {
      dialog = dialog[0];
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-hidden", true);
      dialog.setAttribute("aria-modal", true);
      dialog.setAttribute("tabindex", -1);
    }
  }
}

// Toggle aria atrributes based on the dialog state
function toggleAriaAtrributes(dialog, isOpen) {
  dialog = dialog.querySelectorAll('[x-spread="dialog"]');
  if (dialog.length) {
    dialog = dialog[0];
    if (isOpen) {
      dialog.setAttribute("aria-hidden", false);
    } else {
      dialog.setAttribute("aria-hidden", true);
    }
  }
}

// Initialize attribute for all dialog elements
var dialogs = document.querySelectorAll('[x-data="dialog()"]');
dialogs.forEach(function (dialog) {
  init(dialog);
});

window.dialog = function () {
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ["@click"]() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement = this.$el;
          var dialog = this.$el.querySelector('[x-spread="dialog"]');
          var dialogElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
          focussedIndex++;
          focus(dialogElements, focussedIndex);
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
    dialog: {
      ["x-show.transition.opacity.duration.100ms.origin.center.center.scale.105"]() {
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
        var dialog = this.$el.querySelector('[x-spread="dialog"]');
        var dialogElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
        focussedIndex++;
        focus(dialogElements, focussedIndex);
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
