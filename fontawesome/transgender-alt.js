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
      _react2.default.createElement('path', { d: 'M17.1.4q0-.2.2-.3t.3-.1h3.8q.4 0 .6.3t.3.6v3.8q0 .2-.1.3t-.3.1H21q-.2 0-.3-.1t-.1-.3V2.9l-3.4 3.4q1.7 2.2 1.7 4.8 0 3-2 5.2T12 18.8v1.8h1.3q.2 0 .3.1t.1.3v.9q0 .1-.1.3t-.3.1H12v1.3q0 .2-.1.3t-.3.1h-.9q-.2 0-.3-.1t-.1-.3v-1.3H9q-.2 0-.3-.1t-.1-.3V21q0-.2.1-.3t.3-.1h1.3v-1.8q-2.9-.3-4.9-2.5t-2-5.2q0-2.6 1.7-4.8l-.7-.7-1.3 1.5q-.2.1-.3.2t-.3-.1l-.7-.6q-.1-.1-.1-.3t.1-.3l1.4-1.6-1.5-1.5v1.8q0 .2-.1.3t-.3.1H.4Q.2 5.1.1 5T0 4.7V.9Q0 .5.3.3T.9 0h3.8q.2 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1H2.9l1.5 1.4 1.1-1.2q.1-.1.3-.2t.3.1l.7.6q.1.1.1.3t-.1.3L5.6 4.4l.7.7q2.2-1.7 4.8-1.7T16 5.1l3.4-3.4h-1.8q-.2 0-.3-.1t-.2-.3V.4zm-6 16.7q2.5 0 4.3-1.7t1.7-4.3-1.7-4.2-4.3-1.8-4.2 1.8-1.8 4.2 1.8 4.3 4.2 1.7z' })
    )
  );
};

exports.default = Icon;