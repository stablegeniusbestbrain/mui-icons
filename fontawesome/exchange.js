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
      _react2.default.createElement('path', { d: 'M24 15.9v2.5q0 .2-.1.3t-.3.2H5.1v2.5q0 .2-.1.3t-.3.2q-.1 0-.3-.2L.1 17.4q-.1-.1-.1-.3 0-.1.1-.3l4.3-4.3q.1-.1.3-.1.2 0 .3.2t.1.3v2.5h18.5q.1 0 .3.2t.1.3zm0-7.3q0 .2-.1.3l-4.3 4.3q-.1.1-.3.1-.2 0-.3-.1t-.1-.3v-2.6H.4q-.1 0-.3-.1T0 9.9V7.3q0-.2.1-.3t.3-.1h18.5V4.3q0-.2.1-.3t.3-.1q.1 0 .3.1l4.3 4.3q.1.1.1.3z' })
    )
  );
};

exports.default = Icon;