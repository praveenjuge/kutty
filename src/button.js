module.exports = Button = (styles) => ({
  ".btn, .prose a.btn": {
    "@apply inline-block text-center no-underline align-middle font-medium rounded-md border-current pointer-events-auto cursor-pointer select-none transform scale-100 transition focus:ring focus:outline-none": {},
    fontSize: "0.95rem",
    paddingTop: "0.45rem",
    paddingBottom: "0.45rem",
    paddingLeft: "0.85rem",
    paddingRight: "0.85rem",
    willChange: "transform",
    backfaceVisibility: "hidden",
    "&:active": {
      "@apply scale-95 ring-0": {},
    },
  },
  // Sizes
  ".btn.btn-xs, .prose .btn.btn-xs": {
    "@apply text-xs": {},
    paddingTop: "0.15rem",
    paddingBottom: "0.15rem",
    paddingLeft: "0.4rem",
    paddingRight: "0.4rem",
  },
  ".btn.btn-sm, .prose .btn.btn-sm": {
    "@apply text-sm": {},
    paddingTop: "0.3rem",
    paddingBottom: "0.3rem",
    paddingLeft: "0.65rem",
    paddingRight: "0.65rem",
  },
  ".btn.btn-lg, .prose .btn.btn-lg": {
    "@apply text-lg": {},
    paddingTop: "0.6rem",
    paddingBottom: "0.6rem",
    paddingLeft: "1.4rem",
    paddingRight: "1.4rem",
  },
  ".btn.btn-xl, .prose .btn.btn-xl": {
    "@apply text-xl": {},
    paddingTop: "0.9rem",
    paddingBottom: "0.9rem",
    paddingLeft: "1.65rem",
    paddingRight: "1.65rem",
  },
  // Colors
  ".btn-primary, .prose a.btn-primary": {
    "@apply bg-primary text-white hover:bg-primary-dark": {},
  },
  ".btn-secondary, .prose a.btn-secondary": {
    "@apply bg-gray-500 text-white hover:bg-gray-700": {},
  },
  ".btn-success, .prose a.btn-success": {
    "@apply bg-green-700 text-white hover:bg-green-900": {},
  },
  ".btn-danger, .prose a.btn-danger": {
    "@apply bg-red-700 text-white hover:bg-red-900": {},
  },
  ".btn-warning, .prose a.btn-warning": {
    "@apply bg-yellow-600 text-white hover:bg-yellow-800": {},
  },
  ".btn-light, .prose a.btn-light": {
    "@apply bg-gray-100 text-gray-800 hover:bg-gray-300": {},
  },
  ".btn-dark, .prose a.btn-dark": {
    "@apply bg-gray-900 text-white hover:bg-gray-700": {},
  },
  ".btn-white, .prose a.btn-white": {
    "@apply bg-white text-gray-900 hover:bg-gray-200": {},
  },
  ".btn-link, .prose a.btn-link": {
    "@apply bg-transparent text-primary-dark hover:bg-gray-300": {},
  },
  ".btn-light-primary, .prose a.btn-light-primary": {
    "@apply bg-primary-light text-primary hover:bg-primary hover:text-primary-light": {},
  },
  ".btn-light-secondary, .prose a.btn-light-secondary": {
    "@apply bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900": {},
  },
  ".btn-light-success, .prose a.btn-light-success": {
    "@apply bg-green-200 text-green-800 hover:bg-green-300 hover:text-green-900": {},
  },
  ".btn-light-danger, .prose a.btn-light-danger": {
    "@apply bg-red-200 text-red-700 hover:bg-red-300 hover:text-red-900": {},
  },
  ".btn-light-warning, .prose a.btn-light-warning": {
    "@apply bg-yellow-200 text-yellow-800 hover:bg-yellow-300 hover:text-yellow-900": {},
  },
  ".btn-light-link, .prose a.btn-light-link": {
    "@apply bg-transparent text-primary-light hover:bg-gray-200 hover:text-primary": {},
  },
  ".btn-outline-primary, .prose a.btn-outline-primary": {
    "@apply text-primary border hover:bg-primary-dark hover:border-primary-dark hover:text-white": {},
  },
  ".btn-outline-secondary, .prose a.btn-outline-secondary": {
    "@apply text-gray-600 border hover:bg-gray-800 hover:border-gray-800 hover:text-white": {},
  },
  ".btn-outline-success, .prose a.btn-outline-success": {
    "@apply text-green-700 border hover:bg-green-900 hover:border-green-900 hover:text-white": {},
  },
  ".btn-outline-danger, .prose a.btn-outline-danger": {
    "@apply text-red-700 border hover:border-red-900 hover:text-white hover:bg-red-900": {},
  },
  ".btn-outline-warning, .prose a.btn-outline-warning": {
    "@apply text-yellow-600 border hover:border-yellow-800 hover:text-white hover:bg-yellow-800": {},
  },
  ".btn-outline-light, .prose a.btn-outline-light": {
    "@apply text-gray-200 border hover:border-gray-400 hover:text-gray-900 hover:bg-gray-400": {},
  },
  ".btn-outline-dark, .prose a.btn-outline-dark": {
    "@apply text-gray-900 border hover:border-gray-900 hover:text-white hover:bg-gray-900": {},
  },
  ".btn-outline-link, .prose a.btn-outline-link": {
    "@apply border-transparent text-primary-dark border hover:border-gray-300": {},
  },
  // Disabled, Loading
  ".btn:disabled": {
    "@apply opacity-25 pointer-events-none cursor-not-allowed !important": {},
  },
  ".btn-loading": {
    "@apply opacity-75 pointer-events-none cursor-wait !important": {},
  },
  ".btn-loading .spinner": {
    marginTop: "-3px",
  },
  // Icons
  ".btn.btn-icon": {
    "@apply inline-flex justify-center items-center": {},
  },
  ".btn-icon.btn-xs": {
    "@apply px-0": {},
  },
  ".btn-icon.btn-xs svg": {
    "@apply h-4 w-4": {},
  },
  ".btn-icon.btn-sm svg": {
    "@apply h-4 w-4": {},
  },
  ".btn-icon svg": {
    "@apply h-5 w-5": {},
  },
  ".btn-icon.btn-lg svg": {
    "@apply h-6 w-6": {},
  },
  ".btn-icon.btn-xl svg": {
    "@apply h-8 w-8": {},
  },
  // Button List
  ".btn-list": {
    "@apply -mb-2": {},
  },
  ".btn-list .btn": {
    "@apply mb-2": {},
  },
  ".btn-list > .btn:not(:last-child)": {
    "@apply mr-1": {},
  },
  // Button Group
  ".btn-group": {
    "@apply inline-flex align-middle": {},
  },
  ".btn-group .btn": {
    "@apply rounded-none focus:z-10": {},
  },
  ".btn-group .btn:first-child": {
    "@apply rounded-l": {},
  },
  ".btn-group .btn:last-child": {
    "@apply rounded-r": {},
  },
  // Brand Colors
  ".btn-twitter, .prose a.btn-twitter": {
    "@apply text-white": {},
    backgroundColor: "#1da1f2",
    "&:hover": {
      backgroundColor: "#0c80c7",
    },
  },
  ".btn-google, .prose a.btn-google": {
    "@apply text-white": {},
    backgroundColor: "#4285f4",
    "&:hover": {
      backgroundColor: "#1d61d2",
    },
  },
  ".btn-instagram, .prose a.btn-instagram": {
    "@apply text-white": {},
    backgroundColor: "#e1306c",
    "&:hover": {
      backgroundColor: "#bf134d",
    },
  },
  ".btn-github, .prose a.btn-github": {
    "@apply text-white": {},
    backgroundColor: "#333",
    "&:hover": {
      backgroundColor: "#000",
    },
  },
  ".btn-facebook, .prose a.btn-facebook": {
    "@apply text-white": {},
    backgroundColor: "#3b5998",
    "&:hover": {
      backgroundColor: "#1c3467",
    },
  },
});
