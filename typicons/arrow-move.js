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
      _react2.default.createElement('path', { d: 'M17.7 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.3 1.3H13V6.4l1.3 1.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L12 2.6 8.3 6.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0L11 6.4V11H6.4l1.3-1.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L2.6 12l3.7 3.7c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L6.4 13H11v4.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.7 3.7 3.7-3.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 17.6V13h4.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l3.7-3.7-3.7-3.7z' })
    )
  );
};

exports.default = Icon;