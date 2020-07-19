module.exports = Card = () => ({
  ".card": {
    "@apply relative border border-solid border-gray-200 text-base rounded flex flex-col min-w-0 bg-white transition-shadow duration-150 ease-in": {},
  },
  "a.card:hover, a.card:focus": {
    "@apply shadow-sm": {},
  },
  ".prose a.card": {
    "@apply no-underline": {},
  },
  ".card-header": {
    "@apply px-3 py-2 border-b border-gray-200 flex justify-between items-center text-gray-800": {},
  },
  ".card-title": {
    "@apply font-semibold text-gray-900 text-base": {},
  },
  ".card-subtitle": {
    "@apply text-gray-600 text-sm": {},
  },
  ".card-body": {
    "@apply px-3 py-2 flex-auto max-h-full": {},
  },
  ".prose .card-body p": {
    "@apply my-0": {},
  },
  ".card-footer": {
    "@apply px-3 py-2 bg-gray-200 border-gray-200 rounded-b flex items-center": {},
  },
  ".card-footer-border": {
    "@apply bg-transparent border-t !important": {},
  },
  ".card-footer .btn + .btn": {
    "@apply ml-1": {},
  },
  ".card-image": {
    "@apply w-full": {},
  },
  ".prose .card-image": {
    "@apply my-0": {},
  },
  ".card-image-overlay": {
    "@apply px-3 py-2 absolute inset-0": {},
  },
  ".card-loading": {
    "@apply text-gray-500 text-center text-sm flex justify-center items-center": {},
  },
  ".card-success": {
    "@apply bg-green-100 text-green-900 border-green-200": {},
    ".card-footer": {
      "@apply bg-green-200": {},
    },
  },
  ".card-success .card-header, .card-success .card-footer, .prose .card-success .card-header, .prose .card-success .card-footer": {
    "@apply border-green-200 text-green-900": {},
  },
  ".card-success .card-title": {
    "@apply text-green-800": {},
  },
  ".card-danger": {
    "@apply bg-red-100 text-red-900 border-red-200": {},
    ".card-footer": {
      "@apply bg-red-200": {},
    },
  },
  ".card-danger .card-header, .card-danger .card-footer, .prose .card-danger .card-header, .prose .card-danger .card-footer": {
    "@apply border-red-200 text-red-900": {},
  },
  ".card-danger .card-title": {
    "@apply text-red-800": {},
  },
  ".card-dark": {
    "@apply bg-gray-900 text-gray-100 border-gray-800": {},
    ".card-footer": {
      "@apply bg-gray-800": {},
    },
  },
  ".card-dark .card-header, .card-dark .card-footer, .prose .card-dark .card-header, .prose .card-dark .card-footer": {
    "@apply border-gray-800 text-gray-100": {},
  },
  ".card-dark .card-title": {
    "@apply text-gray-100": {},
  },
});
