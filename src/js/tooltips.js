const Tooltips = (() => {
  class Tooltips {
    constructor(options) {
      this.tooltipTitle = options.tooltipTitle;
      this.tooltipPosition = options.tooltipPosition;
      console.table(this.tooltipTitle, this.tooltipPosition);

      this.isOpen = false;

      this.template = '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>';
    }

    addEventListeners() {
      // Add all the listeners to the dropdown
      if (event) this.trigger.focus();
      document.addEventListener("click", this.onClick);
      this.trigger.addEventListener("keydown", this.onKeydown);
      this.dropdown.addEventListener("keydown", this.onKeydown);
      this.links.forEach((link) => {
        link.addEventListener("focus", this.onFocus);
      });
    }

    removeEventListeners() {
      // Remove all the listeners attached to the dropdown
      document.removeEventListener("click", this.onClick);
      this.trigger.removeEventListener("keydown", this.onKeydown);
      this.dropdown.removeEventListener("keydown", this.onKeydown);
      this.links.forEach((link) => {
        link.removeEventListener("focus", this.onFocus);
      });
    }

    open() {
      // Open dropdown
      this.isOpen = true;
      this.trigger.setAttribute("aria-expanded", true);
      this.dropdown.setAttribute("aria-hidden", false);
      setTimeout(() => this.dropdown.classList.add(animationClass), 1);

      // Add event listeners
      this.addEventListeners();
    }

    close(event) {
      // Close dropdown
      this.isOpen = false;
      this.dropdown.classList.remove(animationClass);
      this.trigger.setAttribute("aria-expanded", false);
      setTimeout(() => this.dropdown.setAttribute("aria-hidden", true), 100);

      // Remove event listeners
      this.removeEventListeners();

      // Restoring focus
      this.trigger.focus();
    }

    toggle(event) {
      // Toggle open and close state of the dropdown
      event.preventDefault();
      this.isOpen = !this.isOpen;
      this.isOpen ? this.open() : this.close();
    }

    destroy() {
      // Remove event listeners
      this.removeEventListeners();

      // Remove event listener on the trigger button
      this.trigger.removeEventListener("click", this.toggle);
    }

    render() {
      const element = document.createElement("div");
      element.innerHTML = this.template;

      const innerTextArea = element.querySelector(".tooltip-inner");
      innerTextArea.textContent = this.tooltipTitle;

      document.body.appendChild(element);

      // Add click to toggle dropdown
      this.trigger.addEventListener("click", this.toggle);
    }
  }

  const init = () => {
    const tooltips = document.querySelectorAll("[data-tooltip]");
    const options = {};

    tooltips.forEach((tooltip) => {
      options.tooltipTitle = tooltip.getAttribute("title");
      options.tooltipPosition = tooltip.dataset.tooltip;

      const singleTooltip = new Tooltips(options);
      singleTooltip.render();
    });
  };

  return { init };
})();

export default Tooltips;
