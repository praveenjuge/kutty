module.exports = Spinner = () => ({
  ".spinner": {
    "@apply animate-spin inline-block w-6 h-6 border-current rounded-full align-middle": {},
    borderWidth: "3px",
    borderRightColor: "transparent !important",
  },
  ".spinner-sm": {
    "@apply w-4 h-4": {},
  },
  ".spinner-lg": {
    "@apply w-12 h-12": {},
  },
});
