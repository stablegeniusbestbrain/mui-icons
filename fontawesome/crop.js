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
      _react2.default.createElement('path', { d: 'M8.3 17.1h8V9.2zm-.6-.6l8-7.9h-8v7.9zm15.4 1.1v2.5q0 .2-.1.4t-.3.1h-3v3q0 .2-.1.3t-.3.1h-2.6q-.2 0-.3-.1t-.1-.3v-3H4.7q-.2 0-.3-.1t-.1-.4V8.6h-3q-.2 0-.3-.1t-.1-.4V5.6q0-.2.1-.3t.3-.2h3v-3q0-.1.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3v3h11.4l3.3-3.3q.1-.1.3-.1t.3.1q.1.2.1.3t-.1.4l-3.3 3.2v11.4h3q.2 0 .3.2t.1.3z' })
    )
  );
};

exports.default = Icon;