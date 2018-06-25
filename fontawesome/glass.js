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
      _react2.default.createElement('path', { d: 'M22.8 2.5q0 .5-.6 1L13.7 12v10.3H18q.3 0 .6.2t.3.6-.3.6-.6.3H6q-.3 0-.6-.3t-.3-.6.3-.6.6-.2h4.3V12L1.8 3.5q-.6-.5-.6-1 0-.3.3-.5t.5-.2.6-.1h18.8q.3 0 .6.1t.5.2.3.5z' })
    )
  );
};

exports.default = Icon;