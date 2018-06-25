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
      _react2.default.createElement('path', { d: 'M9.9 19.3q0 .1-.2.3l-4.2 4.3q-.2.1-.4.1-.1 0-.3-.1L.5 19.6q-.2-.2 0-.5.1-.2.4-.2h2.5V.4q0-.2.1-.3t.4-.1h2.5q.2 0 .3.1t.2.3v18.5h2.5q.2 0 .3.1t.2.3zM24 21v2.6q0 .2-.1.3t-.3.1H12.4q-.2 0-.3-.1t-.1-.3V21q0-.2.1-.3t.3-.1h11.2q.2 0 .3.1t.1.3zm-2.6-6.9v2.6q0 .2-.1.3t-.3.1h-8.6q-.2 0-.3-.1t-.1-.3v-2.6q0-.1.1-.3t.3-.1H21q.2 0 .3.1t.1.3zm-2.5-6.8v2.6q0 .1-.2.3t-.3.1h-6q-.2 0-.3-.1t-.1-.3V7.3q0-.2.1-.3t.3-.1h6q.2 0 .3.1t.2.3zM16.3.4V3q0 .2-.1.3t-.3.1h-3.5q-.2 0-.3-.1T12 3V.4q0-.2.1-.3t.3-.1h3.5q.1 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;