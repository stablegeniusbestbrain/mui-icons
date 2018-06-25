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
      _react2.default.createElement('path', { d: 'M5.1 22.3l.3-1.2q.1 0 1.1-.3t1.5-.5q.3-.4.5-1.3 0-.1.8-3.9t1.6-7.3.7-3.9v-.4q-.4-.2-.8-.2t-.9-.1-.8-.1l.3-1.4q.4 0 1.6.1t2 .1 1.6 0h1.3q.7 0 1.6-.1t1.4-.1q-.1.5-.3 1.2-.4.1-1.4.4t-1.4.4l-.2.6q-.1.3-.1.5t-.1.7-.1.5q-.4 2-1.2 5.6t-1 4.8q0 .1-.2.8t-.3 1.2-.2 1.1-.1.8l.1.2q.2.1 2.4.4 0 .6-.2 1.3-.1 0-.4.1t-.4 0q-.4 0-1.2-.1t-1.2-.2H8.7q-.7 0-1.9.1t-1.7.2z' })
    )
  );
};

exports.default = Icon;