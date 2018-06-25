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
      _react2.default.createElement('path', { d: 'M21 6h-2.1c.3-.5.5-1 .6-1.4.1-1-.2-1.8-.8-2.4-.6-.5-1.2-.7-2.1-.7h-.1c-.8 0-1.7.4-2.3.9-.6.5-1.1 1.1-1.5 1.8-.3-.7-.8-1.4-1.4-1.8-.7-.5-1.5-.9-2.3-.9h-.1c-.8 0-1.6.1-2.1.7-.6.6-.9 1.4-.8 2.4 0 .4.3.9.5 1.4h-2C3.6 6 3 6.7 3 7.5V12h1.5v7.5c0 .8.6 1.5 1.5 1.5h13.5c.8 0 1.5-.7 1.5-1.5V12h1.5V7.5c0-.8-.7-1.5-1.5-1.5zm-7.2-1.3c.3-.6.7-1 1.2-1.4.4-.3 1-.6 1.5-.6h.2c.6 0 1 .1 1.2.4s.5.5.4 1.4c-.1.3-.4.9-.7 1.5h-4.4l.6-1.3zM7.6 3.1c.2-.2.5-.4 1.4-.4.5 0 1.1.2 1.5.6.5.4.9.8 1.2 1.4l.6 1.3H7.9c-.3-.6-.6-1.2-.7-1.5 0-.8.2-1.2.4-1.4zM12 19.5H6V12h6v7.5zm0-9H4.5v-3H12v3zm7.5 9h-6V12h6v7.5zm1.5-9h-7.5v-3H21v3z' })
    )
  );
};

exports.default = Icon;