"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Secondary = exports.Primary = exports.Disabled = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../components/Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var _default = exports["default"] = {
  title: 'Example/Button',
  component: _Button["default"]
};
var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], args);
};
var Primary = exports.Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button'
};
var Secondary = exports.Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Button'
};
var Disabled = exports.Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  color: 'primary',
  disabled: true,
  children: 'Disabled Button'
};