module.exports = Pagination = () => ({
  ".pagination": {
    "@apply flex items-center pl-0 list-none text-sm": {},
  },
  ".pagination-link, .pagination-disabled, .prose a.pagination-link, .prose .pagination-disabled": {
    "@apply px-4 rounded no-underline text-gray-800 font-medium text-sm transition flex items-center justify-center h-10 ml-px": {},
  },
  ".pagination-link": {
    "@apply hover:bg-gray-200 focus:ring focus:outline-none focus:z-10": {},
  },
  ".pagination-link:first-child, .pagination-disabled:first-child": {
    "@apply ml-0": {},
  },
  ".pagination-disabled": {
    "@apply bg-gray-200 text-gray-700 pointer-events-none cursor-default focus:outline-none !important": {},
  },
  ".pagination-active, .prose a.pagination-active": {
    "@apply bg-primary text-white hover:bg-primary-dark focus:bg-primary-dark": {},
  },
  // Sizes
  ".pagination-sm .pagination-link, .pagination-sm .pagination-disabled, .prose .pagination-sm a.pagination-link, .prose .pagination-sm .pagination-disabled": {
    "@apply h-6 text-xs": {},
  },
  ".pagination-lg .pagination-link, .pagination-lg .pagination-disabled, .prose .pagination-lg a.pagination-link, .prose .pagination-lg .pagination-disabled": {
    "@apply h-12 text-xl": {},
  },
});
