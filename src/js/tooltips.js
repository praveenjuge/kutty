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
      [":style"]() {
        return `top: -43px;`;
      },
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
    },
  };
};
