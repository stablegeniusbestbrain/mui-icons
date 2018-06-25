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
      _react2.default.createElement('path', { d: 'M15.4 15v.9q0 .1-.1.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3V15q0-.2.1-.3t.3-.1H15q.2 0 .3.1t.1.3zM1.7 22.3h18.9V8.6H1.7v13.7zM6.9 6V2.1q0-.1-.2-.3t-.3-.1h-.8q-.2 0-.3.1t-.2.3V6q0 .2.2.3t.3.1h.8q.2 0 .3-.1t.2-.3zm10.2 0V2.1q0-.1-.1-.3t-.3-.1h-.8q-.2 0-.4.1t-.1.3V6q0 .2.1.3t.4.1h.8q.2 0 .3-.1t.1-.3zm5.2-.9v17.2q0 .7-.5 1.2t-1.2.5H1.7q-.7 0-1.2-.5T0 22.3V5.1q0-.7.5-1.2t1.2-.5h1.7V2.1q0-.8.7-1.5T5.6 0h.8q.9 0 1.5.6t.7 1.5v1.3h5.1V2.1q0-.8.6-1.5t1.6-.6h.8q.9 0 1.5.6t.7 1.5v1.3h1.7q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;