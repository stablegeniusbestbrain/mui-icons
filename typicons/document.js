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
      _react2.default.createElement('path', { d: 'M19.7 7.3l-4-4c-.2-.2-.4-.3-.7-.3H7C5.3 3 4 4.3 4 6v12c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V8c0-.3-.1-.5-.3-.7zm-2.1.7h-1.1c-.8 0-1.5-.7-1.5-1.5V5.4L17.6 8zM17 19H7c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h7v1.5C14 7.9 15.1 9 16.5 9H18v9c0 .6-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;