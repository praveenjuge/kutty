module.exports = Progress = () => ({
  ".progress": {
    "@apply block w-full appearance-none border-0 rounded-full h-3 overflow-hidden p-0": {},
  },
  ".progress::-webkit-progress-bar": {
    "@apply bg-gray-100": {},
  },
  ".progress::-webkit-progress-value": {
    "@apply bg-current": {},
  },
  ".progress::-moz-progress-bar": {
    "@apply bg-current": {},
  },
  ".progress::-ms-fill": {
    "@apply bg-current border-0": {},
  },
  ".progress:indeterminate": {
    "@apply animate-pulse bg-gradient-to-r from-gray-200 via-current to-gray-200": {},
  },
  ".progress:indeterminate::-moz-progress-bar": {
    "@apply bg-transparent": {},
  },
  ".progress:indeterminate::-webkit-progress-bar": {
    "@apply bg-transparent": {},
  },
});
