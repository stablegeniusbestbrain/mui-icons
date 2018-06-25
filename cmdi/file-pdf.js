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
      _react2.default.createElement('path', { d: 'M14 9h5.5L14 3.5V9zM7 2h8l6 6v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm4.9 10.4c.4.9 1 1.7 1.6 2.2l.4.3c-.9.2-2.1.4-3.4.9l-.1.1.5-1.1c.5-.8.8-1.6 1-2.4zm6.5 3.8c.2-.1.3-.4.3-.6 0-.2 0-.4-.1-.6-.3-.4-1.1-.7-2.3-.7l-1.3.1-.9-.6c-.6-.5-1.2-1.4-1.6-2.5l.1-.2c.3-1.3.6-2.9-.1-3.6-.1-.1-.3-.2-.6-.2h-.2c-.4 0-.7.4-.8.8-.4 1.3-.1 2 .2 3.2-.2.9-.5 1.9-1.1 3l-.9 1.8-.9.5c-1.2.7-1.8 1.6-1.9 2.1 0 .2 0 .4.1.5v.1l.5.3.4.1c.8 0 1.7-1 3-3.1h.2c1-.4 2.3-.6 4-.8 1 .5 2.2.7 3 .7.4 0 .7-.1.9-.3zm-.4-.7l.1.1c0 .1-.1.2-.1.2h-.2c-.5 0-1.2-.2-1.9-.5.1-.1.1-.1.2-.1 1.4 0 1.8.2 1.9.3zM8.8 17c-.6 1.2-1.2 1.8-1.7 2 .1-.4.5-1 1.3-1.7l.4-.3zm3-6.9c-.2-.9-.2-1.6 0-2.1v-.1l.2.1c.2.2.2.5.1 1.1v.1l-.2.9h-.1z' })
    )
  );
};

exports.default = Icon;