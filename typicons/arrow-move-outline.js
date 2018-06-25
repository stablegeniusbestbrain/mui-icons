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
      _react2.default.createElement('path', { d: 'M22.8 10.6l-9.4-9.4C13 .8 12.5.6 12 .6s-1 .2-1.4.6l-9.4 9.4c-.8.8-.8 2 0 2.8l9.4 9.4c.4.4.9.6 1.4.6s1-.2 1.4-.6l9.4-9.4c.8-.8.8-2 0-2.8zM17 16c-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.3-1.3H13v4.6l1.3-1.3c.2-.2.4-.3.7-.3s.5.1.7.3c.4.4.4 1 0 1.4L12 21.4l-3.7-3.7c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3s.5.1.7.3l1.3 1.3V13H6.4l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L2.6 12l3.7-3.7c.2-.2.4-.3.7-.3s.5.1.7.3c.4.4.4 1 0 1.4L6.4 11H11V6.4L9.7 7.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4L12 2.6l3.7 3.7c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L13 6.4V11h4.6l-1.3-1.3c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3s.5.1.7.3l3.7 3.7-3.7 3.7c-.2.2-.4.3-.7.3zm-1.7-2c-.2.3-.3.6-.3 1-.4 0-.7.1-1 .3V14h1.3zm-6.6 0H10v1.3c-.3-.2-.6-.3-1-.3 0-.4-.1-.7-.3-1zm0-4c.2-.3.3-.6.3-1 .4 0 .7-.1 1-.3V10H8.7zm6.6 0H14V8.7c.3.2.6.3 1 .3 0 .4.1.7.3 1z' })
    )
  );
};

exports.default = Icon;