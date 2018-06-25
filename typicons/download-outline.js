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
      _react2.default.createElement('path', { d: 'M21 17c0-.1 0-.2-.1-.3l-2-6c-.1-.4-.5-.7-.9-.7h-.6l.7-.7c1.2-1.1 1.2-3 0-4.2-.8-.8-2-1.1-3.1-.7V3c0-1.7-1.3-3-3-3S9 1.3 9 3v1.4c-1.1-.4-2.3-.1-3.1.7-1.2 1.2-1.2 3.1 0 4.2l.7.7H6c-.4 0-.8.3-.9.7l-2 6c-.1.1-.1.2-.1.3v5c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-5zM7.3 6.5c.2-.2.4-.3.7-.3s.5.1.7.3L11 8.8V3c0-.6.4-1 1-1s1 .4 1 1v5.8l2.3-2.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L12 12.6 7.3 7.9c-.4-.4-.4-1 0-1.4zM6.7 12h1.9l3.4 3.4 3.4-3.4h1.9l1.6 5H5.1l1.6-5zM19 21H5v-3h14v3z' })
    )
  );
};

exports.default = Icon;