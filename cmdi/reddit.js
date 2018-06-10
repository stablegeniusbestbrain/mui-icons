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
      _react2.default.createElement('path', { d: 'M22 11.5c0-1.4-1.1-2.5-2.5-2.5-.6 0-1.2.2-1.6.6-1.5-.9-3.3-1.5-5.4-1.6l1.1-4L17 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.7 0-1.4.4-1.7 1l-4-1c-.3-.1-.5.1-.6.4L11.5 8c-2 .1-3.9.7-5.4 1.6-.4-.4-1-.6-1.6-.6C3.1 9 2 10.1 2 11.5c0 .9.4 1.6 1.1 2.1l-.1.9c0 3.6 4 6.5 9 6.5s9-2.9 9-6.5l-.1-.9c.7-.5 1.1-1.2 1.1-2.1zm-13 .3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2zm6.8 5.4c-1.8 1.1-5.8 1.1-7.6 0-.2-.2-.3-.5-.1-.7.2-.2.5-.3.7-.1 1.2.9 5.2.9 6.4 0 .2-.2.5-.1.7.1.2.2.1.5-.1.7zm-.8-3c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2.7 0 1.2.6 1.2 1.2 0 .7-.5 1.2-1.2 1.2z' })
    )
  );
};

exports.default = Icon;