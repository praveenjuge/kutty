module.exports = List = () => ({
  ".list, .prose .list": {
    display: "flex",
    flexDirection: "column",
    marginTop: "0px",
    marginBottom: "0px",
    paddingLeft: "0px",
  },
  ".list-item, .prose .list-item": {
    "--tw-border-opacity": "1",
    borderColor: "rgba(241, 245, 249, var(--tw-border-opacity))",
    borderStyle: "solid",
    borderWidth: "1px",
    alignItems: "flex-start",
    fontWeight: 400,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    marginTop: "0px",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    position: "relative",
    width: "100%",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    marginBottom: "-1px",
  },
  "a.list-item:hover": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
  },
  "a.list-item:focus": {
    outline: "2px solid transparent",
    outlineOffset: "2px",
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
    zIndex: 10,
  },
  "a.list-item": {
    "--tw-text-opacity": "1",
    color: "rgba(15, 23, 42, var(--tw-text-opacity))",
  },
  ".prose a.list-item": { fontWeight: 400, textDecoration: "none" },
  ".list-item:first-child": {
    borderTopLeftRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
  },
  ".list-item:last-child": {
    borderBottomRightRadius: "0.25rem",
    borderBottomLeftRadius: "0.25rem",
    marginBottom: "0px",
  },
  ".prose .list-item::before": { content: "none" },
  // Active
  ".list-item.list-active": {
    "@apply bg-primary": {},
    "--tw-text-opacity": "1",
    color: "rgba(255, 255, 255, var(--tw-text-opacity))",
  },
  "a.list-item.list-active": {
    "@apply hover:bg-primary-dark": {},
  },
  // Disabled
  ".list-disabled, a.list-item.list-disabled": {
    "--tw-bg-opacity": "1",
    backgroundColor: "rgba(241, 245, 249, var(--tw-bg-opacity))",
    cursor: "default",
    "--tw-text-opacity": "1",
    color: "rgba(100, 116, 139, var(--tw-text-opacity))",
  },
  ".list-disabled:focus, a.list-item.list-disabled:focus": {
    "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
    "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
    boxShadow: "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
  },
  // Flush
  ".list-flush .list-item": { borderRightWidth: "0px", borderLeftWidth: "0px" },
  ".list-flush .list-item:first-child": { borderWidth: "0px" },
  ".list-flush .list-item:last-child": { borderBottomWidth: "0px" },
});
