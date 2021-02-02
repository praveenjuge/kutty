module.exports = Alert = () => ({
  ".alert": {
    borderColor: "currentColor",
    borderRadius: "0.375rem",
    display: "flex",
    alignItems: "flex-start",
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    overflow: "hidden",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    position: "relative",
    verticalAlign: "middle",
    transitionProperty: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "150ms",
    paddingTop: "0.7rem",
    paddingBottom: "0.7rem",
  },
  // Close
  ".alert-close": {
    position: "absolute !important",
    top: "0px !important",
    right: "0px !important",
    bottom: "0px !important",
  },
  ".alert-close svg": {
    marginTop: "0px !important",
    marginRight: "0px !important",
  },
  ".alert-closable, .alert-closable.alert-lg, .alert-closable.alert-sm": {
    paddingRight: "3rem !important",
  },
  // Sizes
  ".alert-sm": {
    fontSize: "0.75rem !important",
    lineHeight: "1rem !important",
    paddingTop: "0.25rem !important",
    paddingBottom: "0.25rem !important",
    paddingRight: "0.75rem !important",
    paddingLeft: "0.75rem !important",
  },
  ".alert-lg": {
    fontSize: "1.125rem !important",
    lineHeight: "1.75rem !important",
    paddingTop: "1.25rem !important",
    paddingBottom: "1.25rem !important",
    paddingRight: "1.25rem !important",
    paddingLeft: "1.25rem !important",
  },
  ".alert svg": {
    flex: "none",
    height: "1.25rem",
    marginRight: "0.75rem",
    width: "1.25rem",
  },
  ".alert.alert-sm svg": { height: "1rem", width: "1rem" },
  ".alert.alert-lg svg": { height: "1.5rem", width: "1.5rem" },
  // Text
  ".alert a": { textDecoration: "underline" },
  ".prose .alert p": { marginTop: "0px", marginBottom: "0px" },
  ".prose .alert a": { color: "inherit" },
});
