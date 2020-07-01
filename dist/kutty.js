(function () {
  'use strict';

  // TODO
  // - On pressing A-Z, a-z the focus moves to the corresponding list item

  //DONE
  // - Click, press enter or press space on the dropdown button to open/close dropdown menu
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

  const Dropdown = (() => {
    const keyboardKey = {
      escape: 27,
      end: 35,
      home: 36,
      up: 38,
      down: 40,
    };

    class Dropdown {
      // Initialize objects for the dropdown class
      constructor(options) {
        this.trigger = options.trigger;
        this.dropdown = options.dropdownList;
        this.items = this.dropdown.querySelectorAll(".dropdown-item");
        this.links = this.dropdown.querySelectorAll("a.dropdown-item");
        [this.firstLink] = this.links;
        this.lastLink = this.links[this.links.length - 1];

        this.state = [];
        this.currentFocusedIndex = 0;
        this.isOpen = false;

        this.open = this.open.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
      }

      onClick(event) {
        // Close the dropdown menu when clicked outside and on other dropdown trigger
        if (event.target.closest(".dropdown-trigger") !== this.trigger.closest(".dropdown-trigger")) {
          this.close();
        }
        if (event) event.target.focus();
      }

      onFocus(event) {
        // Managing dropdown menu focus state
        this.state.forEach((section, index) => {
          if (event.target === section.link) {
            this.currentFocusedIndex = index;
          }
        });
      }

      setFocus(event) {
        // Managing dropdown menu focus state
        event.preventDefault();
        if (event.target === this.trigger) this.currentFocusedIndex = 0;

        switch (event.which) {
          case keyboardKey.up:
            this.state[this.currentFocusedIndex].prevLink.focus();
            break;
          case keyboardKey.home:
            this.firstLink.focus();
            break;
          case keyboardKey.end:
            this.lastLink.focus();
            break;
          case keyboardKey.down:
            if (event.target !== this.trigger) {
              this.state[this.currentFocusedIndex].nextLink.focus();
            } else {
              this.firstLink.focus();
            }
            break;
        }
      }

      onKeydown(event) {
        // Capturing all keyboard events needed
        switch (event.which) {
          case keyboardKey.escape:
            this.close(event);
            break;
          case keyboardKey.up:
          case keyboardKey.down:
          case keyboardKey.home:
          case keyboardKey.end:
            this.setFocus(event);
            break;
        }
      }

      addAttributes() {
        // Add all the attributes needed to the dropdown
        this.trigger.setAttribute("aria-haspopup", true);
        this.trigger.setAttribute("aria-controls", this.dropdown.id);
        this.dropdown.setAttribute("role", "menu");
        this.dropdown.setAttribute("aria-labelledby", this.trigger.id);
        this.dropdown.setAttribute("tabindex", -1);
        this.dropdown.setAttribute("aria-hidden", !this.isOpen);

        this.state.forEach((section) => {
          if (section.item) section.item.setAttribute("role", "none");

          section.link.setAttribute("role", "menuitem");
          section.link.setAttribute("tabindex", -1);
        });
      }

      removeAttributes() {
        // Remove all the attributes attached to the dropdown
        this.trigger.removeAttribute("aria-haspopup");
        this.trigger.removeAttribute("aria-controls");
        this.trigger.removeAttribute("aria-expanded");
        this.dropdown.removeAttribute("role");
        this.dropdown.removeAttribute("aria-labelledby");
        this.dropdown.removeAttribute("tabindex");
        this.dropdown.removeAttribute("aria-hidden");

        this.state.forEach((section) => {
          if (section.item) section.item.removeAttribute("role");

          section.link.removeAttribute("role");
          section.link.removeAttribute("tabindex");
        });
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

        // Add event listeners
        this.addEventListeners();
      }

      close(event) {
        // Close dropdown
        this.isOpen = false;
        this.trigger.setAttribute("aria-expanded", false);
        this.dropdown.setAttribute("aria-hidden", true);

        // Remove event listeners
        this.removeEventListeners();

        // Restoring focus
        if (event) this.trigger.focus();
      }

      toggle(event) {
        // Toggle open and close state of the dropdown
        event.preventDefault();
        this.isOpen = !this.isOpen;
        this.isOpen ? this.open() : this.close();
      }

      destroy() {
        // Remove attributes
        this.removeAttributes();

        // Remove event listeners
        this.removeEventListeners();

        // Remove event listener on the trigger button
        this.trigger.removeEventListener("click", this.toggle);
      }

      render() {
        // Get list of menu items
        this.links.forEach((link, index) => {
          this.state.push({
            item: this.items[index],
            link,
            prevLink: this.links[index - 1] || this.lastLink,
            nextLink: this.links[index + 1] || this.firstLink,
          });
        });

        // Add Attributes
        this.addAttributes();

        // Add click to toggle dropdown
        this.trigger.addEventListener("click", this.toggle);
      }
    }

    const init = () => {
      // Select all dropdown in the page
      const triggers = document.querySelectorAll(".dropdown");
      const options = {};

      triggers.forEach((trigger) => {
        // Select dropdown trigger and list
        options.trigger = trigger.querySelector(".dropdown-trigger");
        options.dropdownList = trigger.querySelector(".dropdown-list");

        const singleDropdown = new Dropdown(options);
        singleDropdown.render();
      });
    };

    return { init };
  })();

  document.addEventListener("DOMContentLoaded", () => {
    Dropdown.init();
  });

}());
