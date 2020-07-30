module.exports = Skeleton = () => ({
  ".skeleton .line, .skeleton .line::before, .skeleton .line::after": {
    content: "''",
    "@apply bg-gray-300 w-11/12 h-4 rounded left-0 animate-pulse": {},
  },
  ".skeleton .line": {
    "@apply relative my-6": {},
  },
  ".skeleton .line::before": {
    top: "-21px",
    "@apply absolute w-9/12": {},
  },
  ".skeleton .line::after": {
    bottom: "-21px",
    "@apply absolute w-8/12": {},
  },
  ".skeleton .line + .line": {
    "@apply w-9/12 mt-12": {},
  },
  ".skeleton .circle": {
    "@apply bg-gray-300 h-12 w-12 mt-1 mr-3 rounded-full left-0 animate-pulse": {},
  },
});
