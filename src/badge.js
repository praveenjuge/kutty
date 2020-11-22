module.exports = Badge = () => ({
  ".badge, .prose a.badge": {
    "@apply text-center font-semibold relative overflow-hidden py-1 px-3 w-auto inline-flex items-center leading-none whitespace-nowrap align-baseline text-xs rounded-full transition no-underline": {},
  },
  "a.badge": {
    "@apply focus:ring focus:outline-none": {},
  },
  ".badge .btn": {
    "@apply p-0 border-0 ml-1 -mr-1 !important": {},
  },
});
