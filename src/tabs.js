module.exports = Tabs = () => ({
  ".tab": {
    "@apply flex items-end border-b border-gray-200": {},
  },
  ".tab-link, .prose .tab-link": {
    "@apply py-2 px-4 text-gray-600 border-gray-200 border-b transition-colors duration-150 ease-in font-medium text-center text-sm no-underline": {},
    marginBottom: "-1px",
    "&:hover": {
      "@apply border-gray-400 text-gray-900": {},
    },
    "&:focus": {
      "@apply border-gray-400 text-gray-900 outline-none": {},
    },
  },
  ".tab-link.disabled": {
    "@apply opacity-25 pointer-events-none cursor-default": {},
  },
  ".tab-full .tab-link": {
    "@apply w-full": {},
  },
  // Sizes
  ".tab-sm .tab-link": {
    "@apply text-xs py-1 px-2": {},
  },
  ".tab-lg .tab-link": {
    "@apply text-lg px-5": {},
  },
  // Vertical
  ".tab-vertical": {
    "@apply flex-col items-start border-0": {},
  },
  ".tab-vertical .tab-link": {
    "@apply border-b-0 border-l border-transparent py-2": {},
  },
  ".tab-vertical .tab-link:hover": {
    "@apply border-gray-400 text-gray-900": {},
  },
  ".tab-vertical .tab-link.active, .tab-link.active": {
    "@apply text-primary border-primary": {},
    "&:hover": {
      "@apply text-primary-dark border-primary-dark": {},
    },
    "&:focus": {
      "@apply text-primary-dark border-primary-dark": {},
    },
  },
});
