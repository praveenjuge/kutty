// Thanks Bootstrap
module.exports = Spinner = () => ({
  ".spinner": {
    "@apply inline-block w-6 h-6 border-current rounded-full align-text-bottom": {},
    borderWidth: "3px",
    borderRightColor: "transparent !important",
    animation: `spinnerAnimation .75s linear infinite`,
  },
  ".spinner-sm": {
    "@apply w-4 h-4": {},
  },
  ".spinner-lg": {
    "@apply w-12 h-12": {},
  },
  "@keyframes spinnerAnimation": {
    to: { transform: "rotate(360deg)" },
  },
});
