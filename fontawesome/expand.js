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
      _react2.default.createElement('path', { d: 'M11.8 14.1q0 .2-.1.4l-4.5 4.4 2 1.9q.2.3.2.6t-.2.6-.6.3h-6q-.4 0-.6-.3t-.3-.6v-6q0-.3.3-.6t.6-.2.6.2l1.9 2 4.4-4.5q.2-.1.4-.1t.3.1l1.5 1.5q.1.2.1.3zM22.3 2.6v6q0 .3-.3.6t-.6.2-.6-.2l-1.9-2-4.4 4.5q-.2.1-.4.1t-.3-.1l-1.5-1.5q-.1-.2-.1-.3t.1-.4l4.5-4.4-2-1.9q-.2-.3-.2-.6t.2-.6.6-.3h6q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;