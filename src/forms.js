module.exports = Forms = () => ({
  ".form-input": {
    "@apply block w-full appearance-none bg-white border border-solid border-gray-200 rounded px-3 py-2 text-sm leading-normal transition shadow-none text-gray-900 placeholder-gray-400": {},
    minHeight: "39px",
  },
  // Hover and Focus
  ".form-input, .form-select, .form-checkbox, .form-radio": {
    "@apply hover:border-gray-600 focus:outline-none focus:border-primary": {},
  },
  // Sizes
  ".form-input-sm": {
    "@apply px-2 py-1 text-xs": {},
    minHeight: "28px",
  },
  ".form-input-lg": {
    "@apply px-4 py-3 text-xl": {},
    minHeight: "56px",
  },
  ".form-select-sm": {
    "@apply pl-2 pr-8 py-1 text-xs !important": {},
    minHeight: "28px",
  },
  ".form-select-lg": {
    "@apply pl-4 pr-10 py-3 text-xl !important": {},
    minHeight: "56px",
  },
  // Select, Checkbox, Radio
  ".form-select": {
    "@apply block w-full appearance-none bg-white border border-solid border-gray-200 rounded pl-3 pr-10 py-2 text-sm leading-normal transition shadow-none text-gray-900 bg-no-repeat cursor-pointer": {},
    "-webkit-print-color-adjust": "exact",
    "color-adjust": "exact",
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
    backgroundPosition: "right 0.5rem center",
    backgroundSize: "1.5em 1.5em",
  },
  ".form-checkbox, .form-radio": {
    "@apply bg-white text-primary border border-solid border-gray-200 appearance-none inline-flex align-middle select-none flex-shrink-0 h-4 w-4 rounded transition cursor-pointer": {},
    "-webkit-print-color-adjust": "exact",
    "color-adjust": "exact",
    backgroundOrigin: "border-box",
  },
  ".form-radio": {
    "@apply rounded-full !important": {},
  },
  ".form-select[multiple]": {
    "@apply h-auto pr-3 bg-auto": {},
    backgroundImage: "none",
  },
  ".form-select::-ms-expand": {
    "@apply border-none text-gray-500": {},
  },
  "@media not print": {
    ".form-select::-ms-expand": {
      "@apply hidden": {},
    },
  },
  "@media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none)": {
    ".form-select": {
      "@apply pr-3": {},
    },
  },
  "@media not print": {
    ".form-checkbox::-ms-check, .form-radio::-ms-check": {
      "@apply border text-transparent": {},
      background: "inherit",
      borderColor: "inherit",
      borderRadius: "inherit",
    },
  },
  ".form-checkbox:checked, .form-radio:checked": {
    "@apply border-transparent bg-current bg-center bg-no-repeat": {},
    backgroundSize: "100% 100%",
  },
  ".form-checkbox:checked": {
    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
  },
  ".form-radio:checked": {
    backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
  },
  // Range
  ".form-input::-webkit-slider-runnable-track": {
    "@apply w-full h-2 text-transparent cursor-pointer bg-gray-100 border-transparent rounded": {},
  },
  ".form-input::-moz-range-track": {
    "@apply w-full h-2 text-transparent cursor-pointer bg-gray-100 border-transparent rounded": {},
  },
  ".form-input::-ms-track": {
    "@apply w-full h-2 text-transparent cursor-pointer bg-gray-100 border-transparent rounded": {},
  },
  ".form-input::-webkit-slider-thumb": {
    "@apply appearance-none rounded border-none bg-primary -mt-2 h-6 w-4": {},
  },
  ".form-input::-moz-range-thumb": {
    "@apply appearance-none rounded border-none bg-primary -mt-2 h-6 w-4": {},
  },
  ".form-input::-ms-thumb": {
    "@apply appearance-none rounded border-none bg-primary -mt-2 h-6 w-4": {},
  },
  ".form-input::-moz-focus-outer": {
    "@apply border-0": {},
  },
  ".form-input::-ms-fill-lower": {
    "@apply rounded bg-gray-200": {},
  },
  ".form-input::-ms-fill-upper": {
    "@apply rounded bg-gray-200 mr-3": {},
  },
  // Disabled
  ".form-input:disabled, .form-select:disabled, .form-checkbox:disabled, .form-radio:disabled, .form-input:disabled": {
    "@apply bg-gray-300 border-gray-300 cursor-not-allowed opacity-100": {},
  },
  // Readonly
  ".form-input[readonly]": {
    "@apply bg-gray-100 border-gray-100 cursor-default opacity-100": {},
  },
  // Append
  ".form-append": {
    "@apply flex flex-wrap items-stretch w-full": {},
  },
  ".form-append .form-input": {
    "@apply flex-auto w-px rounded-r-none": {},
  },
  ".form-append .btn": {
    "@apply -ml-1 rounded-l-none": {},
  },
  // Icons
  ".form-icon": {
    "@apply relative": {},
  },
  ".form-icon svg": {
    "@apply h-full absolute inset-y-0 w-8 left-0 pl-3 pointer-events-none text-gray-400": {},
  },
  ".form-icon-r svg": {
    "@apply left-auto right-0 pr-3 pl-0": {},
  },
  ".form-icon .form-input, .form-icon .form-input-sm, .form-icon .form-input-lg": {
    "@apply pl-10": {},
  },
  ".form-icon-r .form-input, .form-icon-r .form-input-sm, .form-icon-r .form-input-lg": {
    "@apply pr-10": {},
  },
  ".form-icon-r .form-input": {
    "@apply pl-3": {},
  },
  ".form-icon-r .form-input-sm": {
    "@apply pl-2": {},
  },
  ".form-icon-r .form-input-lg": {
    "@apply pl-4": {},
  },
});
