document.addEventListener("alpine:init", () => {
  Alpine.data("collapse", () => ({
    open: false,
    trigger: {
      ["@click"]() {
        this.open = !this.open;
        this.$el.setAttribute("aria-expanded", this.open);
      },
    },
    collapse: {
      ["x-transition.opacity"]() {},
      ["x-show"]() {
        return this.open;
      },
    },
  }));
});
