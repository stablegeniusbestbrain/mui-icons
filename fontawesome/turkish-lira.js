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
      _react2.default.createElement('path', { d: 'M19.7 11.1q0 2.6-1.3 4.8T15 19.3t-4.7 1.3H8.1q-.1 0-.3-.1t-.1-.4V12l-2.9.8q0 .1-.1.1t-.2-.1q-.2-.2-.2-.4v-1.7q0-.3.3-.4l3.1-1V8.1L4.8 9h-.1q-.1 0-.2-.1-.2-.1-.2-.3V6.9q0-.4.3-.5l3.1-.9V2.1q0-.1.1-.3t.3-.1h2.2q.2 0 .3.1t.1.3v2.5l5-1.6q.2-.1.4.1t.2.3v1.7q0 .4-.3.5l-5.3 1.6v1.2l5-1.5q.2-.1.4 0t.2.4V9q0 .3-.3.4L10.7 11v6.6q2.5-.2 4.3-2.1t1.7-4.4q0-.1.1-.3t.3-.1h2.2q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;