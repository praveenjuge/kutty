module.exports = List = () => ({
  ".list, .prose .list": {
    "@apply flex flex-col pl-0 mb-0 mt-0": {},
  },
  ".list-item, .prose .list-item": {
    "@apply relative flex px-3 py-3 border border-solid border-gray-200 items-start text-gray-800  font-normal mt-0 flex-col": {},
    marginBottom: "-1px",
  },
  ".list-item.list-active": {
    "@apply bg-purple-700 text-white": {},
  },
  ".prose .list-item::before": {
    content: "none",
  },
  ".prose a.list-item": {
    "@apply no-underline": {},
  },
  "a.list-item.list-active:hover": {
    "@apply bg-purple-900": {},
  },
  "a.list-item": {
    "@apply text-gray-800 no-underline font-normal": {},
  },
  ".list-disabled, a.list-item.list-disabled": {
    "@apply bg-gray-200 text-gray-500 cursor-default": {},
  },
  ".list-disabled:focus, a.list-item.list-disabled:focus": {
    "@apply shadow-none": {},
  },
  "a.list-item": {
    "@apply transition-colors duration-150 ease-in text-gray-900": {},
    "&:hover": {
      "@apply bg-gray-200": {},
    },
    "&:focus": {
      "@apply shadow-outline outline-none": {},
    },
  },
  ".list-item:first-child": {
    "@apply rounded-t": {},
  },
  ".list-item:last-child": {
    "@apply rounded-b mb-0": {},
  },
  ".list-flush .list-item": {
    "@apply border-l-0 border-r-0": {},
  },
  ".list-flush .list-item:first-child": {
    "@apply border-0": {},
  },
  ".list-flush .list-item:last-child": {
    "@apply border-b-0": {},
  },
  ".list-options .list-item": {
    "@apply justify-between flex-row": {},
  },
  ".list-item.list-primary": {
    "@apply bg-purple-200 text-purple-700": {},
  },
  ".list-item.list-success": {
    "@apply bg-green-200 text-green-700": {},
  },
  ".list-item.list-danger": {
    "@apply bg-red-200 text-red-700": {},
  },
  ".list-item.list-warning": {
    "@apply bg-yellow-200 text-yellow-700": {},
  },
  ".list-item.list-dark": {
    "@apply bg-gray-800 text-white": {},
  },
});
