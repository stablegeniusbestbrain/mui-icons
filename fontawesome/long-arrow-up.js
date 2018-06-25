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
      _react2.default.createElement('path', { d: 'M17.1 6.6q-.1.3-.4.3h-3v16.7q0 .2-.1.3t-.3.1h-2.6q-.2 0-.3-.1t-.1-.3V6.9h-3q-.3 0-.4-.3t.1-.5L11.7 1q.1-.1.3-.1.1 0 .3.1L17 6.1q.2.2.1.5z' })
    )
  );
};

exports.default = Icon;