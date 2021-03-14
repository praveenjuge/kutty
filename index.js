const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = require("tailwindcss/plugin")(
  function ({ addComponents }) {
    addComponents([
      { "[x-cloak]": { display: "none !important" } },
      require("./src/alert.js")(),
      require("./src/avatar.js")(),
      require("./src/badge.js")(),
      require("./src/breadcrumb.js")(),
      require("./src/button.js")(),
      require("./src/card.js")(),
      require("./src/dialog.js")(),
      require("./src/dropdown.js")(),
      require("./src/forms.js")(),
      require("./src/list.js")(),
      require("./src/pagination.js")(),
      require("./src/progress.js")(),
      require("./src/spinner.js")(),
      require("./src/tabs.js")(),
      require("./src/toast.js")(),
      require("./src/tooltip.js")(),
    ]);
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            light: defaultTheme.colors.purple[100],
            DEFAULT: defaultTheme.colors.purple[700],
            dark: defaultTheme.colors.purple[900],
          },
        },
      },
    },
  }
);
