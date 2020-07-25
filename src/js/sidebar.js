const Sidebar = (() => {
  const sidebarSelector = ".sidebar";
  const openingSelector = ".sidebar-open";
  const closingTrigger = ".sidebar-close";
  const labelledby = "sidebar-title";
  const disabledClass = "overflow-hidden";

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

  class Sidebar {
    constructor(options, { onOpen = () => {}, onClose = () => {}, describedby, isModal = true, isOpen = false, isCreated = true, disableScroll = true } = {}) {
      // Check if the sidebar exists, if not, set `isInitialized` to false
      if (!document.querySelector(sidebarSelector)) {
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

      this.sidebar = options.sidebarContainer;
      this.openingTrigger = options.trigger;
      this.backdropTrigger = options.sidebarContainer;
      this.sidebarArea = `${sidebarSelector}, ${openingSelector}`;

      this.document = document.querySelector("html");
      this.documentIsAlreadyDisabled = false;
      this.focusableElements = [];
      this.firstFocusableElement = null;
      this.lastFocusableElement = null;

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

      // initialize the sidebar
      this.isInitialized = true;
    }

    [onClick](event) {
      if (!event.target.closest(this.sidebarArea)) this.close(event);
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
      this.sidebar.addEventListener("keydown", this[onKeydown]);
    }

    [removeEventListeners]() {
      document.removeEventListener("click", this[onClick], { capture: true });
      this.sidebar.removeEventListener("keydown", this[onKeydown]);

      if (this.openingTrigger) this.openingTrigger.removeEventListener("keydown", this[switchFocus]);
    }

    [addAttributes]() {
      if (labelledby) this.sidebar.setAttribute("aria-labelledby", labelledby);
      if (this.config.describedby) this.sidebar.setAttribute("aria-describedby", this.config.describedby);

      this.openingTrigger.setAttribute("aria-haspopup", "sidebar");
    }

    [removeAttributes]() {
      this.sidebar.removeAttribute("aria-labelledby");
      this.sidebar.removeAttribute("aria-describedby");

      if (this.config.disableScroll && this.isOpen && !this.documentIsAlreadyDisabled) {
        this.document.classList.remove(disabledClass);
      }

      this.openingTrigger.removeAttribute("aria-haspopup");
    }

    [setAttributes]() {
      if (this.config.disableScroll && !this.documentIsAlreadyDisabled) {
        if (this.isOpen) {
          this.document.classList.add(disabledClass);
        } else {
          this.document.classList.remove(disabledClass);
        }
      }
    }

    [setFocusableElements]() {
      const visibleFocusableElements = getVisibleElements(this.sidebar.querySelectorAll(focusableElements));
      const filteredFocusableElements = getNoNestedElements(this.sidebar, '[role="sidebar"]', visibleFocusableElements);

      this.focusableElements = filteredFocusableElements.length > 0 ? filteredFocusableElements : [this.sidebar];
      [this.firstFocusableElement] = this.focusableElements;
      this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    }

    [setFocus]() {
      this.firstFocusableElement.focus();
    }

    [restoreFocus]() {
      this.openingTrigger.focus();

      // Switch focus between the current opening trigger and the non-modal sidebar
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
      this.observer.observe(this.sidebar, { childList: true, attributes: true, subtree: true });
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
      this.sidebar.classList.add("translate-x-0");

      this.config.onOpen(this.sidebar, this.openingTrigger);
    }

    close(event) {
      if (!this.isInitialized || !this.isCreated || !this.isOpen) return;

      this.isOpen = false;

      if (event) event.preventDefault();

      setTimeout(() => this[setAttributes](), 100);

      this.sidebar.classList.remove("translate-x-0");
      this[removeEventListeners]();

      // Restore focus except for tooltip click events
      if (this.openingTrigger) this[restoreFocus]();

      this.config.onClose(this.sidebar, this.openingTrigger);
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
    // Select all sidebars in the page
    const triggers = document.querySelectorAll(openingSelector);
    const options = {};

    triggers.forEach((trigger) => {
      // Select sidebar and trigger
      options.trigger = trigger;
      options.sidebarContainer = document.querySelector(trigger.dataset.sidebar);

      const singleSidebar = new Sidebar(options);
      singleSidebar.create();
    });
  };

  return { init };
})();

export default Sidebar;
