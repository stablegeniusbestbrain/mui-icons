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
      _react2.default.createElement('path', { d: 'M15.9 17.1c-.1.1-.4.2-.6 0-.9-.7-1.1-1-1.5-1.7-1.5 1.5-2.6 1.9-4.5 1.9-2.2 0-4-1.4-4-4.2 0-2.1 1.2-3.6 2.9-4.3 1.4-.7 3.5-.8 5-1v-.3c0-.7.1-1.4-.3-2-.3-.5-.9-.7-1.5-.7-1 0-1.9.6-2.2 1.7 0 .2-.2.4-.4.4l-2.6-.2c-.2-.1-.5-.3-.4-.6C6.4 3 9.2 2 11.8 2c1.3 0 3 .3 4 1.3C17.1 4.6 17 6.2 17 7.9v4.2c0 1.3.5 1.8 1 2.5.2.2.2.5 0 .7l-2.1 1.8zm-2.7-6.5V10c-1.9 0-4 .4-4 2.7 0 1.1.6 1.9 1.7 1.9.7 0 1.4-.4 1.8-1.2.6-.9.5-1.8.5-2.8zm7 8.9C18 21.1 14.8 22 12.1 22c-3.8 0-7.2-1.4-9.8-3.8-.2-.1-.1-.4.2-.2 2.8 1.6 6.2 2.6 9.8 2.6 2.4 0 5.1-.5 7.5-1.6.4-.1.7.3.4.5zm.9-1c-.3-.4-1.9-.2-2.6-.1-.2 0-.2-.1 0-.3 1.2-.9 3.3-.6 3.5-.3.2.3-.1 2.3-1.2 3.3-.2.2-.4.1-.3-.1.3-.7.8-2.1.6-2.5z' })
    )
  );
};

exports.default = Icon;