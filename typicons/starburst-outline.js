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
      _react2.default.createElement('path', { d: 'M21.6 11.2l-1.9-1.3 1-2c.1-.3.1-.6 0-.9-.2-.3-.5-.5-.8-.5l-2.3-.1-.1-2.3c0-.3-.2-.6-.5-.8-.3-.1-.6-.1-.9 0l-2 1-1.3-1.9c-.3-.5-1.3-.5-1.6 0L9.9 4.3l-2-1c-.3-.1-.6-.1-.9 0-.3.2-.5.5-.5.8l-.1 2.3-2.3.1c-.3 0-.6.2-.8.5s-.1.6 0 .9l1 2-1.9 1.3c-.2.2-.4.5-.4.8s.2.6.4.8l1.9 1.3-1 2c-.1.3-.1.6 0 .9s.5.5.8.5l2.3.1.1 2.3c0 .3.2.6.5.8s.6.1.9 0l2-1 1.3 1.9c.2.2.5.4.8.4s.6-.2.8-.4l1.3-1.9 2 1c.3.1.6.1.9 0 .3-.2.5-.5.5-.8l.1-2.3 2.3-.1c.3 0 .6-.2.8-.5s.1-.6 0-.9l-1-2 1.9-1.3c.2-.2.4-.5.4-.8 0-.3-.2-.6-.4-.8zm-4.1 3l.7 1.4-1.6.1c-.5 0-.9.4-.9.9l-.1 1.6-1.4-.7c-.5-.2-1 0-1.3.4l-.9 1.3-.9-1.3c-.2-.3-.5-.5-.8-.5-.2 0-.3.1-.5.1l-1.4.7-.1-1.6c0-.5-.4-.9-.9-.9l-1.6-.1.7-1.4c.2-.5.1-1-.4-1.3L4.8 12l1.3-.9c.5-.3.6-.8.4-1.3l-.7-1.4 1.6-.1c.5 0 .9-.4.9-.9l.1-1.6 1.4.7c.5.2 1 .1 1.3-.4l.9-1.3.9 1.3c.3.5.8.6 1.3.4l1.4-.7.1 1.6c0 .5.4.9.9.9l1.6.1-.7 1.4c-.2.5 0 1 .4 1.3l1.3.9-1.3.9c-.5.3-.6.8-.4 1.3z' })
    )
  );
};

exports.default = Icon;