module.exports = Dialog = () => ({
  ".dialog": {
    "@apply fixed inset-0 z-40 h-full overflow-hidden outline-none w-full bg-black bg-opacity-50 cursor-pointer transition ease-out duration-100 transform scale-105 origin-center": {},
  },
  ".dialog-content": {
    "@apply relative z-50 bg-white mx-auto rounded-none my-0 h-screen cursor-auto flex flex-col": {},
  },
  "@screen sm": {
    ".dialog-content": {
      "@apply w-5/6 rounded my-8 h-auto": {},
      maxHeight: "calc(100% - 4rem)",
    },
  },
  "@screen md": {
    ".dialog-content": {
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
  },
  ".dialog.dialog-full .dialog-content": {
    "@apply w-full rounded-none my-0 h-screen max-h-screen": {},
  },
  ".dialog-header .dialog-close": {
    "@apply absolute p-0": {},
    top: "10px",
    right: "10px",
  },
  ".dialog-header": {
    "@apply px-4 py-3 border-b border-gray-200": {},
  },
  ".dialog-body": {
    "@apply p-4 relative flex-auto overflow-y-auto": {},
  },
  ".prose .dialog-content img": {
    "@apply my-0": {},
  },
  ".dialog-footer": {
    "@apply p-3 flex justify-end items-center bg-gray-200 rounded-b": {},
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
});
