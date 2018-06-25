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
      _react2.default.createElement('path', { d: 'M27.2 10.8q.2.1.2.3t-.2.4l-4.3 2.6h-.4q-.2-.1-.2-.4V12H10.8q.5.8 1.1 2.2.2.5.3.7t.4.7.3.6.4.5.4.3.4.1h1.3v-1.2q0-.2.1-.4t.4-.1h4.2q.2 0 .4.1t.1.4v4.2q0 .2-.1.4t-.4.1h-4.2q-.2 0-.4-.1t-.1-.4v-1.2h-1.3q-.4 0-.8-.2t-.7-.3-.6-.5-.5-.6-.4-.8-.4-.8-.4-.8q-.3-.7-.5-1.1t-.4-.9-.6-.7-.7-.2H3.3q-.3 1.1-1.2 1.8t-2.1.8q-1.4 0-2.4-1t-1-2.5 1-2.4 2.4-1q1.2 0 2.1.7t1.2 1.9h1.4q.3 0 .6-.2t.6-.8.5-.8.5-1.1l.4-.8.4-.8.4-.8q.1-.2.5-.6t.6-.5.7-.3.8-.2h1.4q.3-.7 1-1.2t1.5-.5q1 0 1.8.8t.7 1.8-.7 1.8-1.8.8q-.9 0-1.5-.5t-1-1.3h-1.4q-.2 0-.4.1t-.4.4-.4.5-.4.6-.3.6-.3.8q-.6 1.4-1.1 2.2h14.9V8.6q0-.3.2-.4t.4 0z' })
    )
  );
};

exports.default = Icon;