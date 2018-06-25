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
      _react2.default.createElement('path', { d: 'M18.3 6.3c-.5-.4-1.1-.4-1.6 0L15 8l-.3-.3c-1.2-1.1-3.2-1.1-4.4 0l-4.2 4.2c-.5.6-.9 1.4-.9 2.2s.4 1.6.9 2.2l.3.3-1.7 1.7c-.4.5-.4 1.1 0 1.6.2.2.5.3.8.3s.6-.1.8-.3L8 18.2l.3.3c.6.5 1.4.9 2.2.9s1.6-.4 2.2-.9l4.2-4.2c.5-.6.9-1.4.9-2.2s-.4-1.6-.9-2.2l-.3-.3 1.7-1.7c.4-.5.4-1.1 0-1.6zm-3 6.4l-4.2 4.2c-.1.2-.4.3-.6.3s-.5-.1-.6-.3l-.3-.3.7-.7c.4-.5.4-1.1 0-1.6-.2-.2-.5-.3-.8-.3s-.6.1-.8.3L8 15l-.3-.3c-.2-.1-.3-.4-.3-.6s.1-.5.3-.6l4.2-4.2c.1-.2.4-.3.6-.3s.5.1.6.3l.3.3-.7.7c-.4.5-.4 1.1 0 1.6.2.2.5.3.8.3s.6-.1.8-.3l.7-.7.3.3c.2.1.3.4.3.6s-.1.5-.3.6z' })
    )
  );
};

exports.default = Icon;