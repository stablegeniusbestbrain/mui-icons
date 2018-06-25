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
      _react2.default.createElement('path', { d: 'M6.7 17l-3.4 3.5q-.1.1-.3.1-.2 0-.3-.1-.1-.2-.1-.4t.1-.3l3.4-3.4q.2-.1.3-.1t.3.1q.2.1.2.3t-.2.3zm2.3.6v4.3q0 .1-.1.3t-.3.1-.3-.1-.2-.3v-4.3q0-.2.2-.3t.3-.2.3.2.1.3zm-3-3q0 .2-.1.3t-.3.1H1.3q-.2 0-.3-.1t-.1-.3.1-.3.3-.2h4.3q.2 0 .3.2t.1.3zm16.9 1.7q0 1.6-1.1 2.7l-2 2q-1.1 1.1-2.7 1.1t-2.7-1.2l-4.5-4.5q-.3-.2-.6-.7l3.2-.2 3.7 3.6q.4.4.9.4t.9-.4l2-1.9q.4-.4.4-.9 0-.6-.4-.9l-3.7-3.7.3-3.2q.4.3.7.6l4.5 4.5q1.1 1.1 1.1 2.7zm-8.2-9.7l-3.2.2-3.7-3.6q-.4-.4-.9-.4t-.9.3l-2 2q-.4.4-.4.9t.4.9l3.7 3.7-.3 3.2q-.4-.3-.7-.6L2.2 8.7Q1.1 7.6 1.1 6t1.1-2.7l2-2Q5.3.2 6.9.2t2.7 1.2l4.5 4.4q.3.3.6.8zm8.4 1.1q0 .2-.1.3t-.3.1h-4.3q-.2 0-.3-.1t-.1-.3.1-.3.3-.1h4.3q.2 0 .3.1t.1.3zM15.9.4v4.3q0 .2-.2.3t-.3.1-.3-.1-.1-.3V.4q0-.2.1-.3t.3-.1.3.1.2.3zm5.4 2.1l-3.4 3.4q-.2.1-.3.1t-.3-.1q-.2-.2-.2-.3t.2-.3l3.4-3.5q.1-.1.3-.1t.3.1q.1.2.1.3t-.1.4z' })
    )
  );
};

exports.default = Icon;