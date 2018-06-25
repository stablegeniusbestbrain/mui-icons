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
      _react2.default.createElement('path', { d: 'M22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-7.7-4.3c.6.4 1.4.2 1.7-.4.3-.6.1-1.3-.5-1.6-.5-.4-1.3-.2-1.6.4-.3.6-.1 1.3.4 1.6zm-2.4 7.8c-.5 0-1-.1-1.5-.3l-.8 1.5c.7.3 1.5.5 2.3.5.5 0 .9 0 1.4-.2.1-.5.3-.9.8-1.2.5-.2 1-.3 1.4-.1.9-.9 1.5-2 1.6-3.4h-1.7c-.2 1.8-1.7 3.2-3.5 3.2zm0-7c1.8 0 3.3 1.4 3.5 3.2h1.7c-.1-1.4-.7-2.6-1.6-3.4-.4.1-.9.1-1.4-.1-.5-.3-.7-.7-.8-1.2-.5-.2-.9-.2-1.4-.2-.8 0-1.6.2-2.3.5l.8 1.5c.5-.2 1-.3 1.5-.3zM8.4 12c0-1.2.6-2.2 1.5-2.9L9 7.7c-1.1.7-1.8 1.7-2.2 3 .4.3.6.8.6 1.3s-.2 1-.6 1.3c.4 1.3 1.1 2.3 2.2 3l.9-1.4c-.9-.7-1.5-1.7-1.5-2.9zm5.9 4.3c-.5.3-.7 1-.4 1.6.3.6 1.1.8 1.6.4.6-.3.8-1 .5-1.6-.3-.6-1.1-.8-1.7-.4zm-8.5-5.5c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2c.6 0 1.2-.5 1.2-1.2s-.6-1.2-1.2-1.2z' })
    )
  );
};

exports.default = Icon;