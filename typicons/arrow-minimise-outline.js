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
      _react2.default.createElement('path', { d: 'M22 6c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9s-1.6.3-2.1.9l-.9.9c-.5-.5-1.2-.8-2-.8-.9 0-1.7.4-2.3 1.1-.2-.1-.4-.1-.6-.1H5v6.1c0 .2 0 .5.1.7-.6.5-1 1.3-1 2.2 0 .7.3 1.4.7 1.9l-.9 1c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.1c.5.6 1.3.9 2.1.9.5 0 1.3-.2 2.1-.9l.9-.9c.5.5 1.2.8 2 .8.9 0 1.8-.4 2.3-1.1.3.1.5.1.8.1H20v-6.1c0-.2 0-.4-.1-.6.7-.6 1.1-1.4 1.1-2.3 0-.8-.3-1.5-.8-2l.9-.9c.6-.5.9-1.3.9-2.1zM7 7h4c.6 0 1 .4 1 1s-.4 1-1 1H9v2c0 .6-.4 1-1 1s-1-.4-1-1V7zm12.7-.3L16.4 10H18c.6 0 1 .4 1 1s-.4 1-1 1h-5V7c0-.6.4-1 1-1s1 .4 1 1v1.6l3.3-3.3c.2-.2.4-.3.7-.3s.5.1.7.3c.4.4.4 1 0 1.4zM12 18c0 .6-.4 1-1 1s-1-.4-1-1v-1.7l-3.4 3.4c-.1.2-.3.3-.6.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4L8.6 15H7.1c-.5 0-1-.4-1-1s.5-1 1-1H12v5zm0-6H9.7c.2-.3.3-.6.3-1v-1h1.1c.3 0 .6-.1.9-.2V12zm1 1h2.7c-.4.1-.7.3-.7.9V15h-.9c-.4 0-.8.1-1.1.3V13zm.1 4c0-.6.4-1 1-1H16v-2c0-.6.4-1 1-1s1 .4 1 1v4h-3.9c-.6 0-1-.4-1-1z' })
    )
  );
};

exports.default = Icon;