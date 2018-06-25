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
      _react2.default.createElement('path', { d: 'M18.2 17.5l.5 2.1q0 .2-.1.3t-.2.2h-.1q0 .1-.1.1t-.2 0-.3.1-.3.1-.4.1-.5 0-.5.1-.5 0q-3.1 0-5.5-1.8t-3.2-4.7H5.6q-.2 0-.3-.1t-.2-.3v-1.5q0-.2.2-.3t.3-.2h.9q-.1-.7 0-1.4h-.9q-.2 0-.3-.1t-.2-.3V8.4q0-.2.2-.3t.3-.1h1.3q.9-2.9 3.2-4.6t5.4-1.7q1.4 0 2.6.3.2.1.3.2.1.2 0 .3l-.6 2.2q0 .1-.1.2t-.4.1q-.1-.1-.2-.1h-.2l-.3-.1h-.7l-.4-.1q-1.7 0-3.1.9t-2 2.4h6.3q.2 0 .3.1.2.2.1.4l-.3 1.5q-.1.3-.4.3H9.8v1.4H16q.2 0 .3.2.1.2.1.4l-.3 1.5-.2.2q-.1.1-.2.1h-5.2q.6 1.6 2 2.5t3 .9h1q.3 0 .4-.1t.3-.1.2 0l.2-.1h.1q.1-.1.3 0 .2.1.2.3z' })
    )
  );
};

exports.default = Icon;