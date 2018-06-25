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
      _react2.default.createElement('path', { d: 'M16.6 12.7c0 .5-.1 1-.2 1.4-.1.4-.3.8-.5 1-.3.3-.5.5-.9.6-.3.1-.6.2-1 .2s-.7-.1-1-.2c-.4-.1-.6-.3-.8-.6-.3-.2-.4-.6-.6-1-.1-.4-.2-.9-.2-1.4v-1.4c0-.5.1-1 .2-1.4.1-.4.3-.8.5-1 .3-.3.5-.5.9-.6.3-.1.6-.2 1-.2s.7.1 1 .2c.4.1.6.3.8.6.3.2.5.6.6 1 .1.4.2.9.2 1.4v1.4zm-1.5-1.6l-.1-.8-.2-.6c-.1-.1-.2-.2-.4-.3l-.4-.1-.5.1-.3.3-.2.6-.1.8v1.8l.1.8.2.6c.1.1.2.2.4.3l.4.1.5-.1.3-.3.2-.6.1-.8v-1.8zm6.4-.3c.6.7.6 1.7 0 2.4l-8.3 8.3c-.7.7-1.7.7-2.4 0l-8.3-8.3c-.7-.7-.7-1.7 0-2.4l8.3-8.3c.7-.7 1.7-.7 2.4 0l8.3 8.3zM20.3 12L12 3.7 3.7 12l8.3 8.3 8.3-8.3zm-9.9 3.8H8.9V10l-1.8.5V9.3l3.1-1.1h.2v7.6z' })
    )
  );
};

exports.default = Icon;