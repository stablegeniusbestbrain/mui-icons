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
      _react2.default.createElement('path', { d: 'M3.4 19.3v2.6q0 .1-.1.3t-.3.1H.4q-.2 0-.3-.1t-.1-.3v-2.6q0-.2.1-.3t.3-.1H3q.2 0 .3.1t.1.3zm5.2-1.7v4.3q0 .1-.1.3t-.4.1H5.6q-.2 0-.3-.1t-.2-.3v-4.3q0-.2.2-.3t.3-.2h2.5q.2 0 .4.2t.1.3zm5.1-3.5v7.8q0 .1-.1.3t-.3.1h-2.6q-.2 0-.3-.1t-.1-.3v-7.8q0-.1.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3zM18.9 9v12.9q0 .1-.2.3t-.3.1h-2.5q-.2 0-.4-.1t-.1-.3V9q0-.2.1-.3t.4-.1h2.5q.2 0 .3.1t.2.3zM24 2.1v19.8q0 .1-.1.3t-.3.1H21q-.2 0-.3-.1t-.1-.3V2.1q0-.1.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;