module.exports = Button = (styles) => ({
  ".btn, .prose a.btn": {
    "@apply select-none text-center no-underline align-middle font-medium relative overflow-hidden transition-colors duration-150 ease-in border-2 border-solid inline-block py-1 px-4 text-base rounded-md w-auto opacity-100 pointer-events-auto cursor-pointer transform scale-100": {},
    "&:focus": {
      "@apply shadow-outline outline-none": {},
    },
    "&:active": {
      "@apply scale-95 shadow-none outline-none": {},
    },
  },
  ".btn-primary, .prose a.btn-primary": {
    "@apply bg-primary border-primary text-white": {},
    "&:hover, &:focus": {
      "@apply bg-primary-dark border-primary-dark": {},
    },
  },
  ".btn-secondary, .prose a.btn-secondary": {
    "@apply bg-gray-600 border-gray-600 text-white": {},
    "&:hover, &:focus": {
      "@apply bg-gray-800 border-gray-800": {},
    },
  },
  ".btn-success, .prose a.btn-success": {
    "@apply bg-green-700 border-green-700 text-white": {},
    "&:hover, &:focus": {
      "@apply bg-green-900 border-green-900": {},
    },
  },
  ".btn-danger, .prose a.btn-danger": {
    "@apply bg-red-700 border-red-700 text-white": {},
    "&:hover, &:focus": {
      "@apply bg-red-900 border-red-900": {},
    },
  },
  ".btn-warning, .prose a.btn-warning": {
    "@apply bg-yellow-600 border-yellow-600 text-white": {},
    "&:hover, &:focus": {
      "@apply bg-yellow-800 border-yellow-800": {},
    },
  },
  ".btn-light, .prose a.btn-light": {
    "@apply bg-gray-200 border-gray-200 text-gray-900": {},
    "&:hover, &:focus": {
      "@apply bg-gray-400 border-gray-400": {},
    },
  },
  ".btn-dark, .prose a.btn-dark": {
    "@apply bg-gray-900 border-gray-900 text-white": {},
    "&:hover, &:focus": {
      "@apply bg-gray-700 border-gray-700": {},
    },
  },
  ".btn-white, .prose a.btn-white": {
    "@apply bg-white border-white text-gray-900": {},
    "&:hover, &:focus": {
      "@apply bg-gray-200 border-gray-200": {},
    },
  },
  ".btn-link, .prose a.btn-link": {
    "@apply bg-transparent border-transparent text-primary-dark": {},
    "&:hover, &:focus": {
      "@apply bg-gray-300 border-gray-300": {},
    },
  },
  ".btn-light-primary, .prose a.btn-light-primary": {
    "@apply bg-primary-light border-primary-light text-primary": {},
    "&:hover, &:focus": {
      "@apply bg-primary border-primary text-primary-light": {},
    },
  },
  ".btn-light-secondary, .prose a.btn-light-secondary": {
    "@apply bg-gray-200 border-gray-200 text-gray-700": {},
    "&:hover, &:focus": {
      "@apply bg-gray-300 border-gray-300 text-gray-900": {},
    },
  },
  ".btn-light-success, .prose a.btn-light-success": {
    "@apply bg-green-200 border-green-200 text-green-800": {},
    "&:hover, &:focus": {
      "@apply bg-green-300 border-green-300 text-green-900": {},
    },
  },
  ".btn-light-danger, .prose a.btn-light-danger": {
    "@apply bg-red-200 border-red-200 text-red-700": {},
    "&:hover, &:focus": {
      "@apply bg-red-300 border-red-300 text-red-900": {},
    },
  },
  ".btn-light-warning, .prose a.btn-light-warning": {
    "@apply bg-yellow-200 border-yellow-200 text-yellow-800": {},
    "&:hover, &:focus": {
      "@apply bg-yellow-300 border-yellow-300 text-yellow-900": {},
    },
  },
  ".btn-light-link, .prose a.btn-light-link": {
    "@apply bg-transparent border-transparent text-primary-light": {},
    "&:hover, &:focus": {
      "@apply bg-gray-200 border-gray-200 text-primary": {},
    },
  },
  ".btn-outline-primary, .prose a.btn-outline-primary": {
    "@apply text-primary border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply bg-primary-dark border-primary-dark text-white": {},
    },
  },
  ".btn-outline-secondary, .prose a.btn-outline-secondary": {
    "@apply text-gray-600 border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply bg-gray-800 border-gray-800 text-white": {},
    },
  },
  ".btn-outline-success, .prose a.btn-outline-success": {
    "@apply text-green-700 border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply bg-green-900 border-green-900 text-white": {},
    },
  },
  ".btn-outline-danger, .prose a.btn-outline-danger": {
    "@apply text-red-700 border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply border-red-900 text-white bg-red-900": {},
    },
  },
  ".btn-outline-warning, .prose a.btn-outline-warning": {
    "@apply text-yellow-600 border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply border-yellow-800 text-white bg-yellow-800": {},
    },
  },
  ".btn-outline-light, .prose a.btn-outline-light": {
    "@apply text-gray-200 border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply border-gray-400 text-gray-900 bg-gray-400": {},
    },
  },
  ".btn-outline-dark, .prose a.btn-outline-dark": {
    "@apply text-gray-900 border-current bg-transparent": {},
    "&:hover, &:focus": {
      "@apply border-gray-900 text-white bg-gray-900": {},
    },
  },
  ".btn-outline-link, .prose a.btn-outline-link": {
    "@apply border-transparent text-primary-dark bg-transparent": {},
    "&:hover, &:focus": {
      "@apply border-gray-300": {},
    },
  },
  ".btn:disabled": {
    "@apply opacity-25 pointer-events-none cursor-default !important": {},
  },
  ".btn-loading": {
    "@apply opacity-75 pointer-events-none cursor-default !important": {},
  },
  ".btn-loading .spinner": {
    marginTop: "-3px",
  },
  // Sizes
  ".btn.btn-xs, .prose .btn.btn-xs": {
    "@apply py-0 px-1 text-xs": {},
  },
  ".btn.btn-sm, .prose .btn.btn-sm": {
    "@apply py-1 px-2 text-sm": {},
  },
  ".btn.btn-lg, .prose .btn.btn-lg": {
    "@apply py-2 px-5 text-lg": {},
  },
  ".btn.btn-xl, .prose .btn.btn-xl": {
    "@apply py-3 px-6 text-xl": {},
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
    "@apply relative inline-flex align-middle": {},
  },
  ".btn-group .btn": {
    "@apply rounded-none": {},
    "&:active, &:focus": {
      "@apply z-10": {},
    },
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
    borderColor: "#1da1f2",
    "&:hover,&:focus": {
      backgroundColor: "#0c80c7",
      borderColor: "#0c80c7",
    },
  },
  ".btn-google, .prose a.btn-google": {
    "@apply text-white": {},
    backgroundColor: "#4285f4",
    borderColor: "#4285f4",
    "&:hover,&:focus": {
      backgroundColor: "#1d61d2",
      borderColor: "#1d61d2",
    },
  },
  ".btn-youtube, .prose a.btn-youtube": {
    "@apply text-white": {},
    backgroundColor: "#ff0000",
    borderColor: "#ff0000",
    "&:hover,&:focus": {
      backgroundColor: "#b10505",
      borderColor: "#b10505",
    },
  },
  ".btn-instagram, .prose a.btn-instagram": {
    "@apply text-white": {},
    backgroundColor: "#e1306c",
    borderColor: "#e1306c",
    "&:hover,&:focus": {
      backgroundColor: "#bf134d",
      borderColor: "#bf134d",
    },
  },
  ".btn-github, .prose a.btn-github": {
    "@apply text-white": {},
    backgroundColor: "#333",
    borderColor: "#333",
    "&:hover,&:focus": {
      backgroundColor: "#000",
      borderColor: "#000",
    },
  },
  ".btn-twitch, .prose a.btn-twitch": {
    "@apply text-white": {},
    backgroundColor: "#6441a5",
    borderColor: "#6441a5",
    "&:hover,&:focus": {
      backgroundColor: "#3c1f71",
      borderColor: "#3c1f71",
    },
  },
  ".btn-slack, .prose a.btn-slack": {
    "@apply text-white": {},
    backgroundColor: "#611f69",
    borderColor: "#611f69",
    "&:hover,&:focus": {
      backgroundColor: "#3e0d44",
      borderColor: "#3e0d44",
    },
  },
  ".btn-linkedin, .prose a.btn-linkedin": {
    "@apply text-white": {},
    backgroundColor: "#0077b5",
    borderColor: "#0077b5",
    "&:hover,&:focus": {
      backgroundColor: "#044d73",
      borderColor: "#044d73",
    },
  },
  ".btn-facebook, .prose a.btn-facebook": {
    "@apply text-white": {},
    backgroundColor: "#3b5998",
    borderColor: "#3b5998",
    "&:hover,&:focus": {
      backgroundColor: "#1c3467",
      borderColor: "#1c3467",
    },
  },
});
