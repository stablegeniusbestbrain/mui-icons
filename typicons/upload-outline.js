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
      _react2.default.createElement('path', { d: 'M21 17c0-.1 0-.2-.1-.3l-2-6c0-.3-.3-.5-.5-.6.9-1.2.8-2.9-.3-3.9L12 .1 5.9 6.2c-1.1 1-1.2 2.7-.3 3.9-.2.1-.5.3-.6.6l-2 6V22c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-5zM7.3 7.6L12 2.9l4.7 4.7c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L13 6.7v5.8c0 .6-.4 1-1 1s-1-.4-1-1V6.7L8.7 9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4zM6.7 12H9v.5c0 1.7 1.3 3 3 3s3-1.3 3-3V12h2.3l1.6 5H5.1l1.6-5zM5 21v-3h14v3H5z' })
    )
  );
};

exports.default = Icon;