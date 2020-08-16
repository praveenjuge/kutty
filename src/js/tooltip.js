const getTooltipPlacement = function (element, tooltip) {
  let placement = element.getAttribute("x-position") || "top";
  let transform = {};
  switch (placement) {
    case "top": {
      transform = {
        x:
          tooltip.offsetWidth > element.offsetWidth
            ? Math.round(element.offsetLeft - Math.abs(element.offsetWidth - tooltip.offsetWidth) / 2)
            : Math.round(element.offsetLeft + Math.abs(element.offsetWidth - tooltip.offsetWidth) / 2),
        y: Math.round(element.offsetTop - tooltip.offsetHeight - 10),
      };
      break;
    }
    case "left": {
      transform = {
        x: Math.round(element.offsetLeft - tooltip.offsetWidth - 10),
        y: Math.round(element.offsetTop + element.offsetHeight / 2 - tooltip.offsetHeight / 2),
      };
      break;
    }
    case "bottom": {
      transform = {
        x:
          tooltip.offsetWidth > element.offsetWidth
            ? Math.round(element.offsetLeft - Math.abs(element.offsetWidth - tooltip.offsetWidth) / 2)
            : Math.round(element.offsetLeft + Math.abs(element.offsetWidth - tooltip.offsetWidth) / 2),
        y: Math.round(element.offsetTop + element.offsetHeight + 10),
      };
      break;
    }
    case "right": {
      transform = {
        x: Math.round(element.offsetLeft + element.offsetWidth + 10),
        y: Math.round(element.offsetTop + element.offsetHeight / 2 - tooltip.offsetHeight / 2),
      };
      break;
    }
    default: {
      transform = {
        x:
          tooltip.offsetWidth > element.offsetWidth
            ? Math.round(element.offsetLeft - Math.abs(element.offsetWidth - tooltip.offsetWidth) / 2)
            : Math.round(element.offsetLeft + Math.abs(element.offsetWidth - tooltip.offsetWidth) / 2),
        y: Math.round(element.offsetTop - tooltip.offsetHeight - 10),
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
