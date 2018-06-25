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
      _react2.default.createElement('path', { d: 'M9.9 11.1c-.1-1.2-.5-2.3-1.1-3.3-.3-.5-.3-1.1-.2-1.6.1-.2.2-.4.4-.6.2-.2.5-.3.7-.4.2-.1.3-.1.6-.1.4 0 .7.1 1 .3l.4.4.1.1c1.1 1.9 1.7 4 1.7 6.1v.8c-.1 1.9-.7 3.7-1.7 5.3-.3.6-.9.9-1.5.9l-.5-.1-.4-.2c-.5-.3-.8-.8-.9-1.3 0-.4 0-.7.2-1l.1-.1C9.5 15 10 13.5 10 12l-.1-.9zm10.5-3.2c.3 1.3.4 2.7.4 4.1 0 1.4-.1 2.8-.4 4.2l-.3 1c-.3 1.2-.7 2.1-1.1 2.8-.3.6-.9 1-1.6 1-.3 0-.6-.1-.8-.2-.6-.2-.9-.7-1-1.3l-.1-.4c0-.4.2-.7.2-.8.9-2 1.4-4.1 1.4-6.3s-.5-4.3-1.4-6.3c-.5-1-.1-2.1.9-2.5.2-.1.5-.2.8-.2.7 0 1.3.4 1.7 1.1.5 1.2 1 2.5 1.3 3.8zm-4.3 1.6c.2.8.2 1.7.2 2.5 0 2-.3 3.9-1.1 5.7-.1-1.5-.4-2.9-1-4.3V12c0-2.1-.5-4.1-1.5-5.9 1.3.9 2.5 2.1 3.4 3.4zM4 10.5C3.2 10 2.8 9 3.3 8.2c.3-.6.9-.9 1.5-.9.3 0 .5.1.8.2C6.9 8.2 8 9.1 9 10.2l.1.9.1.9c0 1.4-.4 2.8-1.1 4.1-.5-2.4-2-4.5-4.1-5.6z' })
    )
  );
};

exports.default = Icon;