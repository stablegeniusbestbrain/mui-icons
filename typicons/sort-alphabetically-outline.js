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
      _react2.default.createElement('path', { d: 'M5.6 14h2.8L7 11.2zM21 14l2.4-3.2c.7-.9.8-2.1.3-3.1C23.2 6.6 22.1 6 21 6h-6c-1.7 0-3 1.3-3 3 0 .8.3 1.5.8 2h-.3c-.4 0-.7.1-1 .3L9.7 7.7C9.2 6.7 8.2 6 7 6s-2.2.7-2.7 1.7l-4 8c-.3.7-.4 1.5-.1 2.2s.7 1.4 1.5 1.8c.4.2.8.3 1.3.3 1.1 0 2.2-.6 2.7-1.7l.2-.3h2.2l.2.3C8.8 19.4 9.9 20 11 20c.5 0 .9-.1 1.3-.3.3-.1.5-.3.7-.5.5.5 1.2.8 2 .8h6c1.7 0 3-1.3 3-3s-1.3-3-3-3zm-9.6 3.9c-.1.1-.2.1-.4.1-.4 0-.7-.2-.9-.6L9.4 16H4.6l-.7 1.4c-.2.4-.5.6-.9.6-.1 0-.3 0-.4-.1-.5-.3-.7-.9-.5-1.3l4-8c.2-.4.5-.6.9-.6s.7.2.9.6l4 8c.2.4 0 1-.5 1.3zm1.1-3.9c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1h-1zm8.5 4h-6c-.4 0-.7-.2-.9-.6s-.1-.7.1-1L19 10h-4c-.6 0-1-.4-1-1s.4-1 1-1h6c.4 0 .7.2.9.6s.1.7-.1 1L17 16h4c.6 0 1 .4 1 1s-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;