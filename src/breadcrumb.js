module.exports = Button = () => ({
  ".breadcrumb, .prose ul.breadcrumb": {
    "@apply flex flex-wrap list-none relative whitespace-no-wrap mt-0 mb-0": {},
  },
  ".breadcrumb-item": {
    "@apply text-gray-600": {},
  },
  ".breadcrumb-item a, .prose .breadcrumb-item a": {
    "@apply text-gray-900 no-underline": {},
  },
  ".breadcrumb-item, .breadcrumb-item a, .prose ul > li.breadcrumb-item": {
    "@apply text-base flex items-center mt-0 mb-0": {},
  },
  ".prose li.breadcrumb-item:first-child": {
    "@apply pl-0": {},
  },
  ".breadcrumb-sm .breadcrumb-item, .breadcrumb-sm .breadcrumb-item a": {
    "@apply text-xs !important": {},
  },
  ".breadcrumb-lg .breadcrumb-item, .breadcrumb-lg .breadcrumb-item a": {
    "@apply text-xl !important": {},
  },
  ".breadcrumb-item svg": {
    "@apply h-4 w-4 mr-1 flex-none": {},
  },
  ".breadcrumb-sm .breadcrumb-item svg": {
    "@apply h-3 w-3 !important": {},
  },
  ".breadcrumb-lg .breadcrumb-item svg": {
    "@apply h-5 w-5 !important": {},
  },
  ".breadcrumb-item + .breadcrumb-item": {
    "@apply pl-3": {},
  },
  ".prose ul > li.breadcrumb-item::before": {
    "@apply relative bg-transparent h-full w-full top-0 left-0": {},
  },
  ".breadcrumb-item + .breadcrumb-item::before": {
    "@apply inline-block pr-3 text-gray-600": {},
    content: "'/'",
  },
  ".breadcrumb-arrow .breadcrumb-item + .breadcrumb-item::before": {
    content: "'→' !important",
  },
  ".breadcrumb-arrowhead .breadcrumb-item + .breadcrumb-item::before": {
    content: "'>' !important",
  },
  ".breadcrumb-bullet .breadcrumb-item + .breadcrumb-item::before": {
    content: "'·' !important",
  },
  ".breadcrumb.breadcrumb-dark .breadcrumb-item a, .prose ul.breadcrumb.breadcrumb-dark .breadcrumb-item a": {
    "@apply text-white": {},
  },
});
