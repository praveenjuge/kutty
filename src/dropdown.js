module.exports = Dropdown = () => ({
  ".dropdown-list[aria-hidden='true']": {
    "@apply hidden": {},
  },
  ".dropdown-list.dropdown-animation": {
    "@apply opacity-100 scale-100 !important": {},
  },
  ".dropdown-list": {
    "@apply absolute z-10 shadow-md w-56 flex flex-col pl-0 mb-0 border border-solid border-gray-200 bg-white p-2 rounded transition ease-out duration-100 transform opacity-0 scale-90 origin-top-left": {},
  },
  ".dropdown-item": {
    "@apply relative flex px-2 py-1 items-center text-gray-800 font-medium text-base rounded whitespace-no-wrap no-underline w-full": {},
  },
  ".dropdown-item svg": {
    "@apply h-5 w-5 text-gray-600": {},
  },
  "a.dropdown-item, .prose a.dropdown-item": {
    "@apply no-underline": {},
  },
  "a.dropdown-item:hover": {
    "@apply bg-gray-200": {},
  },
  "a.dropdown-item:focus": {
    "@apply shadow-outline outline-none bg-gray-200": {},
  },
  ".dropdown-trigger": {
    "@apply inline-flex justify-center items-center appearance-none bg-no-repeat cursor-pointer pr-10": {},
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
    "-webkit-print-color-adjust": "exact",
    "color-adjust": "exact",
    backgroundPosition: "right 0.5rem center",
    backgroundSize: "1.5em 1.5em",
  },
  ".btn-sm.dropdown-trigger": {
    "@apply pr-8 !important": {},
  },
  ".btn-lg.dropdown-trigger": {
    "@apply pr-10 !important": {},
  },
  ".dropdown-divide": {
    "@apply border-t border-gray-300 border-solid -ml-2 -mr-2 my-2": {},
  },
  ".dropdown-header": {
    "@apply px-2 py-1 text-gray-600 text-xs w-full uppercase tracking-wider font-bold leading-none": {},
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
  ".dropdown-trigger.btn-sm svg": {
    "@apply h-4 w-4 !important": {},
  },
  ".dropdown-trigger.btn-lg svg": {
    "@apply h-6 w-6 !important": {},
  },
});
