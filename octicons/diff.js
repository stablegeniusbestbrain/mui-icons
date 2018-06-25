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
      _react2.default.createElement('path', { d: 'M11.3 10.5h3V12h-3v3H9.8v-3h-3v-1.5h3v-3h1.5v3zm-4.5 9h7.5V18H6.8v1.5zM13.5 3l5.3 5.3v14.2c0 .8-.7 1.5-1.5 1.5H3.8c-.9 0-1.5-.7-1.5-1.5v-18c0-.8.6-1.5 1.5-1.5h9.7zm3.8 6l-4.5-4.5h-9v18h13.5V9zM15 0H6.8v1.5h7.5l6 6v12h1.5V6.8L15 0z' })
    )
  );
};

exports.default = Icon;