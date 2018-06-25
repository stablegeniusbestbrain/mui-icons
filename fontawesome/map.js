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
      _react2.default.createElement('path', { d: 'M6.9 0q.1 0 .3.1t.1.3v19.7q0 .3-.2.4L.6 23.9q-.1.1-.2.1t-.3-.1-.1-.3V3.9q0-.3.2-.4L6.7.1q.1-.1.2-.1zm16.7 0q.1 0 .3.1t.1.3v19.7q0 .3-.2.4l-6.5 3.4q0 .1-.2.1-.1 0-.3-.1t-.1-.3V3.9q0-.3.2-.4L23.4.1q.1-.1.2-.1zm-15 0h.2l6.8 3.5q.3.1.3.4v19.7q0 .1-.2.3t-.3.1h-.2l-6.8-3.5q-.3-.1-.3-.4V.4q0-.1.2-.3t.3-.1z' })
    )
  );
};

exports.default = Icon;