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
      _react2.default.createElement('path', { d: 'M9.4 18.4V9q0-.2-.1-.3T9 8.6h-.9q-.1 0-.3.1t-.1.3v9.4q0 .2.1.3t.3.2H9q.2 0 .3-.2t.1-.3zm3.5 0V9q0-.2-.2-.3t-.3-.1h-.8q-.2 0-.3.1t-.2.3v9.4q0 .2.2.3t.3.2h.8q.2 0 .3-.2t.2-.3zm3.4 0V9q0-.2-.1-.3t-.3-.1H15q-.2 0-.3.1t-.1.3v9.4q0 .2.1.3t.3.2h.9q.1 0 .3-.2t.1-.3zM9 5.1h6l-.6-1.5q-.1-.1-.3-.2H9.9l-.2.2zm12.4.5v.8q0 .2-.1.3t-.3.2h-1.3v12.7q0 1.1-.6 1.9t-1.5.8H6.4q-.9 0-1.5-.8t-.6-1.9V6.9H3q-.2 0-.3-.2t-.1-.3v-.8q0-.2.1-.3t.3-.2h4.1l1-2.2q.2-.5.7-.8t1.1-.4h4.2q.6 0 1.1.4t.7.8l1 2.2H21q.2 0 .3.2t.1.3z' })
    )
  );
};

exports.default = Icon;