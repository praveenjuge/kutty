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
        return this.open;
      },
    },
  };
};
