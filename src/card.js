module.exports = Card = () => ({
  ".card, .prose a.card": {
    "@apply relative border border-gray-200 no-underline rounded flex flex-col min-w-0 bg-white transition-shadow duration-150 ease-in": {},
  },
  "a.card:hover, a.card:focus": {
    "@apply shadow-sm": {},
  },
  // Header
  ".card-header": {
    "@apply px-3 py-2 border-b border-gray-200 flex justify-between items-center": {},
  },
  // Body
  ".card-body": {
    "@apply px-3 py-2 flex-auto max-h-full": {},
  },
  ".prose .card-body p, .prose .card-image": {
    "@apply my-0": {},
  },
  // Footer
  ".card-footer": {
    "@apply px-3 py-2 bg-gray-200 border-gray-200 rounded-b flex items-center": {},
  },
  ".card-footer .btn + .btn": {
    "@apply ml-1": {},
  },
});
