// Todo
// - Set aria-labelledby attribute to dialog modal
// - Set aria-describedby attribute to dialog modal

// Completed Features
// - Click, press enter or press space on the dialog trigger to open/close
// dialog modal
// - Press escape or click outside the dialog modal to close the dialog modal
// - Set aria-haspopup="dialog" attribute to dialog trigger
// - Toggle aria-hidden attribute to dialog modal based on it's open state
// - Add role="dialog" attribute to dialog modal
// - Add aria-modal="true" attribute to dialog modal
// - Add tabindex="-1" to dialog modal
// - Restore focus to the dialog trigger button once the dialog modal is closed
// - Make sure it's closable with a button inside the dialog modal
// When the dialog modal is opened, do the following:
// - Focus on the first focusable element when dialog modal is opened
// - Make sure tab focuses are restricted to modal itself
// - Add overflow: hidden; style to html
// - Add padding-right style to the body, where the value is the scroll bar
// width

var lastOpenedElement = null;

// Refocus dialog trigger element
// This usually happens when the user closes the dialog
function refocus(element) {
  var dialogTrigger = element.querySelector('[x-spread="trigger"]');
  if (dialogTrigger) {
    dialogTrigger.focus();
  }
}

window.dialog = function() {
  return {
    open: false,
    trigger: {
      ['@click']() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement = this.$el;
        }
      },
      ['@keydown.escape']() {
        this.open = false;
        refocus(lastOpenedElement);
      },
    },
    dialog: {
      close() {
        this.open = false
      },
      ['x-show.transition.opacity.duration.200ms']() {
        return this.open;
      },
      ['@keydown.escape']() {
        this.open = false;
        refocus(lastOpenedElement);
      },
    },
  };
};