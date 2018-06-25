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
      _react2.default.createElement('path', { d: 'M24 8.6q0 .3-.3.6L16.9 16q-.3.3-.6.3t-.6-.3-.3-.6V12h-3q-1.3 0-2.3.1t-2.1.3-1.8.5-1.4 1-1.1 1.3-.6 1.9-.2 2.4v1.6q0 .1.1.4t0 .3q0 .2-.1.4t-.3.1q-.2 0-.4-.2-.1-.2-.2-.3t-.2-.4-.1-.4Q0 17.2 0 15q0-2.7.7-4.5 2.2-5.4 11.7-5.4h3V1.7q0-.3.3-.6t.6-.2.6.2L23.7 8q.3.2.3.6z' })
    )
  );
};

exports.default = Icon;