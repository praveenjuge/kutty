module.exports = Card = () => ({
  ".card, .prose a.card": {
    "@apply relative border border-gray-100 no-underline rounded flex flex-col min-w-0 bg-white transition": {},
  },
  "a.card": {
    "@apply hover:shadow-sm focus:shadow-sm": {},
  },
  ".prose a.card": {
    "@apply font-normal": {},
  },
  // Header
  ".card-header": {
    "@apply px-3 py-2 border-b border-gray-100 flex justify-between items-center": {},
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
    "@apply px-3 py-2 bg-gray-100 border-gray-100 rounded-b flex items-center": {},
  },
  ".card-footer .btn + .btn": {
    "@apply ml-1": {},
  },
});
