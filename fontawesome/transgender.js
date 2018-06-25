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
      _react2.default.createElement('path', { d: 'M15.4.4q0-.2.1-.3t.4-.1h3.8q.4 0 .6.3t.3.6v3.8q0 .2-.1.3t-.4.1h-.8q-.2 0-.3-.1t-.1-.3V2.9l-3.4 3.4q1.6 2.2 1.6 4.8 0 3-1.9 5.2t-4.9 2.5v1.8h1.3q.2 0 .3.1t.1.3v.9q0 .1-.1.3t-.3.1h-1.3v1.3q0 .2-.1.3t-.3.1H9q-.2 0-.3-.1t-.1-.3v-1.3H7.3q-.2 0-.3-.1t-.1-.3V21q0-.2.1-.3t.3-.1h1.3v-1.8q-2-.2-3.7-1.4t-2.4-3-.8-3.9Q2 7.8 3.9 5.8t4.6-2.3q1.6-.2 3.1.2t2.6 1.4l3.5-3.4h-1.8q-.2 0-.4-.1t-.1-.3V.4zm-6 16.7q2.5 0 4.3-1.7t1.7-4.3-1.7-4.2-4.3-1.8-4.2 1.8-1.8 4.2 1.8 4.3 4.2 1.7z' })
    )
  );
};

exports.default = Icon;