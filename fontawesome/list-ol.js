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
      _react2.default.createElement('path', { d: 'M5.1 21.7q0 1.1-.7 1.7t-1.8.6q-1.5 0-2.3-.9l.7-1.2q.7.6 1.4.6.4 0 .7-.2t.3-.5q0-.9-1.4-.8l-.4-.7q.2-.2.5-.6t.6-.7.4-.5v-.1q-.2 0-.6.1t-.7 0v.7H.4v-2.1h4.5v1.2l-1.3 1.6q.7.1 1.1.6t.4 1.2zm0-8.4v2.1H.3q-.1-.5-.1-.7 0-.7.3-1.2t.8-1 .9-.6.7-.6.3-.6q0-.3-.2-.5t-.5-.2q-.6 0-1.1.8L.3 10q.3-.7.9-1t1.5-.4q.9 0 1.6.5t.7 1.5q0 .7-.5 1.3t-1 .8-1 .7-.5.7h1.7v-.8h1.4zM24 17.6v2.5q0 .2-.1.3t-.3.2H7.3q-.2 0-.3-.2t-.1-.3v-2.5q0-.2.1-.3t.3-.2h16.3q.1 0 .3.2t.1.3zM5.1 5.5v1.4H.7V5.5h1.4V3.9 2.1q-.1.2-.7.7l-.9-1L2.3.1h1.4v5.4h1.4zM24 10.7v2.6q0 .2-.1.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3v-2.6q0-.2.1-.3t.3-.1h16.3q.1 0 .3.1t.1.3zm0-6.8v2.5q0 .2-.1.3t-.3.2H7.3q-.2 0-.3-.2t-.1-.3V3.9q0-.2.1-.3t.3-.2h16.3q.1 0 .3.2t.1.3z' })
    )
  );
};

exports.default = Icon;