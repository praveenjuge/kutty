module.exports = Dropdown = () => ({
  ".dropdown-list": {
    "@apply absolute z-10 shadow-md w-48 flex flex-col mb-0 border border-solid border-gray-100 bg-white p-2 rounded transition origin-top": {},
  },
  ".dropdown-item": {
    "@apply relative flex px-2 py-1 items-center text-gray-800 font-medium text-sm rounded whitespace-nowrap no-underline w-full hover:bg-gray-100 focus:ring focus:outline-none focus:bg-gray-100": {},
  },
  ".dropdown-item svg": {
    "@apply h-4 w-4 text-gray-500": {},
  },
  "a.dropdown-item, .prose a.dropdown-item": {
    "@apply no-underline": {},
  },
  ".dropdown-arrow": {
    marginTop: "-3px",
    "@apply text-current h-4 w-4 inline align-middle transition transform ml-1 -mr-1 flex-none": {},
  },
  ".btn-sm .dropdown-arrow": {
    "@apply ml-0": {},
  },
  ".btn-lg .dropdown-arrow": {
    "@apply h-6 w-6 !important": {},
  },
  ".dropdown-divide": {
    "@apply border-t border-gray-200 border-solid -ml-2 -mr-2 my-2": {},
  },
  ".dropdown-header": {
    "@apply px-2 py-2 text-gray-400 text-xs w-full uppercase tracking-wider font-bold leading-none": {},
  },
  ".prose .dropdown-header": {
    "@apply my-0": {},
  },
  ".dropdown-sm .dropdown-item": {
    "@apply text-xs": {},
  },
  ".dropdown-sm .dropdown-list": {
    "@apply w-40": {},
  },
  ".dropdown-sm .dropdown-header": {
    "@apply px-0": {},
  },
  ".dropdown-lg .dropdown-item": {
    "@apply text-lg": {},
  },
  ".dropdown-lg .dropdown-list": {
    "@apply w-64": {},
  },
});
