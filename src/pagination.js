module.exports = Pagination = () => ({
  ".pagination": {
    display: "flex",
    alignItems: "center",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    listStyleType: "none",
    paddingLeft: "0px",
  },
  ".pagination-link, .pagination-disabled, .prose a.pagination-link, .prose .pagination-disabled": {
    borderRadius: "0.25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 500,
    height: "2.5rem",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    marginLeft: "1px",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    "--tw-text-opacity": "1",
    color: "rgba(30, 41, 59, var(--tw-text-opacity))",
    textDecoration: "none",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
  },
  ".pagination-link:hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(226, 232, 240, var(--tw-bg-opacity))",
  },
  ".pagination-link:focus": {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    zIndex: 10,
  },
  ".pagination-link:first-child, .pagination-disabled:first-child": {
    marginLeft: "0px",
  },
  ".pagination-disabled": {
    "--tw-bg-opacity": "1 !important",
    backgroundColor: "rgba(226, 232, 240, var(--tw-bg-opacity)) !important",
    cursor: "default !important",
    pointerEvents: "none !important",
    "--tw-text-opacity": "1 !important",
    color: "rgba(51, 65, 85, var(--tw-text-opacity)) !important",
  },
  ".pagination-disabled:focus": {
    outline: "2px solid transparent !important",
    outlineOffset: "2px !important",
  },
  // Active
  ".pagination-active, .prose a.pagination-active": {
    "@apply bg-primary hover:bg-primary-dark focus:bg-primary-dark": {},
    "--tw-text-opacity": "1",
    color: "rgba(255, 255, 255, var(--tw-text-opacity))",
  },
  // Sizes
  ".pagination-sm .pagination-link, .pagination-sm .pagination-disabled, .prose .pagination-sm a.pagination-link, .prose .pagination-sm .pagination-disabled": {
    height: "1.5rem",
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  ".pagination-lg .pagination-link, .pagination-lg .pagination-disabled, .prose .pagination-lg a.pagination-link, .prose .pagination-lg .pagination-disabled": {
    height: "3rem",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
});
