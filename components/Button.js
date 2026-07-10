"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'contained' : _ref$variant,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? 'primary' : _ref$color,
    onClick = _ref.onClick,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: variant,
    color: color,
    onClick: onClick
  }, children);
};
var _default = exports["default"] = Button;