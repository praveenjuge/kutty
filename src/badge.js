module.exports = Badge = () => ({
  ".badge, .prose a.badge": {
    "@apply text-center font-semibold relative overflow-hidden py-1 px-3 w-auto inline-flex items-center leading-none whitespace-no-wrap align-baseline text-xs rounded-full transition-colors duration-150 ease-in no-underline": {},
  },
  "a.badge:focus, a.badge:active": {
    "@apply shadow-outline outline-none": {},
  },
  ".badge .btn": {
    "@apply p-0 border-0 ml-1 -mr-1 !important": {},
  },
});
