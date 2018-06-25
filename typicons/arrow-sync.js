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
      _react2.default.createElement('path', { d: 'M19.5 12.5c0-2-.6-3.4-2.1-4.9-.4-.4-1-.4-1.4 0-.4.4-.4 1.1 0 1.4 1.1 1.1 1.5 2.1 1.5 3.5s-.6 2.8-1.6 3.9c-1 1-2.1 1.5-3.4 1.6l1.2-1.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8.6 19l3.7 3.7c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L12.4 20c1.9-.1 3.5-.8 4.9-2.2 1.4-1.4 2.2-3.3 2.2-5.3zm-13 0c0-1.5.6-2.8 1.6-3.9 1-1 2.1-1.5 3.5-1.6l-1.3 1.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L15.4 6l-3.7-3.7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L11.6 5c-1.9.1-3.5.8-4.9 2.2-1.4 1.4-2.2 3.3-2.2 5.3 0 1.9.6 3.4 2.1 4.8.2.2.4.3.7.3s.5-.1.7-.3c.4-.3.4-1 0-1.4-1.1-1.1-1.5-2-1.5-3.4z' })
    )
  );
};

exports.default = Icon;