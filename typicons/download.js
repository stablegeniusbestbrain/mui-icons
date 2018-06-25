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
      _react2.default.createElement('path', { d: 'M16.7 7.4c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3L13 9.7V3c0-.6-.4-1-1-1s-1 .4-1 1v6.7L8.7 7.4c-.2-.2-.4-.3-.7-.3s-.5.1-.7.3c-.4.4-.4 1 0 1.4l4.7 4.7 4.7-4.7c.4-.4.4-1 0-1.4zM21 16c0-.1 0-.2-.1-.3l-2-6c-.1-.4-.5-.7-.9-.7h-.2c-.1.2-.2.4-.4.5L15.9 11h1.4l1.6 5H5.1l1.6-5h1.4L6.6 9.5c-.2-.1-.3-.3-.4-.5H6c-.4 0-.8.3-.9.7l-2 6c-.1.1-.1.2-.1.3v5c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-5z' })
    )
  );
};

exports.default = Icon;