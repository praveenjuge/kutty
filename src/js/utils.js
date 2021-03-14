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
  const htmlDocument = document.querySelector("html");
  const body = document.querySelector("body");
  if (isOpen) {
    if (checkScrollBar()) {
      body.style.paddingRight = getScrollbarWidth() + "px";
    }
    htmlDocument.style.overflow = "hidden";
  } else {
    body.style.paddingRight = null;
    htmlDocument.style.overflow = null;
  }
};

// From Bootstrap
const checkScrollBar = () => {
  const rect = document.body.getBoundingClientRect();
  const isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
  return isBodyOverflowing;
};

const getScrollbarWidth = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

export { focus, refocusTrigger, adjustScrollBar };
