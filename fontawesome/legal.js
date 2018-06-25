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
      _react2.default.createElement('path', { d: 'M23.7 20.6q0 .7-.5 1.2l-1.4 1.4q-.5.5-1.2.5t-1.2-.5l-4.9-4.9q-.5-.4-.5-1.2 0-.7.6-1.2l-3.5-3.5-1.6 1.7q-.2.2-.5.2t-.5-.2q.1 0 .2.2t.2.2.1.1.1.2.1.2.1.2 0 .2q0 .5-.4.9 0 .1-.2.3t-.2.3-.3.2-.3.2-.3.1-.3.1q-.5 0-.9-.4L.9 11.6q-.4-.3-.4-.9 0-.2.1-.3t.1-.3.2-.3.2-.3.3-.2.3-.2q.4-.4.9-.4h.2q.1 0 .2.1t.2.1.2.1.1.1.2.2.2.2q-.2-.2-.2-.5t.2-.5l4.6-4.6q.2-.2.5-.2t.5.2q-.1 0-.2-.2t-.2-.2-.1-.1-.1-.2-.1-.2-.1-.2 0-.2q0-.5.4-.9 0-.1.2-.3t.2-.3.3-.2.3-.2.3-.1.3-.1q.6 0 .9.4l5.5 5.5q.4.4.4.9 0 .2-.1.3t-.1.3-.2.3-.2.3-.3.2-.3.2q-.4.4-.9.4h-.2q-.1 0-.2-.1t-.2-.1-.2-.1-.1-.1-.2-.2-.2-.2q.2.2.2.5t-.2.5l-1.7 1.6 3.5 3.5q.5-.6 1.2-.6t1.3.5l4.8 4.9q.5.5.5 1.2z' })
    )
  );
};

exports.default = Icon;