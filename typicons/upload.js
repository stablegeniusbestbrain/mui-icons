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
      _react2.default.createElement('path', { d: 'M21 16c0-.1 0-.2-.1-.3l-2-6c-.1-.4-.5-.7-.9-.7h-4v2h3.3l1.6 5H5.1l1.6-5H10V9H6c-.4 0-.8.3-.9.7l-2 6c-.1.1-.1.2-.1.3v5c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-5zm-5-8.1c.3 0 .5-.1.7-.3.4-.4.4-1 0-1.4L12 1.5 7.3 6.2c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L11 5.3V12c0 .6.4 1 1 1s1-.4 1-1V5.3l2.3 2.3c.2.2.4.3.7.3z' })
    )
  );
};

exports.default = Icon;