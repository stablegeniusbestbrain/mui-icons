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
      _react2.default.createElement('path', { d: 'M7.2 8.8c-.2-.5-.3-1.1-.3-1.7 0-.6.1-1.2.4-1.7.2-.5.6-.9 1.1-1.3.4-.3 1-.6 1.7-.8.6-.2 1.4-.3 2.1-.3.9 0 1.6.1 2.2.3.7.3 1.3.6 1.7 1 .5.4.9.9 1.1 1.4.3.6.4 1.2.4 1.8h-3c0-.3-.1-.6-.2-.8-.1-.3-.2-.5-.4-.7-.2-.2-.5-.3-.8-.5-.3 0-.6-.1-1-.1s-.8 0-1 .1c-.3.1-.6.2-.8.4-.2.1-.3.3-.4.5-.1.2-.2.5-.2.7 0 .5.3.9.8 1.2.4.3.8.5 1.4.7H7.4c-.1-.1-.1-.2-.2-.2zM21 12v-2H3v2h9.6c.2.1.4.1.6.2.3.2.6.3.8.5.3.2.4.4.5.6 0 .2.1.4.1.7 0 .2-.1.4-.2.6-.1.2-.2.4-.4.6-.2.1-.4.2-.7.3-.3.1-.6.1-1 .1s-.8 0-1.2-.1-.6-.2-.9-.4c-.2-.2-.4-.5-.6-.8-.1-.3-.2-.7-.2-1.2h-3c0 .6.1 1.2.2 1.6.2.5.4.9.7 1.2.3.4.6.7 1 .9.3.3.8.5 1.2.7.4.2.9.3 1.4.4.5.1.9.1 1.4.1.8 0 1.5-.1 2.2-.3s1.2-.4 1.7-.8c.4-.3.8-.7 1-1.2s.4-1.1.4-1.7c0-.6-.1-1.2-.3-1.7 0-.1-.1-.2-.2-.3H21z' })
    )
  );
};

exports.default = Icon;