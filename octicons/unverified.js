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
      _react2.default.createElement('path', { d: 'M23.5 10.6l-1.6-2c-.3-.3-.4-.7-.5-1.2l-.3-2.5a2.3 2.3 0 0 0-2-2l-2.5-.3c-.5-.1-.9-.2-1.2-.5l-2-1.6c-.8-.7-2-.7-2.8 0l-2 1.6c-.3.3-.7.4-1.2.5l-2.5.2c-1.1.2-1.9 1-2 2l-.3 2.6c-.1.4-.2.8-.5 1.2l-1.6 2c-.7.8-.7 2 0 2.8l1.6 2c.3.3.4.7.5 1.2l.3 2.5c.1 1.1.9 1.9 1.9 2l2.6.3c.4 0 .8.2 1.2.5l2 1.6c.8.7 2 .7 2.8 0l2-1.6c.3-.3.7-.4 1.2-.5l2.5-.3c1.1-.1 1.9-.9 2-2l.3-2.5c0-.5.2-.8.5-1.2l1.6-2c.7-.8.7-2 0-2.8zm-10 6.7c0 .4-.3.7-.7.7h-1.5c-.5 0-.8-.3-.8-.7v-1.5c0-.5.3-.8.8-.8h1.5c.4 0 .7.3.7.8v1.5zm2.3-7.4c0 .3-.2.5-.4.7-.2.3-.2.3-.5.6-.2.2-.5.4-.8.7l-.4.4c-.1.1-.2.2-.3.4-.1.1-.1.3-.2.4v.4h-2.5v-.7c.1-.3.2-.6.3-.8 0-.2.2-.4.3-.6l.6-.6c.4-.3.6-.5.8-.8.1-.3.3-.6.3-.9 0-.4-.1-.6-.3-.8-.2-.2-.5-.3-.9-.3-.1 0-.3 0-.5.1-.1 0-.2.1-.3.2-.2.1-.2.2-.3.3a.6.6 0 0 0-.2.4h-3c0-.6.2-.8.4-1.2.3-.4.6-.8 1-1 .3-.3.8-.5 1.3-.6.5-.1 1-.2 1.6-.2.7 0 1.3.1 1.8.2s.9.3 1.3.6c.3.2.6.6.8.9.2.4.3.9.3 1.3s0 .7-.1.9h-.1z' })
    )
  );
};

exports.default = Icon;