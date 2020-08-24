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

// Data
var lastOpenedElement = null;
const FOCUSABLE_ELEMENTS = [
  '[href]:not([tabindex^="-"])',
  'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])',
  'input[type="radio"]:checked',
  'select:not([disabled]):not([tabindex^="-"])',
  'textarea:not([disabled]):not([tabindex^="-"])',
  'button:not([disabled]):not([tabindex^="-"])',
  '[tabindex]:not([tabindex^="-"])',
  '[contenteditable="true"]:not([tabindex^="-"])',
];

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

// Focus an element
// elements - array of dropdown elements
function focus(elements, focussedIndex) {
  // Use of % for infinite iterations
  var index = Math.abs(focussedIndex) % elements.length;
  if (index >= 0) {
    elements[index].focus();
  }
}

// Refocus dialog trigger element
// This usually happens when the user closes the dialog
function refocus(element) {
  var dialogTrigger = element.querySelector('[x-spread="trigger"]');
  if (dialogTrigger) {
    dialogTrigger.focus();
  }
}

// Focus Dialog
function focusDialog(dialog) {
  dialog = dialog.querySelector('[x-spread="dialog"]');
  if (dialog) {
    dialog.focus();
  }
}

// From bootstrap
function getScrollbarWidth() {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth =
    scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}

function adjustScrollBar(isOpen) {
  if (isOpen) {
    var htmlDocument = document.querySelector("html");
    htmlDocument.style.overflow = "hidden";
    var body = document.querySelector("body");
    body.style.paddingRight = getScrollbarWidth() + "px";
  } else {
    var htmlDocument = document.querySelector("html");
    htmlDocument.style.overflow = null;
    var body = document.querySelector("body");
    body.style.paddingRight = null;
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
        refocus(lastOpenedElement);
        adjustScrollBar(this.open);
        toggleAriaAtrributes(this.$el, this.open);
      },
    },
    dialog: {
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocus(lastOpenedElement);
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
          refocus(lastOpenedElement);
          adjustScrollBar(this.open);
          toggleAriaAtrributes(this.$el, this.open);
        }
      },
    },
    close() {
      this.open = false;
      focussedIndex = -1;
      refocus(lastOpenedElement);
      adjustScrollBar(this.open);
      toggleAriaAtrributes(this.$el, this.open);
    },
  };
};
