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
      _react2.default.createElement('path', { d: 'M7.6 7.9q-.1-.3-.4-.5t-.7 0Q5.1 8 4 9.1t-1.7 2.6q-.2.3 0 .6t.4.5q.2.1.4.1.5 0 .8-.6.4-1.1 1.3-2t2-1.3q.3-.1.4-.5t0-.6zm12.7-4.8l.6.6L17.6 7l.9.9q.3.3.3.6t-.3.6l-.8.9q1.2 2.1 1.2 4.6 0 1.9-.8 3.6t-2 3-3 2.1-3.7.7-3.6-.7-3-2.1-2.1-3-.7-3.6.7-3.7 2.1-3 3-2 3.6-.8q2.5 0 4.6 1.2l.9-.8q.2-.3.6-.3t.6.3l.9.9zm.1-.7q-.2.1-.3.1-.2 0-.3-.1l-1.3-1.2q-.1-.2-.1-.3t.1-.4q.2-.1.4-.1t.3.1l1.2 1.3q.1.1.1.3t-.1.3zm3.1 3.1q-.2.1-.4.1t-.3-.1l-1.2-1.3q-.1-.1-.1-.3t.1-.3q.1-.1.3-.1t.3.1l1.3 1.2q.1.2.1.3t-.1.4zM24 3q0 .2-.1.3t-.3.1h-1.3q-.2 0-.3-.1t-.1-.3.1-.3.3-.1h1.3q.2 0 .3.1t.1.3zM21.4.4v1.3q0 .2-.1.3t-.3.1-.3-.1-.1-.3V.4q0-.2.1-.3T21 0t.3.1.1.3zm2.1.8l-1.3 1.2q-.1.1-.3.1-.1 0-.3-.1-.1-.1-.1-.3t.1-.3L22.8.5q.2-.1.3-.1t.4.1q.1.2.1.4t-.1.3z' })
    )
  );
};

exports.default = Icon;