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
      _react2.default.createElement('path', { d: 'M17.4 7.6q0-1.4-.9-2.2t-2.3-.8H10v6h4.2q1.5 0 2.3-.9t.9-2.1zm3.2 0q0 2.6-1.7 4.2t-4.4 1.6H10V15h6.7q.2 0 .3.1t.1.3v1.7q0 .2-.1.4t-.3.1H10v2.5q0 .2-.2.4t-.3.1H7.3q-.2 0-.3-.1t-.1-.4v-2.5h-3q-.2 0-.4-.1t-.1-.4v-1.7q0-.2.1-.3t.4-.1h3v-1.6h-3q-.2 0-.4-.1t-.1-.3v-2q0-.2.1-.3t.4-.1h3V2.1q0-.1.1-.3t.3-.1h7.2q2.7 0 4.4 1.6t1.7 4.3z' })
    )
  );
};

exports.default = Icon;