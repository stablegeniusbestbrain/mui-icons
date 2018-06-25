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
      _react2.default.createElement('path', { d: 'M16.7 10.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4.3.4.5.8.5 1.3s-.2.9-.5 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3c.7-.7 1.1-1.7 1.1-2.7s-.4-2-1.1-2.7zm2-2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4.9.9 1.4 2.1 1.4 3.3 0 1.2-.5 2.4-1.4 3.3-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3c1.3-1.3 2-2.9 2-4.7 0-1.8-.7-3.5-2-4.7zm2-2c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4 1.4 1.4 2.2 3.3 2.2 5.3s-.8 3.9-2.2 5.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3c1.8-1.8 2.8-4.2 2.8-6.7s-1-4.9-2.8-6.7zm-8.6-.5c-.4 0-.9.2-1.3.5L8.1 8.1c-.7.5-2.2.9-3.1.9-1.7 0-3 1.3-3 3v2c0 1.7 1.3 3 3 3 .9 0 2.4.4 3.1.9l2.7 1.8c.4.3.9.5 1.3.5.9 0 1.9-.7 1.9-2.2V8c0-1.5-1-2.2-1.9-2.2zM5 15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1 1.2 0 2.9-.5 4-1.1v6.2C7.9 15.5 6.2 15 5 15zm7 3v.1h-.1L10 16.8V9.2l1.9-1.3h.1V18z' })
    )
  );
};

exports.default = Icon;