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
      _react2.default.createElement('path', { d: 'M2.8 3l16.9 15.8s.3.5-.1.9c-.4.5-1 .1-1 .1L2.8 3zm5 1.6l13.1 12s.3.5-.1.9c-.4.5-.9.1-.9.1L7.8 4.6zM4.3 8l13.1 12s.3.5-.1.9c-.4.5-1 .1-1 .1L4.3 8zM12 6l9.2 8.4s.2.3-.1.6c-.3.3-.6 0-.6 0L12 6zm-6.5 5.9l9.1 8.4s.2.3-.1.6c-.3.4-.6.1-.6.1l-8.4-9.1zm10.9-4l4.2 3.8s.1.2-.1.3c-.1.2-.3 0-.3 0l-3.8-4.1zm-8.8 8.2l4.1 3.8s.1.2 0 .3c-.1.1-.3 0-.3 0l-3.8-4.1z' })
    )
  );
};

exports.default = Icon;