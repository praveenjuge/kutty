module.exports = Alert = () => ({
  ".alert": {
    "@apply font-medium relative overflow-hidden text-sm rounded-md align-middle duration-150 ease-in flex items-start pl-4 pr-4 border-current": {},
    paddingTop: "0.65rem",
    paddingBottom: "0.65rem",
  },
  // Close
  ".alert-close": {
    "@apply absolute top-0 bottom-0 right-0 !important": {},
  },
  ".alert-close svg": {
    "@apply mr-0 mt-0 !important": {},
  },
  ".alert-closable, .alert-closable.alert-lg, .alert-closable.alert-sm": {
    "@apply pr-12 !important": {},
  },
  ".alert svg": {
    "@apply h-5 w-5 mr-3 mt-px flex-none": {},
  },
  // Sizes
  ".alert-sm": {
    "@apply py-1 pl-3 pr-3 text-xs !important": {},
  },
  ".alert-lg": {
    "@apply py-5 pl-5 pr-5 text-lg !important": {},
  },
  ".alert.alert-sm svg": {
    "@apply h-4 w-4": {},
  },
  ".alert.alert-lg svg": {
    "@apply h-6 w-6": {},
  },
  // Text
  ".alert a": {
    "@apply underline": {},
  },
  ".prose .alert p": {
    "@apply mt-0 mb-0": {},
  },
  ".prose .alert a": {
    color: "inherit",
  },
});
