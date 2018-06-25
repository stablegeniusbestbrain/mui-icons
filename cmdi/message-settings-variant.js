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
      _react2.default.createElement('path', { d: 'M13.5 10c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.7 1.5 1.5zM22 4v12c0 1.1-.9 2-2 2H6l-4 4V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-5.2 7.3l-1.1-.8V10v-.5l1.1-.8c.1-.1.1-.2 0-.3l-1-1.8c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.1 0-.2.1-.2.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.2-.5c-.2 0-.3 0-.3.1l-1 1.7c-.1.1-.1.3 0 .4l1.1.8c-.1.3-.1.7 0 1l-1.1.8c-.1.1-.1.2-.1.3l1 1.8c.1.1.2.1.4.1l1.2-.5c.3.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.6-.3.9-.5l1.2.5c.1 0 .3 0 .3-.1l1-1.8c.1-.1.1-.2 0-.3z' })
    )
  );
};

exports.default = Icon;