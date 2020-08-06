module.exports = Badge = () => ({
  ".badge, .prose a.badge": {
    "@apply text-center no-underline font-semibold relative overflow-hidden py-1 px-3 w-auto inline-flex items-center leading-none whitespace-no-wrap align-baseline text-xs rounded-full transition-colors duration-150 ease-in no-underline": {},
  },
  "a.badge:focus, a.badge:active": {
    "@apply shadow-outline outline-none": {},
  },
  ".badge .btn": {
    "@apply border-0 ml-1 -mr-1 !important": {},
  },
  ".badge-primary, .prose a.badge-primary": {
    "@apply bg-primary text-white": {},
  },
  "a.badge-primary:hover, a.badge-primary:focus": {
    "@apply bg-primary-dark": {},
  },
  ".badge-secondary, .prose a.badge-secondary": {
    "@apply bg-gray-600 text-white": {},
  },
  "a.badge-secondary:hover, a.badge-secondary:focus": {
    "@apply bg-gray-800": {},
  },
  ".badge-success, .prose a.badge-success": {
    "@apply bg-green-700 text-white": {},
  },
  "a.badge-success:hover, a.badge-success:focus": {
    "@apply bg-green-900": {},
  },
  ".badge-danger, .prose a.badge-danger": {
    "@apply bg-red-700 text-white": {},
  },
  "a.badge-danger:hover, a.badge-danger:focus": {
    "@apply bg-red-900": {},
  },
  ".badge-warning, .prose a.badge-warning": {
    "@apply bg-yellow-600 text-white": {},
  },
  "a.badge-warning:hover, a.badge-warning:focus": {
    "@apply bg-yellow-800": {},
  },
  ".badge-light, .prose a.badge-light": {
    "@apply bg-gray-200 text-gray-900": {},
  },
  "a.badge-light:hover, a.badge-light:focus": {
    "@apply bg-gray-400": {},
  },
  ".badge-dark, .prose a.badge-dark": {
    "@apply bg-gray-900 text-white": {},
  },
  "a.badge-dark:hover, a.badge-dark:focus": {
    "@apply bg-gray-700": {},
  },
  ".badge-light-primary, .prose a.badge-light-primary": {
    "@apply bg-primary-light text-primary": {},
  },
  "a.badge-light-primary:hover, a.badge-light-primary:focus": {
    "@apply bg-primary text-primary-light": {},
  },
  ".badge-light-secondary, .prose a.badge-light-secondary": {
    "@apply bg-gray-200 text-gray-700": {},
  },
  "a.badge-light-secondary:hover, a.badge-light-secondary:focus": {
    "@apply bg-gray-300 text-gray-900": {},
  },
  ".badge-light-success, .prose a.badge-light-success": {
    "@apply bg-green-200 text-green-800": {},
  },
  "a.badge-light-success:hover, a.badge-light-success:focus": {
    "@apply bg-green-300 text-green-900": {},
  },
  ".badge-light-danger, .prose a.badge-light-danger": {
    "@apply bg-red-200 text-red-700": {},
  },
  "a.badge-light-danger:hover, a.badge-light-danger:focus": {
    "@apply bg-red-300 text-red-900": {},
  },
  ".badge-light-warning, .prose a.badge-light-warning": {
    "@apply bg-yellow-200 text-yellow-800": {},
  },
  "a.badge-light-warning:hover, a.badge-light-warning:focus": {
    "@apply bg-yellow-300 text-yellow-900": {},
  },
});
