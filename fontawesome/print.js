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
      _react2.default.createElement('path', { d: 'M6 20.6h12v-3.5H6v3.5zM6 12h12V6.9h-2.1q-.6 0-1-.4t-.3-.9V3.4H6V12zm15.4.9q0-.4-.2-.6t-.6-.3-.6.3-.3.6.3.6.6.2.6-.2.2-.6zm1.7 0v5.5q0 .2-.1.3t-.3.2h-3V21q0 .5-.4.9t-.9.4H5.6q-.6 0-.9-.4t-.4-.9v-2.1h-3q-.2 0-.3-.2t-.1-.3v-5.5q0-1.1.7-1.9t1.8-.7h.9V3q0-.5.4-.9t.9-.4h9q.5 0 1.2.3t1 .6l2 2.1q.4.3.6 1t.3 1.2v3.4h.9q1 0 1.8.7t.7 1.9z' })
    )
  );
};

exports.default = Icon;