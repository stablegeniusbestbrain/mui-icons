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
      _react2.default.createElement('path', { d: 'M16.1 12.5c0 1-.1 1.8-.3 2.6-.2.7-.4 1.2-.8 1.7-.3.4-.8.7-1.3.9-.5.2-1.1.3-1.7.3-.6 0-1.2-.1-1.7-.3-.5-.2-.9-.5-1.3-.9-.3-.5-.6-1.1-.8-1.7-.2-.7-.3-1.6-.3-2.6v-2c0-1 .1-1.9.3-2.6.2-.7.4-1.2.8-1.7.4-.4.8-.7 1.3-.9.5-.2 1.1-.3 1.7-.3.6 0 1.2.1 1.7.3.5.2.9.5 1.3.9s.7 1 .8 1.7c.3.7.3 1.5.3 2.6v2zM14 10.1c0-.6 0-1.1-.1-1.6-.1-.4-.2-.8-.4-1-.2-.3-.4-.5-.6-.6-.3-.2-.6-.2-.9-.2-.3 0-.6 0-.9.2s-.4.3-.6.5c-.2.3-.3.7-.4 1.1s-.1 1-.1 1.6v2.7c0 .6 0 1.2.1 1.6.1.5.2.8.4 1.1s.4.5.7.6.5.2.8.2c.3 0 .6 0 .9-.2s.4-.3.6-.6c.2-.3.3-.6.4-1.1.1-.4.1-1 .1-1.6v-2.7z' })
    )
  );
};

exports.default = Icon;