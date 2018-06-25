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
      _react2.default.createElement('path', { d: 'M9.4 2.6q0-.4-.2-.6t-.6-.3T8 2t-.3.6.3.6.6.2.6-.2.2-.6zm12-.5v4.3q0 .2-.1.4-.1.1-.3.1-.1 0-.1-.1l-6-1.2-.2-.2q-.1-.1-.1-.3h-3.5v1.4q1.5.3 2.5 1.5t1 2.7v10.7q0 .4-.3.6t-.6.3H6.9q-.4 0-.6-.3t-.3-.6V10.7q0-1.4.8-2.5T9 6.6V5.1h-.4q-.8 0-1.6.4t-1.2.7-.9.9-.5.7-.2.3q-.2.5-.8.5-.2 0-.4-.1-.3-.2-.4-.5t.1-.7q0-.1.2-.3t.5-.7.8-1 1.1-.9 1.5-.7q-.4-.5-.4-1.1 0-.9.7-1.5T8.6.4t1.5.7.6 1.5q0 .4-.2.8h4.1q0-.1.1-.2t.2-.2l6-1.3h.1q.2 0 .3.1.1.1.1.3z' })
    )
  );
};

exports.default = Icon;