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
      _react2.default.createElement('path', { d: 'M22.5 1.5H9c-.8 0-1.5.7-1.5 1.5v3h-6C.7 6 0 6.7 0 7.5v9c0 .8.7 1.5 1.5 1.5H3v4.5L7.5 18h6c.8 0 1.5-.7 1.5-1.5v-3h1.5L21 18v-4.5h1.5c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zm-9 15H6.8l-2.3 2.3v-2.3h-3v-9h6V12c0 .8.7 1.5 1.5 1.5h4.5v3zm9-4.5h-3v2.3L17.3 12H9V3h13.5v9z' })
    )
  );
};

exports.default = Icon;