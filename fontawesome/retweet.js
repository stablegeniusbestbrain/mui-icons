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
      _react2.default.createElement('path', { d: 'M16.3 20.1q0 .2-.1.3t-.3.2H3q-.1 0-.2-.1t-.1 0-.1-.2 0-.1 0-.2v-8H0q-.3 0-.6-.3t-.3-.6q0-.3.2-.5l4.3-5.1q.3-.3.7-.3t.6.3l4.3 5.1q.2.2.2.5 0 .4-.2.6t-.6.3H6v5.1h7.7q.2 0 .3.2l2.2 2.6q.1.1.1.2zm8.6-5.5q0 .3-.2.5l-4.3 5.2q-.3.3-.7.3t-.6-.3l-4.3-5.2q-.2-.2-.2-.5 0-.4.2-.6t.6-.3H18V8.6h-7.7q-.2 0-.3-.2L7.8 5.8q-.1-.1-.1-.2 0-.2.1-.3t.3-.2H21q.1 0 .2.1t.1.1.1.1 0 .1 0 .2v8H24q.3 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;