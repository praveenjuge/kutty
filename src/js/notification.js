window.notification = function () {
  return {
    open: true,
    trigger: {
      ["@click"]() {
        this.open = false;
      },
    },
    notification: {
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
    },
  };
};
