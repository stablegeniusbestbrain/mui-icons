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
      _react2.default.createElement('path', { d: 'M8.9 6.4q-.8 1.3-1.8 3.7l-.5-1q-.2-.4-.6-.8t-.6-.8-.9-.4-1.1-.2h-3q-.2 0-.3-.2T0 6.4V3.9q0-.2.1-.4t.3-.1h3q3.4 0 5.5 3zM24 17.1q0 .2-.1.4l-4.3 4.2q-.1.2-.3.2-.2 0-.3-.2t-.1-.3v-2.5H15.7q-.5 0-1-.1t-.9-.1-.8-.3-.8-.4-.8-.5-.7-.7-.7-1q.7-1.2 1.8-3.6l.5 1q.2.4.5.8t.7.8.8.4 1.1.2h3.5v-2.5q0-.2.1-.4t.3-.1q.1 0 .3.2l4.3 4.2q.1.2.1.3zm0-12q0 .2-.1.4l-4.3 4.2q-.1.2-.3.2-.2 0-.3-.2t-.1-.3V6.9h-3.5q-.6 0-1.1.2t-1 .6-.6.8-.6 1q-.5.9-1.1 2.3-.4.9-.7 1.5t-.7 1.4-.8 1.3-1 1.2-1.2.9-1.5.5-1.7.3h-3q-.2 0-.3-.2t-.1-.3v-2.5q0-.2.1-.4t.3-.1h3q.7 0 1.2-.2t.9-.6.7-.8.6-1q.4-.9 1-2.3.4-.9.7-1.5t.7-1.4.9-1.4 1-1.1 1.2-.9 1.4-.6 1.7-.2h3.5V.9q0-.2.1-.4t.3-.1q.1 0 .3.2l4.3 4.2q.1.2.1.3z' })
    )
  );
};

exports.default = Icon;