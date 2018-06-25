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
      _react2.default.createElement('path', { d: 'M22.5 22.3q-.6 0-1.7-.1t-1.8 0h-1.8q-1.2 0-1.8.1-.3 0-.5-.3t-.1-.6q0-.4.2-.6t.5-.2.7-.1.6-.2q.4-.3.4-1.9v-5.2-.5H6.8v5.4q0 1.9.5 2.2.2.2.6.2t.8 0 .6.2.3.6q0 .4-.2.7t-.5.3q-.6 0-1.9-.1t-1.8 0H3.5q-1.1 0-1.7.1-.3 0-.5-.3t-.2-.6q0-.4.2-.6t.5-.2.7-.1.5-.2q.5-.3.5-2l-.1-.7V6.7v-.4-.4-.6-.5q0 .1-.1-.5t-.2-.4-.2-.3q-.2-.1-.6-.1t-.7-.1-.5-.1-.3-.6q0-.4.2-.7t.5-.3q.6 0 1.8.1t1.9 0h1.7q1.2 0 1.7-.1.3 0 .5.3t.1.7q0 .4-.2.5t-.5.2-.7.1-.5.2q-.5.2-.5 2.1v4.7q.2.1.5.1h9.4q.3 0 .5-.1V5.8q0-1.9-.4-2.1-.3-.2-.8-.2t-.9-.2-.3-.6q0-.4.1-.7t.5-.3q.6 0 1.8.1t1.8 0h1.7q1.2 0 1.7-.1.4 0 .5.3t.2.7q0 .4-.2.5t-.6.2-.7.1-.6.1q-.4.4-.4 2.2v12.6q0 1.6.4 1.9.3.1.7.2t.7 0 .5.3.3.5q0 .4-.2.7t-.5.3z' })
    )
  );
};

exports.default = Icon;