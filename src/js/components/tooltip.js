const createTooltip = function (element) {
  let tooltipElement = document.createElement("div");
  tooltipElement.setAttribute("class", "tooltip");
  tooltipElement.setAttribute("role", "tooltip");
  tooltipElement.setAttribute("id", "tooltip-kutty");
  tooltipElement.innerText = element.getAttribute("title");
  document.body.append(tooltipElement);
  element.setAttribute("title", "");
  return Popper.createPopper(element, tooltipElement, {
    placement: element.getAttribute("x-position") || "top",
  });
};

const destroyTooltip = function (element) {
  let tooltipElement = document.getElementById("tooltip-kutty");
  let titleContent = tooltipElement.innerText;
  element.setAttribute("title", titleContent);
  return tooltipElement.parentNode.removeChild(tooltipElement);
};


window.tooltip = function () {
  return {
    tooltip: {
      ["@mouseenter"]() {
        createTooltip(this.$el);
      },
      ["@mouseleave"]() {
        destroyTooltip(this.$el);
      },
    },
  };
};
