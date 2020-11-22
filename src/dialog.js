module.exports = Dialog = () => ({
  ".dialog": {
    "@apply fixed inset-0 z-40 h-full overflow-hidden outline-none w-full bg-black bg-opacity-50 cursor-pointer transition": {},
  },
  ".dialog-content": {
    "@apply relative z-50 bg-white mx-auto rounded-none my-0 h-screen cursor-auto flex flex-col": {},
  },
  ".dialog.dialog-full .dialog-content": {
    "@apply w-full rounded-none my-0 h-screen max-h-screen": {},
  },
  ".dialog-header": {
    "@apply px-4 py-3 border-b border-gray-100 flex items-center justify-between": {},
  },
  ".dialog-body": {
    "@apply p-4 relative flex-auto overflow-y-auto": {},
  },
  ".prose .dialog-content img": {
    "@apply my-0": {},
  },
  ".dialog-footer": {
    "@apply p-3 flex justify-end items-center bg-gray-100 rounded-b": {},
  },
  ".dialog-footer .btn + .btn": {
    "@apply ml-1": {},
  },
  ".scrollbar-measure": {
    "@apply absolute overflow-scroll": {},
    top: "-9999px",
    width: "50px",
    height: "50px",
  },
  // Drawer
  ".dialog.active .drawer-content": {
    "@apply translate-x-0 !important": {},
  },
  ".dialog:not(.dialog-right) .drawer-content": {
    "@apply mr-auto origin-left -translate-x-full": {},
  },
  ".dialog-right .drawer-content": {
    "@apply ml-auto origin-right translate-x-full": {},
  },
  ".drawer-content": {
    "@apply relative z-50 bg-white my-0 h-screen cursor-auto flex flex-col w-5/6 h-full max-h-full max-h-screen min-h-screen min-h-full transition transform": {},
  },
  ".dialog.dialog-full .drawer-content": {
    "@apply w-full my-0 h-screen max-h-screen": {},
  },
  // Screen Size
  "@screen sm": {
    ".dialog-content": {
      "@apply w-5/6 rounded my-8 h-auto": {},
      maxHeight: "calc(100% - 4rem)",
    },
  },
  "@screen md": {
    ".dialog-content, .drawer-content": {
      "@apply w-4/5": {},
    },
  },
  "@screen lg": {
    ".dialog-content": {
      "@apply w-1/2": {},
    },
    ".dialog.dialog-sm .dialog-content": {
      "@apply w-1/4": {},
    },
    ".dialog.dialog-lg .dialog-content": {
      "@apply w-4/5": {},
    },
    ".drawer-content": {
      "@apply w-1/4": {},
    },
    ".dialog.dialog-sm .drawer-content": {
      "@apply w-1/6": {},
    },
    ".dialog.dialog-lg .drawer-content": {
      "@apply w-2/3": {},
    },
  },
});
