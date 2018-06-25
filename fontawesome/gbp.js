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
      _react2.default.createElement('path', { d: 'M18.8 15.2v4.9q0 .2-.1.4t-.3.1H5.6q-.2 0-.3-.1t-.2-.4v-2q0-.1.2-.3t.3-.1h1.3v-5.1H5.6q-.2 0-.3-.2t-.1-.3v-1.7q0-.2.1-.3t.3-.1h1.3V7q0-2.3 1.6-3.8t4.2-1.5q2.5 0 4.5 1.7.1.1.2.3t-.1.3l-1.4 1.7q-.1.1-.3.1-.2.1-.3-.1-.1 0-.4-.2T14 5t-1.2-.2q-1.2 0-1.9.6t-.7 1.7V10h4.1q.2 0 .3.1t.1.3v1.7q0 .2-.1.3t-.3.2h-4.1v5.1h5.6v-2.5q0-.1.1-.3t.3-.1h2.2q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;