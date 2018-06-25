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
      _react2.default.createElement('path', { d: 'M22.3 16.7V3.9q0-.2-.1-.3t-.3-.2H.4q-.1 0-.3.2t-.1.3v12.8q0 .2.1.3t.3.1h21.5q.1 0 .3-.1t.1-.3zM24 3.9v12.8q0 .9-.6 1.5t-1.5.7H12v1.7h4.7q.2 0 .3.1t.1.3v.9q0 .1-.1.3t-.3.1H5.6q-.2 0-.3-.1t-.2-.3V21q0-.2.2-.3t.3-.1h4.7v-1.7H.4q-.9 0-1.5-.7t-.6-1.5V3.9q0-.9.6-1.6t1.5-.6h21.5q.8 0 1.5.6t.6 1.6z' })
    )
  );
};

exports.default = Icon;