module.exports = Sidebar = () => ({
  ".sidebar": {
    "@apply fixed top-0 bottom-0 left-0 z-40 h-full overflow-hidden outline-none w-full transition ease-out bg-white duration-100 overflow-y-auto transform origin-left -translate-x-full p-4 pb-20": {},
  },
  ".sidebar-item, .prose .sidebar-item": {
    "@apply relative flex px-3 py-2 items-start text-sm text-left mt-0 flex-col rounded leading-relaxed font-medium text-gray-700 no-underline": {},
    "&:hover, &:focus": {
      "@apply text-purple-700": {},
    },
  },
  ".sidebar-item.active": {
    "@apply text-purple-700 bg-purple-100": {},
  },
  "@screen md": {
    ".sidebar": {
      "@apply w-1/4 translate-x-0": {},
    },
    ".sidebar-item": {
      "@apply py-1": {},
    },
  },
  "@screen lg": {
    ".sidebar": {
      "@apply w-1/6": {},
    },
  },
});
