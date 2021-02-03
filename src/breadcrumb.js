module.exports = Button = () => ({
  ".breadcrumb, .prose ul.breadcrumb": {
    display: "flex",
    flexWrap: "wrap",
    listStyleType: "none",
    marginTop: "0px",
    marginBottom: "0px",
    position: "relative",
    whiteSpace: "nowrap",
  },
  ".breadcrumb-item": {
    fontWeight: 400,
    "--tw-text-opacity": "1",
    color: "rgba(100, 116, 139, var(--tw-text-opacity))",
  },
  ".breadcrumb-item a, .prose .breadcrumb-item a": {
    fontWeight: 400,
    "--tw-text-opacity": "1",
    color: "rgba(15, 23, 42, var(--tw-text-opacity))",
    textDecoration: "none",
  },
  ".breadcrumb-item, .breadcrumb-item a, .prose ul > li.breadcrumb-item": {
    display: "flex",
    alignItems: "center",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    marginTop: "0px",
    marginBottom: "0px",
  },
  ".prose li.breadcrumb-item:first-child": { paddingLeft: "0px" },
  ".breadcrumb-sm .breadcrumb-item, .breadcrumb-sm .breadcrumb-item a": {
    fontSize: "0.75rem !important",
    lineHeight: "1rem !important",
  },
  ".breadcrumb-lg .breadcrumb-item, .breadcrumb-lg .breadcrumb-item a": {
    fontSize: "1.25rem !important",
    lineHeight: "1.75rem !important",
  },
  ".breadcrumb-item svg": {
    flex: "none",
    height: "1rem",
    marginRight: "0.25rem",
    width: "1rem",
  },
  ".breadcrumb-sm .breadcrumb-item svg": {
    height: "0.75rem !important",
    width: "0.75rem !important",
  },
  ".breadcrumb-lg .breadcrumb-item svg": {
    height: "1.25rem !important",
    width: "1.25rem !important",
  },
  ".breadcrumb-item + .breadcrumb-item": { paddingLeft: "0.75rem" },
  ".prose ul > li.breadcrumb-item::before": {
    backgroundColor: "transparent",
    height: "100%",
    position: "relative",
    top: "0px",
    left: "0px",
    width: "100%",
  },
  ".breadcrumb-item + .breadcrumb-item::before": {
    display: "inline-block",
    paddingRight: "0.75rem",
    "--tw-text-opacity": "1",
    color: "rgba(100, 116, 139, var(--tw-text-opacity))",
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
    "--tw-text-opacity": "1",
    color: "rgba(255, 255, 255, var(--tw-text-opacity))",
  },
});
