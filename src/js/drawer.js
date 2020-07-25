// Todo
// - Focus on the first focusable element when drawer is opened

const Drawer = (() => {
  const drawerSelector = ".drawer";
  const openingSelector = ".drawer-open";
  const closingTrigger = ".drawer-close";
  const labelledby = "drawer-title";
  const disabledClass = "overflow-hidden";
  const animationClass = "drawer-animation";

  // Use Symbols to create private methods
  const onClick = Symbol("onClick");
  const onKeydown = Symbol("onKeydown");
  const addEventDelegation = Symbol("addEventDelegation");
  const addEventListeners = Symbol("addEventListeners");
  const removeEventListeners = Symbol("removeEventListeners");
  const addAttributes = Symbol("addAttributes");
  const removeAttributes = Symbol("removeAttributes");
  const setAttributes = Symbol("setAttributes");
  const setFocusableElements = Symbol("setFocusableElements");
  const setFocus = Symbol("setFocus");
  const restoreFocus = Symbol("restoreFocus");
  const switchFocus = Symbol("switchFocus");
  const maintainFocus = Symbol("maintainFocus");
  const addObserver = Symbol("addObserver");
  const removeObserver = Symbol("removeObserver");

  const focusableElements = [
    '[href]:not([tabindex^="-"])',
    'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])',
    'input[type="radio"]:checked',
    'select:not([disabled]):not([tabindex^="-"])',
    'textarea:not([disabled]):not([tabindex^="-"])',
    'button:not([disabled]):not([tabindex^="-"])',
    '[tabindex]:not([tabindex^="-"])',
    '[contenteditable="true"]:not([tabindex^="-"])',
  ];

  const keyCodes = {
    escape: "Escape",
    tab: "Tab",
    f6: "F6",
  };

  function getVisibleElements(elements) {
    const visibleElements = [];

    elements.forEach((element) => {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.width > 0 || bounding.height > 0;

      if (isVisible) visibleElements.push(element);
    });

    return visibleElements;
  }

  // Only get no nested elements
  function getNoNestedElements(context, selector, elements) {
    const nestedComponents = context.querySelectorAll(selector);
    const noNestedElements = [];
    let isNested = false;

    if (nestedComponents.length === 0) return elements;

    elements.forEach((element) => {
      nestedComponents.forEach((nestedComponent) => {
        if (nestedComponent.contains(element)) isNested = true;
      });

      if (!isNested) noNestedElements.push(element);

      isNested = false;
    });

    return noNestedElements;
  }

  // Check if the parent elements match the target
  function closest(element, target) {
    let currentElement = element;

    while (currentElement !== target && currentElement) {
      currentElement = currentElement.parentNode;
    }

    return !!currentElement;
  }

  // From bootstrap
  function getScrollbarWidth() {
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "scrollbar-measure";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  class Drawer {
    constructor(options, { onOpen = () => {}, onClose = () => {}, describedby, isModal = true, isOpen = false, isCreated = true, disableScroll = true } = {}) {
      // Check if the drawer exists, if not, set `isInitialized` to false
      if (!document.querySelector(drawerSelector)) {
        this.isInitialized = false;
        return;
      }

      // Save the initial configuration
      this.config = {
        onOpen,
        onClose,
        describedby,
        isModal,
        isCreated,
        isOpen,
        disableScroll,
      };

      this.drawer = options.drawerContainer;
      this.openingTrigger = options.trigger;
      this.backdropTrigger = options.drawerContainer;
      this.drawerArea = `${drawerSelector}, ${openingSelector}`;

      this.document = document.querySelector("html");
      this.documentIsAlreadyDisabled = false;
      this.focusableElements = [];
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;

      this.scrollbarWidth = getScrollbarWidth();

      this.isCreated = false;
      this.isOpen = false;

      this.close = this.close.bind(this);
      this.toggle = this.toggle.bind(this);
      this[onClick] = this[onClick].bind(this);
      this[onKeydown] = this[onKeydown].bind(this);
      this[addEventDelegation] = this[addEventDelegation].bind(this);
      this[switchFocus] = this[switchFocus].bind(this);

      // Add mutation observer to update focusable elements
      this.observer = new MutationObserver((mutations) => mutations.forEach(() => this[setFocusableElements]()));

      // initialize the drawer
      this.isInitialized = true;
    }

    [onClick](event) {
      if (!event.target.closest(this.drawerArea)) this.close(event);
      if (event.target === this.backdropTrigger) this.close(event);
    }

    [onKeydown](event) {
      switch (event.key) {
        case keyCodes.escape:
          event.stopPropagation();
          this.close(event);
          break;
        case keyCodes.f6:
          if (!this.config.isModal) this[restoreFocus]();
          break;
        case keyCodes.tab:
          this[maintainFocus](event);
          break;
        default:
          break;
      }
    }

    [addEventDelegation](event) {
      if (closest(event.target, this.openingTrigger)) this.toggle(event);

      document.querySelectorAll(closingTrigger).forEach((closeButton) => {
        if (closest(event.target, closeButton)) this.close();
      });
    }

    [addEventListeners]() {
      document.addEventListener("click", this[onClick], { capture: true });
      this.drawer.addEventListener("keydown", this[onKeydown]);
    }

    [removeEventListeners]() {
      document.removeEventListener("click", this[onClick], { capture: true });
      this.drawer.removeEventListener("keydown", this[onKeydown]);

      if (this.openingTrigger) this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
    }

    [addAttributes]() {
      this.drawer.setAttribute("role", "dialog");
      this.drawer.setAttribute("tabindex", -1);
      this.drawer.setAttribute("aria-modal", true);
      this.drawer.setAttribute("aria-hidden", true);

      if (labelledby) this.drawer.setAttribute("aria-labelledby", labelledby);
      if (this.config.describedby) this.drawer.setAttribute("aria-describedby", this.config.describedby);

      this.openingTrigger.setAttribute("aria-haspopup", "drawer");
    }

    [removeAttributes]() {
      this.drawer.removeAttribute("role");
      this.drawer.removeAttribute("tabindex");
      this.drawer.removeAttribute("aria-modal");
      this.drawer.removeAttribute("aria-hidden");
      this.drawer.removeAttribute("aria-labelledby");
      this.drawer.removeAttribute("aria-describedby");

      if (this.config.disableScroll && this.isOpen && !this.documentIsAlreadyDisabled) {
        this.document.classList.remove(disabledClass);
        document.body.removeAttribute("style");
      }

      this.openingTrigger.removeAttribute("aria-haspopup");
    }

    [setAttributes]() {
      this.drawer.setAttribute("aria-hidden", !this.isOpen);

      if (this.config.disableScroll && !this.documentIsAlreadyDisabled) {
        if (this.isOpen) {
          this.document.classList.add(disabledClass);
          document.body.style.paddingRight = this.scrollbarWidth + "px";
        } else {
          this.document.classList.remove(disabledClass);
          document.body.removeAttribute("style");
        }
      }
    }

    [setFocusableElements]() {
      const visibleFocusableElements = getVisibleElements(this.drawer.querySelectorAll(focusableElements));
      const filteredFocusableElements = getNoNestedElements(this.drawer, '[role="drawer"]', visibleFocusableElements);

      this.focusableElements = filteredFocusableElements.length > 0 ? filteredFocusableElements : [this.drawer];
      [this.firstFocusableElement] = this.focusableElements;
      this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    }

    [setFocus]() {
      this.firstFocusableElement.focus();
    }

    [restoreFocus]() {
      this.openingTrigger.focus();

      // Switch focus between the current opening trigger and the non-modal drawer
      if (this.isOpen) this.openingTrigger.addEventListener("keydown", this[switchFocus]);
    }

    [switchFocus](event) {
      if (event.key === keyCodes.f6) {
        this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
        this[setFocus]();
      }
    }

    [maintainFocus](event) {
      if (event.shiftKey && event.target === this.firstFocusableElement) {
        event.preventDefault();
        this.lastFocusableElement.focus();
      }

      if (!event.shiftKey && event.target === this.lastFocusableElement) {
        event.preventDefault();
        this.firstFocusableElement.focus();
      }
    }

    [addObserver]() {
      this.observer.observe(this.drawer, { childList: true, attributes: true, subtree: true });
    }

    [removeObserver]() {
      this.observer.disconnect();
    }

    open() {
      if (!this.isInitialized || !this.isCreated || this.isOpen) return;

      this.isOpen = true;
      this.documentIsAlreadyDisabled = this.document.classList.contains(disabledClass);

      this[setAttributes]();
      this[addEventListeners]();
      this[setFocus]();

      setTimeout(() => this.drawer.classList.add(animationClass), 1);

      this.config.onOpen(this.drawer, this.openingTrigger);
    }

    close(event) {
      if (!this.isInitialized || !this.isCreated || !this.isOpen) return;

      this.isOpen = false;

      if (event) event.preventDefault();

      this.drawer.classList.remove(animationClass);

      setTimeout(() => this[setAttributes](), 100);
      this[removeEventListeners]();

      // Restore focus except for tooltip click events
      if (this.openingTrigger) this[restoreFocus]();

      this.config.onClose(this.drawer, this.openingTrigger);
    }

    toggle(event) {
      if (!this.isInitialized || !this.isCreated) return;

      if (event) event.preventDefault();

      this.isOpen ? this.close() : this.open();
    }

    create() {
      if (!this.isInitialized || this.isCreated) return;

      this.isCreated = true;

      this[addAttributes]();
      this[setFocusableElements]();
      this[addObserver]();

      document.addEventListener("click", this[addEventDelegation], { capture: true });
    }

    destroy() {
      if (!this.isInitialized || !this.isCreated) return;

      this.close();

      this.isCreated = false;

      this[removeAttributes]();
      this[removeEventListeners]();
      this[removeObserver]();

      document.removeEventListener("click", this[addEventDelegation], { capture: true });
    }
  }

  const init = () => {
    // Select all drawers in the page
    const triggers = document.querySelectorAll(openingSelector);
    const options = {};

    triggers.forEach((trigger) => {
      // Select drawer and trigger
      options.trigger = trigger;
      options.drawerContainer = document.querySelector(trigger.dataset.drawer);

      const singleDrawer = new Drawer(options);
      singleDrawer.create();
    });
  };

  return { init };
})();

export default Drawer;
