const plugin = require("tailwindcss/plugin");

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
const Tabs = require("./src/tabs.js");

module.exports = plugin(function ({ addComponents }) {
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
  addComponents(Tabs());
});
