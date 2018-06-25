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
      _react2.default.createElement('path', { d: 'M2.6 22.3h18.8V8.6H2.6v13.7zM7.7 6V2.1q0-.1-.1-.3t-.3-.1h-.9q-.2 0-.3.1t-.1.3V6q0 .2.1.3t.3.1h.9q.2 0 .3-.1t.1-.3zM18 6V2.1q0-.1-.1-.3t-.3-.1h-.9q-.2 0-.3.1t-.1.3V6q0 .2.1.3t.3.1h.9q.2 0 .3-.1T18 6zm5.1-.9v17.2q0 .7-.5 1.2t-1.2.5H2.6q-.7 0-1.2-.5t-.5-1.2V5.1q0-.7.5-1.2t1.2-.5h1.7V2.1q0-.8.6-1.5T6.4 0h.9q.9 0 1.5.6t.6 1.5v1.3h5.2V2.1q0-.8.6-1.5t1.5-.6h.9q.9 0 1.5.6t.6 1.5v1.3h1.7q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;