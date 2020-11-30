// Focus an element
// elements - array of dropdown elements
const focus = (elements, focussedIndex) => {
  // Use of % for infinite iterations
  var index = Math.abs(focussedIndex) % elements.length;
  if (index >= 0) {
    elements[index].focus();
  }
};

// Refocus trigger element
const refocusTrigger = (element) => {
  var dialogTrigger = element.querySelector('[x-spread="trigger"]');
  if (dialogTrigger) {
    dialogTrigger.focus();
  }
};

const adjustScrollBar = (isOpen) => {
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
};

// Private
// From bootstrap
const getScrollbarWidth = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

export { focus, refocusTrigger, adjustScrollBar };
