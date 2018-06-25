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
      _react2.default.createElement('path', { d: 'M15 6V4.5c0-.8-.7-1.5-1.5-1.5h-3C9.7 3 9 3.7 9 4.5V6H3c-.8 0-1.5.7-1.5 1.5v12c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-12c0-.8-.7-1.5-1.5-1.5h-6zm-4.5-1.5h3V6h-3V4.5zm10.5 9h-7.5V15h-3v-1.5H3v-6h1.5V12h15V7.5H21v6z' })
    )
  );
};

exports.default = Icon;