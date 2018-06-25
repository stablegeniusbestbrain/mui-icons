'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('@material-ui/core/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _react2.default.createElement(
      'g',
      null,
      _react2.default.createElement('path', { d: 'M19.5 12V9h-9V6h9V3L24 7.5 19.5 12zM6 3H4.5v1.5H6V3zm10.5 7.5H18v9c0 .8-.7 1.5-1.5 1.5H9v3l-2.2-2.2L4.5 24v-3h-3C.7 21 0 20.3 0 19.5v-18C0 .7.7 0 1.5 0h15c.8 0 1.5.7 1.5 1.5v3h-1.5v-3H3V15h13.5v-4.5zm0 6h-15v3h3V18H9v1.5h7.5v-3zM6 9H4.5v1.5H6V9zm0-3H4.5v1.5H6V6zm-1.5 7.5H6V12H4.5v1.5z' })
    )
  );
};

exports.default = Icon;