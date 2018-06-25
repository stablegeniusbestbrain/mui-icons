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
      _react2.default.createElement('path', { d: 'M11.6 8.9V17h8.7c1.9-.1 2.7-1.3 2.7-2.7 0-1.4-1.1-2.6-2.6-2.6-.4 0-.7 0-1.1.2-.2-2.4-2.2-4.2-4.6-4.2-1.2 0-2.3.5-3.1 1.2zm-.9 1c-.3-.2-.6-.3-1-.4V17h1.4V9.3c-.2.2-.3.4-.4.6zm-2.4-.5V17h1V9.4c-.2 0-.4-.1-.6-.1-.1 0-.3 0-.4.1zm-1.8.6v7h.9V9.5c-.3.2-.6.3-.9.5zm-1.7 2.5s-.1-.1-.2-.1V17h1v-6.1c-.4.4-.7 1-.8 1.6zm-2-.3v4.7c.2.1.4.1.7.1h.2v-4.9h-.2c-.3 0-.5.1-.7.1zM1 14.6c0 .7.3 1.4.9 1.8v-3.7c-.6.5-.9 1.1-.9 1.9z' })
    )
  );
};

exports.default = Icon;