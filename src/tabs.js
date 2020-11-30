module.exports = Tabs = () => ({
  ".tab": {
    "@apply flex items-end border-b border-gray-200": {},
  },
  ".tab-link, .prose .tab-link": {
    "@apply py-2 px-4 text-gray-600 border-gray-200 border-b transition font-medium text-center text-sm no-underline hover:border-gray-400 hover:text-gray-900 focus:ring focus:outline-none focus:z-10": {},
    marginBottom: "-1px",
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
    "@apply border-b-0 border-l border-transparent py-2 hover:border-gray-400 hover:text-gray-900": {},
  },
  // Active
  ".tab-link.active": {
    "@apply text-primary border-primary hover:text-primary-dark hover:border-primary-dark": {},
  },
});
