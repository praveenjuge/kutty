module.exports = Forms = () => ({
  ".tag-label": {
    "@apply block": {},
  },
  ".tag-input": {
    "@apply mt-1 block w-full appearance-none bg-white border-2 border-solid border-gray-200 rounded px-3 py-2 text-base leading-normal transition-colors duration-150 ease-in shadow-none text-gray-900": {},
  },
  ".tag-icon": {
    "@apply relative": {},
  },
  ".tag-label .tag-icon svg": {
    "@apply h-full absolute inset-y-0 w-8 left-0 pl-3 pointer-events-none text-gray-400": {},
  },
  ".tag-label .tag-icon-r svg": {
    "@apply left-auto right-0 pr-3 pl-0": {},
  },
  ".tag-icon .tag-input, .tag-icon .tag-input-sm, .tag-icon .tag-input-lg": {
    "@apply pl-10": {},
  },
  ".tag-icon-r .tag-input, .tag-icon-r .tag-input-sm, .tag-icon-r .tag-input-lg": {
    "@apply pr-10": {},
  },
  ".tag-icon-r .tag-input": {
    "@apply pl-3": {},
  },
  ".tag-icon-r .tag-input-sm": {
    "@apply pl-2": {},
  },
  ".tag-icon-r .tag-input-lg": {
    "@apply pl-4": {},
  },
  ".tag-input-sm": {
    "@apply px-2 py-1 text-xs": {},
  },
  ".tag-input-lg": {
    "@apply px-4 py-3 text-xl": {},
  },
  ".tag-select-sm": {
    "@apply px-2 py-1 text-xs !important": {},
  },
  ".tag-select-lg": {
    "@apply px-4 py-3 text-xl !important": {},
  },
  ".tag-label-sm": {
    "@apply text-xs": {},
  },
  ".tag-label-lg": {
    "@apply text-xl": {},
  },
  ".tag-input:hover, .tag-select:hover, .tag-checkbox:hover, .tag-radio:hover, .tag-range:hover": {
    "@apply border-gray-600": {},
  },
  ".tag-input:focus, .tag-select:focus, .tag-checkbox:focus, .tag-radio:focus, .tag-range:focus": {
    "@apply outline-none border-purple-700": {},
  },
  ".tag-input::-webkit-input-placeholder": {
    "@apply text-gray-500": {},
  },
  ".tag-input::-moz-placeholder": {
    "@apply text-gray-500": {},
  },
  ".tag-input:-ms-input-placeholder": {
    "@apply text-gray-500": {},
  },
  ".tag-input::-ms-input-placeholder": {
    "@apply text-gray-500": {},
  },
  ".tag-input::placeholder": {
    "@apply text-gray-500": {},
  },
  ".tag-select": {
    "@apply mt-1 block w-full appearance-none bg-white border-2 border-solid border-gray-200 rounded pl-3 pr-10 py-2 text-base leading-normal transition-colors duration-150 ease-in shadow-none text-gray-900 bg-no-repeat cursor-pointer": {},
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
    "-webkit-print-color-adjust": "exact",
    "color-adjust": "exact",
    backgroundPosition: "right 0.5rem center",
    backgroundSize: "1.5em 1.5em",
  },
  ".tag-multiple": {
    "@apply h-auto pr-3 bg-auto": {},
    backgroundImage: "none",
  },
  ".tag-select::-ms-expand": {
    "@apply border-none text-gray-500": {},
  },
  "@media not print": {
    ".tag-select::-ms-expand": {
      "@apply hidden": {},
    },
  },
  "@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none)": {
    ".tag-select": {
      "@apply pr-3": {},
    },
  },
  ".tag-checkbox, .tag-radio": {
    "@apply bg-white text-purple-800 border-2 border-solid border-gray-400 appearance-none inline-block align-middle select-none flex-shrink-0 h-5 w-5 rounded transition-colors duration-150 ease-in  cursor-pointer -mt-1": {},
    "-webkit-print-color-adjust": "exact",
    "color-adjust": "exact",
    backgroundOrigin: "border-box",
  },
  ".tag-radio": {
    "@apply rounded-full !important": {},
  },
  "@media not print": {
    ".tag-checkbox::-ms-check, .tag-radio::-ms-check": {
      "@apply border text-transparent": {},
      background: "inherit",
      borderColor: "inherit",
      borderRadius: "inherit",
    },
  },
  ".tag-checkbox:checked, .tag-radio:checked, .tag-success .tag-checkbox:checked, .tag-success .tag-radio:checked, .tag-danger .tag-checkbox:checked, .tag-danger .tag-radio:checked": {
    "@apply border-transparent bg-current bg-center bg-no-repeat": {},
    backgroundSize: "100% 100%",
  },
  ".tag-checkbox:checked": {
    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
  },
  ".tag-radio:checked": {
    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
  },
  ".tag-range": {
    "@apply mt-1 block w-full appearance-none bg-white border-2 border-solid border-gray-200 rounded px-3 py-3 text-base leading-normal transition-colors duration-150 ease-in shadow-none text-gray-900": {},
  },
  ".tag-range::-webkit-slider-runnable-track": {
    "@apply w-full h-2 text-transparent cursor-pointer bg-gray-200 border-transparent rounded": {},
  },
  ".tag-range::-moz-range-track": {
    "@apply w-full h-2 text-transparent cursor-pointer bg-gray-200 border-transparent rounded": {},
  },
  ".tag-range::-ms-track": {
    "@apply w-full h-2 text-transparent cursor-pointer bg-gray-200 border-transparent rounded": {},
  },
  ".tag-range::-webkit-slider-thumb": {
    "@apply appearance-none transition-colors duration-150 ease-in rounded border-none bg-purple-700 -mt-2 h-6 w-4": {},
  },
  ".tag-range::-moz-range-thumb": {
    "@apply appearance-none transition-colors duration-150 ease-in rounded border-none bg-purple-700 -mt-2 h-6 w-4": {},
  },
  ".tag-range::-ms-thumb": {
    "@apply appearance-none transition-colors duration-150 ease-in rounded border-none bg-purple-700 -mt-2 h-6 w-4": {},
  },
  ".tag-range::-webkit-slider-thumb:active": {
    "@apply bg-purple-900": {},
  },
  ".tag-range::-moz-range-thumb:active": {
    "@apply bg-purple-900": {},
  },
  ".tag-range::-ms-thumb:active": {
    "@apply bg-purple-900": {},
  },
  ".tag-range:disabled::-webkit-slider-thumb": {
    "@apply bg-purple-200 cursor-not-allowed": {},
  },
  ".tag-range:disabled::-moz-range-thumb": {
    "@apply bg-purple-200 cursor-not-allowed": {},
  },
  ".tag-range:disabled::-ms-thumb": {
    "@apply bg-purple-200 cursor-not-allowed": {},
  },
  ".tag-range:disabled::-webkit-slider-runnable-track": {
    "@apply cursor-not-allowed": {},
  },
  ".tag-range:disabled::-moz-range-track": {
    "@apply cursor-not-allowed": {},
  },
  ".tag-range::-moz-focus-outer": {
    "@apply border-0": {},
  },
  ".tag-range::-ms-fill-lower": {
    "@apply rounded bg-gray-200": {},
  },
  ".tag-range::-ms-fill-upper": {
    "@apply rounded bg-gray-200 mr-3": {},
  },
  // Disabled
  ".tag-input:disabled, .tag-select:disabled, .tag-checkbox:disabled, .tag-radio:disabled, .tag-range:disabled": {
    "@apply bg-gray-400 border-gray-400 cursor-not-allowed opacity-100": {},
  },
  // Readonly
  ".tag-input[readonly]": {
    "@apply bg-gray-200 border-gray-200 cursor-default opacity-100": {},
  },
  // Validation
  ".tag-validation": {
    "@apply block text-sm mt-1": {},
  },
  ".tag-success .tag-validation": {
    "@apply text-green-700": {},
  },
  ".tag-danger .tag-validation": {
    "@apply text-red-700": {},
  },
  ".tag-success .tag-input, .tag-success .tag-select, .tag-success .tag-checkbox, .tag-success .tag-radio": {
    "@apply bg-green-100": {},
  },
  ".tag-danger .tag-input, .tag-danger .tag-select, .tag-danger .tag-checkbox, .tag-danger .tag-radio": {
    "@apply bg-red-100": {},
  },
  ".tag-append": {
    "@apply relative flex flex-wrap items-stretch w-full": {},
  },
  ".tag-append .tag-input": {
    "@apply relative flex-auto w-px mt-0 rounded-r-none": {},
  },
  ".tag-append .btn, .tag-append .tag-text": {
    "@apply -ml-1 rounded-l-none": {},
  },
  ".tag-append .tag-text": {
    "@apply bg-gray-200 rounded-r px-3 flex items-center": {},
  },
});
