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
      _react2.default.createElement('path', { d: 'M17 5c-.8 0-1.4.3-2 .8l-.2-.2C13.9 4.8 11.2 4 9 4c-1.9 0-2.6.3-3.3.6l-.3.1c-.8.3-1.5 1.2-1.7 2.2L3 12.8c-.1 1.1.5 2.2 1.4 2.5.4.2 2.5.4 3.9.6-.2 1.2-.3 2.4-.3 3.6 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1.9.7-2.7 1.6-3.7.6.7 1.4 1.2 2.4 1.2 1.7 0 3-1.3 3-3V8c0-1.7-1.3-3-3-3zm-6 14.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5c0-1.8.3-3.2.5-4.3l.3-1.4-1.3.2c-.7-.1-4-.5-4.4-.6 0 0-.1-.1-.1-.3l.7-6c0-.2.3-.5.4-.5l.4-.2C7 6.2 7.5 6 9 6c1.9 0 4.1.8 4.6 1.1.2.2.4.6.4.9v5s0 .6-.7 1.3c-.9.9-2.3 2.3-2.3 5.2zm7-5.5c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v6z' })
    )
  );
};

exports.default = Icon;