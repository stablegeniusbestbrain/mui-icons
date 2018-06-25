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
      _react2.default.createElement('path', { d: 'M17 20c-.3 0-.6-.1-.8-.1-.7-.4-1.2-.9-1.7-2.4-.5-1.6-1.4-2.3-2.4-3-.8-.6-1.6-1.3-2.3-2.6C9.3 11 9 9.9 9 9c0-2.8 2.2-5 5-5s5 2.2 5 5h2c0-3.9-3.1-7-7-7S7 5.1 7 9c0 1.3.4 2.7 1.1 3.9.9 1.7 2 2.5 2.8 3.2.8.6 1.4 1 1.7 2 .6 1.8 1.4 2.8 2.8 3.6.5.2 1 .3 1.6.3 2.2 0 4-1.8 4-4h-2c0 1.1-.9 2-2 2zM7.6 2.6L6.2 1.2C4.2 3.2 3 6 3 9s1.2 5.8 3.2 7.8l1.4-1.4C6 13.7 5 11.5 5 9s1-4.7 2.6-6.4zM11.5 9c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5z' })
    )
  );
};

exports.default = Icon;