module.exports = Progress = () => ({
  ".progress": {
    appearance: "none",
    borderRadius: "9999px",
    borderWidth: "0px",
    display: "block",
    height: "0.75rem",
    overflow: "hidden",
    padding: "0px",
    width: "100%",
  },
  ".progress::-webkit-progress-bar": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
  },
  ".progress::-webkit-progress-value": { backgroundColor: "currentColor" },
  ".progress::-moz-progress-bar": { backgroundColor: "currentColor" },
  ".progress::-ms-fill": {
    backgroundColor: "currentColor",
    borderWidth: "0px",
  },
  ".progress:indeterminate": {
    backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
    "--tw-gradient-from": "#e2e8f0",
    "--tw-gradient-stops": ["var(--tw-gradient-from), var(--tw-gradient-to, rgba(226, 232, 240, 0))", "var(--tw-gradient-from), currentColor, var(--tw-gradient-to, rgba(255, 255, 255, 0))"],
    "--tw-gradient-to": "#e2e8f0",
    WebkitAnimation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  ".progress:indeterminate::-moz-progress-bar": {
    backgroundColor: "transparent",
  },
  ".progress:indeterminate::-webkit-progress-bar": {
    backgroundColor: "transparent",
  },
});
