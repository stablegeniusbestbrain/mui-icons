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
      _react2.default.createElement('path', { d: 'M5.1 15.9v.8q0 .2-.1.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3v-.8q0-.2.2-.3t.3-.2h.8q.2 0 .3.2t.1.3zm0-3.5v.9q0 .2-.1.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3v-.9q0-.1.2-.3t.3-.1h.8q.2 0 .3.1t.1.3zm0-3.4v.9q0 .1-.1.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3V9q0-.2.2-.3t.3-.1h.8q.2 0 .3.1t.1.3zm15.5 6.9v.8q0 .2-.2.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3v-.8q0-.2.1-.3t.3-.2h12.8q.2 0 .3.2t.2.3zm0-3.5v.9q0 .2-.2.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3v-.9q0-.1.1-.3t.3-.1h12.8q.2 0 .3.1t.2.3zm0-3.4v.9q0 .1-.2.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3V9q0-.2.1-.3t.3-.1h12.8q.2 0 .3.1t.2.3zm1.7 9.4V7.3q0-.2-.1-.3t-.3-.1H2.1q-.1 0-.3.1t-.1.3v11.1q0 .2.1.3t.3.2h19.8q.1 0 .3-.2t.1-.3zM24 3.9v14.5q0 .9-.6 1.5t-1.5.7H2.1q-.8 0-1.5-.7T0 18.4V3.9q0-.9.6-1.6t1.5-.6h19.8q.8 0 1.5.6t.6 1.6z' })
    )
  );
};

exports.default = Icon;