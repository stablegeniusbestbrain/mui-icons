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
      _react2.default.createElement('path', { d: 'M19.9 6.2c-.2-.8-.7-1.4-1.4-1.8-.5-.3-1-.4-1.5-.4-.9 0-1.7.4-2.2 1H8C6.3 5 5 6.3 5 8v8c0 1.7 1.3 3 3 3h8c1.7 0 3-1.3 3-3V9.5l.6-1c.4-.7.5-1.6.3-2.3zm-3.8.3c.1-.2.3-.3.5-.4.3-.1.6-.1.9 0 .2.2.4.4.5.6v.4c0 .1-.1.2-.1.3v.1l-4 7c-.2.3-.5.4-.8.5H13c-.3 0-.5-.1-.7-.3l-3-3c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3s.5.1.7.3l1.1 1.1 1 .9.6-1.1 2.7-4.7zM16 17H8c-.6 0-1-.4-1-1V8c0-.5.4-1 1-1h6.7l-2.2 3.7-1.1-1.1C11 9.2 10.5 9 10 9s-1 .2-1.4.6c-.8.8-.8 2 0 2.8l3 3c.4.4.9.6 1.4.6h.3c.6-.1 1.1-.5 1.4-1l2.3-4v5c0 .6-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;