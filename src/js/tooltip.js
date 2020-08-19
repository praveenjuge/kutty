const getTooltipPlacement = function (element, tooltip) {
  let placement = element.getAttribute("x-position") || "top";
  let triggerElement = element.getBoundingClientRect();
  let tooltipElement = tooltip.getBoundingClientRect();
  let transform = {};
  switch (placement) {
    case "top": {
      transform = {
        x:
          tooltipElement.width > triggerElement.width
            ? Math.round(triggerElement.left - Math.abs(triggerElement.width - tooltipElement.width) / 2)
            : Math.round(triggerElement.left + Math.abs(triggerElement.width - tooltipElement.width) / 2),
        y: Math.round(triggerElement.top - tooltipElement.height - 10),
      };
      break;
    }
    case "left": {
      transform = {
        x: Math.round(triggerElement.left - tooltipElement.width - 10),
        y: Math.round(triggerElement.top + triggerElement.height / 2 - tooltipElement.height / 2),
      };
      break;
    }
    case "bottom": {
      transform = {
        x:
          tooltipElement.width > triggerElement.width
            ? Math.round(triggerElement.left - Math.abs(triggerElement.width - tooltipElement.width) / 2)
            : Math.round(triggerElement.left + Math.abs(triggerElement.width - tooltipElement.width) / 2),
        y: Math.round(triggerElement.top + triggerElement.height + 10),
      };
      break;
    }
    case "right": {
      transform = {
        x: Math.round(triggerElement.left + triggerElement.width + 10),
        y: Math.round(triggerElement.top + triggerElement.height / 2 - tooltipElement.height / 2),
      };
      break;
    }
    default: {
      transform = {
        x:
          tooltipElement.width > triggerElement.width
            ? Math.round(triggerElement.left - Math.abs(triggerElement.width - tooltipElement.width) / 2)
            : Math.round(triggerElement.left + Math.abs(triggerElement.width - tooltipElement.width) / 2),
        y: Math.round(triggerElement.top - tooltipElement.height - 10),
      };
      break;
    }
  }
  return `translate3d(${transform.x}px, ${transform.y}px, 0px)`;
};

const createTooltip = function (element) {
  let tooltipElement = document.createElement("div");
  tooltipElement.setAttribute("class", "tooltip");
  tooltipElement.setAttribute("role", "tooltip");
  tooltipElement.setAttribute("id", "tooltip-kutty");
  tooltipElement.innerText = element.getAttribute("title");
  document.body.append(tooltipElement);
  tooltipElement.style.transform = getTooltipPlacement(element, tooltipElement);
};

const destroyTooltip = function (element) {
  let tooltipElement = document.getElementById("tooltip-kutty");
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
