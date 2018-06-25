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
      _react2.default.createElement('path', { d: 'M9.2 1.7q-.6 0-1.1.5t-.4 1.1q0 .2.1.3l2 8.4h-.4L7.9 5.5q-.1-.5-.6-.8t-.9-.3q-.6 0-1 .4t-.5 1.1q0 .2.1.4 0 .2.5 2.2t.9 3.8.4 1.8v3l-4.1-3q-.4-.4-1-.4-.7 0-1.2.5T0 15.4q0 .9.8 1.5l6.7 5q.5.4 1.1.4h9.3q.4 0 .7-.3t.5-.7l1.3-5.4q.1-.4.2-1.1t.1-1.2l1.5-6.4q.1-.2.1-.3 0-.7-.5-1.1t-1-.4q-.5 0-1 .3t-.5.8L18 12h-.4l1.8-7.3v-.4q0-.6-.4-1.1t-1.1-.4q-.5 0-.9.3t-.5.8L14.6 12h-1.7l-2.2-9.1q-.2-.5-.6-.9t-.9-.3zM17.9 24H8.6q-1.2 0-2.1-.7l-6.8-5.1q-.7-.5-1-1.2t-.4-1.6q0-1.4 1-2.4t2.4-1q.3 0 .7.1t.5.1.6.3.4.3.6.4.5.4L3.3 6.7q-.1-.4-.1-.8 0-1.2.8-2.1t2.1-1.1q.1-1.2 1-1.9T9.2 0q1.1 0 2 .7t1.1 1.8l1.4 5.7 1.1-4.7q.3-1 1.2-1.7t1.9-.7q1.2 0 2.1.7t1.1 1.9q1.2.1 2.1 1t.8 2.2q0 .4-.1.7L22.4 14q-.1.3-.1.9 0 .7-.2 1.5l-1.3 5.3q-.3 1-1.1 1.7t-1.8.6z' })
    )
  );
};

exports.default = Icon;