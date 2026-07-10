"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _DataGrid = _interopRequireDefault(require("../components/DataGrid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var columns = [{
  field: 'id',
  headerName: 'ID',
  width: 90
}, {
  field: 'firstName',
  headerName: 'First name',
  width: 150
}, {
  field: 'lastName',
  headerName: 'Last name',
  width: 150
}, {
  field: 'age',
  headerName: 'Age',
  type: 'number',
  width: 110
}];
var rows = [{
  id: 1,
  lastName: 'Snow',
  firstName: 'Jon',
  age: 35
}, {
  id: 2,
  lastName: 'Lannister',
  firstName: 'Cersei',
  age: 42
}, {
  id: 3,
  lastName: 'Lannister',
  firstName: 'Jaime',
  age: 45
}, {
  id: 4,
  lastName: 'Stark',
  firstName: 'Arya',
  age: 16
}, {
  id: 5,
  lastName: 'Targaryen',
  firstName: 'Daenerys',
  age: null
}, {
  id: 6,
  lastName: 'Melisandre',
  firstName: null,
  age: 150
}, {
  id: 7,
  lastName: 'Clifford',
  firstName: 'Ferrara',
  age: 44
}, {
  id: 8,
  lastName: 'Frances',
  firstName: 'Rossini',
  age: 36
}, {
  id: 9,
  lastName: 'Roxie',
  firstName: 'Harvey',
  age: 65
}];
var _default = exports["default"] = {
  title: 'Components/DataGrid',
  component: _DataGrid["default"] // Changed from MuiDataGrid to your wrapper component
};
var Default = exports.Default = function Default(args) {
  // Renamed from DataGrid to avoid naming conflict
  return /*#__PURE__*/_react["default"].createElement(_DataGrid["default"], _extends({
    rows: rows,
    columns: columns
  }, args));
};