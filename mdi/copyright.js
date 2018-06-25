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
      _react2.default.createElement('path', { d: 'M10.1 10.9c0-.4.1-.7.3-.9s.3-.5.6-.6c.2-.2.5-.2.9-.3.2.1.4.1.6.2.2.1.4.2.5.3s.3.4.4.6.1.4.1.6h1.8c0-.5-.1-.9-.3-1.3s-.4-.7-.7-1-.6-.5-1.1-.7-.8-.2-1.3-.2c-.7 0-1.3.1-1.7.4s-.9.5-1.2.9-.6.8-.8 1.3-.2 1.1-.2 1.7v.2c0 .6.1 1.2.2 1.7s.4 1 .7 1.3.8.7 1.2.9 1.1.4 1.7.4c.5 0 1-.1 1.4-.3s.7-.3 1-.6.6-.6.8-.9.3-.8.3-1.2h-1.8c0 .2-.1.4-.2.6s-.2.3-.3.5-.3.2-.5.3c-.2 0-.4.1-.6.1-.4 0-.7-.1-.9-.3-.3-.1-.5-.3-.6-.6s-.3-.5-.3-.9-.1-.6-.1-1v-.2c0-.4 0-.7.1-1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z' })
    )
  );
};

exports.default = Icon;