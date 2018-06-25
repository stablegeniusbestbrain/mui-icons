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
      _react2.default.createElement('path', { d: 'M24 18.9V24H0v-5.1q.6 0 1.1-.2t.8-.4.7-.5q.4-.4.6-.5t.8-.2.7.2.8.5q.3.3.6.5t.8.4 1.1.2q.6 0 1.1-.2t.8-.4.7-.5q.2-.3.4-.4t.4-.2.6-.1q.5 0 .8.2t.6.5q.4.3.7.5t.8.4 1.1.2 1.1-.2.8-.4.7-.5.7-.5.7-.2q.5 0 .8.2t.6.5q.4.3.7.5t.8.4 1.1.2zm0-4.3v2.5q-.5 0-.7-.1t-.7-.5-.7-.5-.8-.4-1.1-.2q-.6 0-1.1.2t-.8.4-.6.5q-.3.2-.5.3t-.4.2-.6.1q-.5 0-.8-.1t-.6-.5q-.4-.3-.7-.5t-.7-.4-1.2-.2q-.6 0-1.1.2t-.8.4-.7.5q-.2.2-.4.3t-.4.2-.6.1q-.5 0-.7-.1t-.7-.5-.7-.5-.8-.4-1.1-.2q-.6 0-1.1.2t-.8.4-.7.5q-.4.3-.6.5t-.8.1v-2.5q0-1.1.8-1.8t1.8-.8h.8V6h3.5v6h3.4V6h3.4v6h3.4V6h3.5v6h.8q1.1 0 1.9.8t.7 1.8zM6.9 3q0 1-.5 1.6t-1.3.5q-.7 0-1.2-.5t-.5-1.2q0-.4.2-.7t.3-.4.4-.4.4-.4.3-.6.1-.9q.6 0 1.2 1t.6 2zm6.8 0q0 1-.5 1.6t-1.2.5q-.7 0-1.2-.5t-.5-1.2q0-.4.1-.7t.3-.4.4-.4.5-.4.3-.6.1-.9q.5 0 1.1 1t.6 2zm6.9 0q0 1-.5 1.6t-1.2.5q-.8 0-1.3-.5t-.5-1.2q0-.4.2-.7t.3-.4.4-.4.4-.4.3-.6.2-.9q.5 0 1.1 1t.6 2z' })
    )
  );
};

exports.default = Icon;