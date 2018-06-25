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
      _react2.default.createElement('path', { d: 'M24 12.8l-9 9-4.5-4.5 2.3-2.3 2.2 2.3 6.8-6.8 2.2 2.3zM8.6 18.3l1.2 1.2H3c-.8 0-1.5-.7-1.5-1.5V4.5C1.5 3.7 2.2 3 3 3h10.5c.8 0 1.5.7 1.5 1.5v9.8l-1.2-1.2c-.6-.6-1.5-.6-2.1 0l-3.1 3.1a1.5 1.5 0 0 0 0 2.1zM6 6h7.5V4.5H6V6zm0 3h7.5V7.5H6V9zm0 3h4.5v-1.5H6V12zm-1.5 1.5H3V15h1.5v-1.5zm0-3H3V12h1.5v-1.5zm0-3H3V9h1.5V7.5zm0-3H3V6h1.5V4.5z' })
    )
  );
};

exports.default = Icon;