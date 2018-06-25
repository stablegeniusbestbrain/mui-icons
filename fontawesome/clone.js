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
      _react2.default.createElement('path', { d: 'M22.3 21.9V7.3q0-.2-.1-.3t-.3-.1H7.3q-.2 0-.3.1t-.1.3v14.6q0 .1.1.3t.3.1h14.6q.1 0 .3-.1t.1-.3zM24 7.3v14.6q0 .8-.6 1.5t-1.5.6H7.3q-.9 0-1.5-.6t-.7-1.5V7.3q0-.9.7-1.5t1.5-.7h14.6q.8 0 1.5.7t.6 1.5zm-5.1-5.2v2.2h-1.8V2.1q0-.1-.1-.3t-.3-.1H2.1q-.1 0-.3.1t-.1.3v14.6q0 .2.1.3t.3.1h2.2v1.8H2.1q-.8 0-1.5-.7T0 16.7V2.1Q0 1.3.6.6T2.1 0h14.6q.9 0 1.5.6t.7 1.5z' })
    )
  );
};

exports.default = Icon;