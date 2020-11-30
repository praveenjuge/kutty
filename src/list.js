module.exports = List = () => ({
  ".list, .prose .list": {
    "@apply flex flex-col pl-0 mb-0 mt-0": {},
  },
  ".list-item, .prose .list-item": {
    "@apply relative px-3 py-3 border border-solid border-gray-100 items-start text-sm font-normal mt-0 w-full transition": {},
    marginBottom: "-1px",
  },
  "a.list-item": {
    "@apply text-gray-900 hover:bg-gray-100 focus:ring focus:outline-none focus:z-10": {},
  },
  ".prose a.list-item": {
    "@apply no-underline font-normal": {},
  },
  ".list-item:first-child": {
    "@apply rounded-t": {},
  },
  ".list-item:last-child": {
    "@apply rounded-b mb-0": {},
  },
  ".prose .list-item::before": {
    content: "none",
  },
  // Active
  ".list-item.list-active": {
    "@apply bg-primary text-white": {},
  },
  "a.list-item.list-active": {
    "@apply hover:bg-primary-dark": {},
  },
  // Disabled
  ".list-disabled, a.list-item.list-disabled": {
    "@apply bg-gray-100 text-gray-500 cursor-default focus:ring-0": {},
  },
  // Flush
  ".list-flush .list-item": {
    "@apply border-l-0 border-r-0": {},
  },
  ".list-flush .list-item:first-child": {
    "@apply border-0": {},
  },
  ".list-flush .list-item:last-child": {
    "@apply border-b-0": {},
  },
});
