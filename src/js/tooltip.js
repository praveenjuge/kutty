window.tooltip = function () {
  return {
    open: false,
    trigger: {
      ["@mouseenter"]() {
        this.open = true;
      },
      ["@mouseleave"]() {
        this.open = false;
      },
    },
    message: {
      ["x-show"]() {
        const triggerElement = this.$el.querySelector("[x-spread]", "trigger");
        const triggerMessage = this.$el.querySelector(".tooltip");
        Popper.createPopper(triggerElement, triggerMessage, {
          placement: "top",
          modifiers: [
            {
              name: "offset",
              options: { offset: [0, 5] },
            },
          ],
        });
        return this.open;
      },
    },
  };
};
