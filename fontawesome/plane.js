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
      _react2.default.createElement('path', { d: 'M21 2.1q.6.7.2 2t-1.5 2.3l-2.1 2.2 2.1 9.3q.1.3-.2.4l-1.7 1.3q-.1.1-.2.1h-.1q-.2 0-.3-.2l-3.7-6.8-3.5 3.5.7 2.5q.1.3-.1.5l-1.3 1.3q-.1.1-.3.1-.2-.1-.3-.2L6.1 17l-3.4-2.5q-.1-.1-.1-.3 0-.2.1-.4L4 12.5q.1-.1.3-.1h.1l2.6.8 3.5-3.5-6.8-3.8q-.2-.1-.3-.3 0-.2.1-.3l1.8-1.8q.2-.1.4-.1l8.9 2.2 2.1-2.2q1-1 2.3-1.4t2 .1z' })
    )
  );
};

exports.default = Icon;