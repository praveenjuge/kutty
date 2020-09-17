const plugin = require("tailwindcss/plugin");
const colors = require("./src/colors.js");

const Alert = require("./src/alert.js");
const Avatar = require("./src/avatar.js");
const Badge = require("./src/badge.js");
const Breadcrumb = require("./src/breadcrumb.js");
const Button = require("./src/button.js");
const Card = require("./src/card.js");
const Dialog = require("./src/dialog.js");
const Dropdown = require("./src/dropdown.js");
const Forms = require("./src/forms.js");
const List = require("./src/list.js");
const Pagination = require("./src/pagination.js");
const Progress = require("./src/progress.js");
const Spinner = require("./src/spinner.js");
const Tabs = require("./src/tabs.js");
const Tooltip = require("./src/tooltip.js");
const Typography = require("@tailwindcss/typography");

module.exports = plugin.withOptions(
  function () {
    return function (options) {
      const { addComponents, addUtilities } = options;
      const newUtilities = { "[x-cloak]": { display: "none !important" } };

      addUtilities(newUtilities);
      addComponents(Alert());
      addComponents(Avatar());
      addComponents(Badge());
      addComponents(Breadcrumb());
      addComponents(Button());
      addComponents(Card());
      addComponents(Dialog());
      addComponents(Dropdown());
      addComponents(Forms());
      addComponents(List());
      addComponents(Pagination());
      addComponents(Progress());
      addComponents(Spinner());
      addComponents(Tabs());
      addComponents(Tooltip());
      Typography().handler(options);
    };
  },
  function () {
    return {
      theme: {
        extend: {
          colors,
          inset: {
            "1/2": "50%",
          },
        },
      },
    };
  }
);
