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
      _react2.default.createElement('path', { d: 'M2.6 22.3h3.8v-3.9H2.6v3.9zm4.7 0h4.3v-3.9H7.3v3.9zm-4.7-4.7h3.8v-4.3H2.6v4.3zm4.7 0h4.3v-4.3H7.3v4.3zm-4.7-5.2h3.8V8.6H2.6v3.8zm9.8 9.9h4.3v-3.9h-4.3v3.9zm-5.1-9.9h4.3V8.6H7.3v3.8zm10.3 9.9h3.8v-3.9h-3.8v3.9zm-5.2-4.7h4.3v-4.3h-4.3v4.3zM7.7 6V2.1q0-.1-.1-.3t-.3-.1h-.9q-.1 0-.3.1t-.1.3V6q0 .2.1.3t.3.1h.9q.2 0 .3-.1t.1-.3zm9.9 11.6h3.8v-4.3h-3.8v4.3zm-5.2-5.2h4.3V8.6h-4.3v3.8zm5.2 0h3.8V8.6h-3.8v3.8zM18 6V2.1q0-.1-.1-.3t-.3-.1h-.9q-.2 0-.3.1t-.1.3V6q0 .2.1.3t.3.1h.9q.1 0 .3-.1T18 6zm5.1-.9v17.2q0 .7-.5 1.2t-1.2.5H2.6q-.7 0-1.2-.5t-.5-1.2V5.1q0-.7.5-1.2t1.2-.5h1.7V2.1q0-.8.6-1.5T6.4 0h.9q.9 0 1.5.6t.6 1.5v1.3h5.2V2.1q0-.8.6-1.5t1.5-.6h.9q.9 0 1.5.6t.6 1.5v1.3h1.7q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;