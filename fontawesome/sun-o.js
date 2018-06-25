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
      _react2.default.createElement('path', { d: 'M19.7 12q0-1.6-.6-3t-1.6-2.5T15 4.9t-3-.6-3 .6-2.5 1.6T4.9 9t-.6 3 .6 3 1.6 2.5T9 19.1t3 .6 3-.6 2.5-1.6 1.6-2.5.6-3zm3.7 3.7q0 .2-.3.3l-3.9 1.3v4.1q0 .2-.1.3-.2.1-.4.1l-3.9-1.3-2.5 3.3q-.1.2-.3.2t-.3-.2l-2.5-3.3-3.9 1.3q-.2 0-.4-.1-.1-.1-.1-.3v-4.1L.9 16q-.3-.1-.3-.3-.1-.2 0-.4L3.1 12 .6 8.7q-.1-.2 0-.4 0-.2.3-.3l3.9-1.3V2.6q0-.2.1-.3.2-.1.4-.1l3.9 1.3L11.7.2q.1-.2.3-.2t.3.2l2.5 3.3 3.9-1.3q.2 0 .4.1.1.1.1.3v4.1L23.1 8q.3.1.3.3.1.2 0 .4L20.9 12l2.5 3.3q.1.2 0 .4z' })
    )
  );
};

exports.default = Icon;