window.collapse = function () {
  return {
    open: false,
    trigger: {
      ["@click"]() {
        const triggerElement = this.$el.querySelector("[x-spread]", "trigger");
        this.open === false ? ((this.open = true), triggerElement.setAttribute("aria-expanded", true)) : ((this.open = false), triggerElement.setAttribute("aria-expanded", false));
      },
    },
    arrow: {
      [":class"]() {
        return { "transition ease-out duration-200 transform rotate-180": this.open === true };
      },
    },
    collapse: {
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
    },
  };
};
