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
      _react2.default.createElement('path', { d: 'M12 1c-.2 0-.4.1-.6.3-.8.9-1.7 1.7-2.5 2.5-.2.3-.3.4-.5.6-.3.2-.4.5-.4.9v8.1c.1.3.3.4.5.2l3.5-3.5L16.1 6c.4-.4.4-.9 0-1.2l-3.5-3.5c-.2-.2-.4-.3-.6-.3zm6.7 6.7c-.2 0-.4 0-.6.2-1.2 1.2-2.4 2.3-3.5 3.5-.4.4-.4.8 0 1.2 1.1 1.2 2.3 2.3 3.4 3.5.4.4.9.4 1.3 0l3.3-3.3c.2-.2.3-.4.4-.6v-.3c-.1-.3-.2-.4-.4-.6-1.1-1.1-2.2-2.2-3.3-3.4-.2-.2-.4-.2-.6-.2zm-13.9.4c-.1-.1-.2 0-.3.1-1.1 1.2-2.2 2.2-3.3 3.4-.3.3-.3.6 0 .9l1.9 1.9 1.5 1.5c.1.1.3.1.3-.1.1-.1.1-.2.1-.3V8.6v-.2c-.1-.1-.1-.3-.2-.3zm7.3 6.2c-.2 0-.4 0-.6.2-1.2 1.2-2.3 2.4-3.5 3.5-.4.4-.4.9 0 1.3 1.1 1.1 2.3 2.2 3.4 3.3.1.2.3.3.5.4h.3c.2-.1.4-.2.6-.4 1.1-1.1 2.2-2.2 3.4-3.3.4-.4.3-.9-.1-1.3-1.1-1.2-2.3-2.3-3.4-3.5-.2-.2-.4-.2-.6-.2z' })
    )
  );
};

exports.default = Icon;