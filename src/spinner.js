module.exports = Spinner = () => ({
  ".spinner": {
    borderColor: "currentColor",
    borderRadius: "9999px",
    borderWidth: "2px",
    display: "inline-block",
    height: "1.5rem",
    verticalAlign: "middle",
    width: "1.5rem",
    WebkitAnimation: "spin 1s linear infinite",
    animation: "spin 1s linear infinite",
    borderRightColor: "transparent !important",
  },
});
