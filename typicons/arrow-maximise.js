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
      _react2.default.createElement('path', { d: 'M15 4c-.6 0-1 .4-1 1s.4 1 1 1h1.6l-3.3 3.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L18 7.4V9c0 .6.4 1 1 1s1-.4 1-1V4h-5zm-5.7 9.3L6 16.6V15c0-.6-.4-1-1-1s-1 .4-1 1v5h5c.6 0 1-.4 1-1s-.4-1-1-1H7.4l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0zM7 12c.6 0 1-.4 1-1V8h3c.6 0 1-.4 1-1s-.4-1-1-1H6v5c0 .6.4 1 1 1zm10 0c-.6 0-1 .4-1 1v3h-3c-.6 0-1 .4-1 1s.4 1 1 1h5v-5c0-.6-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;