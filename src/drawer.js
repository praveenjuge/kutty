module.exports = Drawer = () => ({
  ".drawer": {
    "@apply fixed inset-0 z-40 h-full overflow-hidden outline-none w-full bg-black bg-opacity-50 cursor-pointer transition ease-out duration-100 opacity-0": {},
  },
  ".drawer[aria-hidden='true']": {
    "@apply hidden": {},
  },
  ".drawer.drawer-animation": {
    "@apply opacity-100 !important": {},
  },
  ".drawer.drawer-animation .drawer-content": {
    "@apply translate-x-0 !important": {},
  },
  ".drawer:not(.drawer-right) .drawer-content": {
    "@apply mr-auto origin-left -translate-x-full": {},
  },
  ".drawer-right .drawer-content": {
    "@apply ml-auto origin-right translate-x-full": {},
  },
  ".drawer-content": {
    "@apply relative z-50 bg-white my-0 h-screen cursor-auto flex flex-col transition ease-out duration-100 transform w-5/6 h-full max-h-full max-h-screen min-h-screen min-h-full": {},
  },
  "@screen md": {
    ".drawer-content": {
      "@apply w-4/5": {},
    },
  },
  "@screen lg": {
    ".drawer-content": {
      "@apply w-1/4": {},
    },
    ".drawer.drawer-sm .drawer-content": {
      "@apply w-1/6": {},
    },
    ".drawer.drawer-lg .drawer-content": {
      "@apply w-2/3": {},
    },
  },
  ".drawer.drawer-full .drawer-content": {
    "@apply w-full my-0 h-screen max-h-screen": {},
  },
  ".drawer-header .drawer-close": {
    "@apply absolute p-0": {},
    top: "10px",
    right: "10px",
  },
  ".drawer-header": {
    "@apply px-4 py-3 border-b border-gray-200": {},
  },
  ".drawer-body": {
    "@apply p-4 relative flex-auto overflow-y-auto": {},
  },
  ".prose .drawer-content img": {
    "@apply my-0": {},
  },
  ".drawer-footer": {
    "@apply p-3 flex justify-end items-center bg-gray-200 rounded-b": {},
  },
  ".drawer-footer .btn + .btn": {
    "@apply ml-1": {},
  },
  ".scrollbar-measure": {
    "@apply absolute overflow-scroll": {},
    top: "-9999px",
    width: "50px",
    height: "50px",
  },
});
