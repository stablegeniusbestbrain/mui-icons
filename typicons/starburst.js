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
      _react2.default.createElement('path', { d: 'M19.1 10.1l1.1-2.4c.1-.1.1-.3 0-.4-.1-.2-.2-.3-.4-.3l-2.6-.2-.2-2.6c0-.2-.1-.3-.2-.4-.2-.1-.4-.1-.5 0l-2.4 1.1-1.5-2.2c-.2-.3-.6-.3-.8 0l-1.5 2.2-2.4-1.1c-.1-.1-.3-.1-.5 0-.1.1-.2.2-.2.4l-.2 2.6-2.6.2c-.2 0-.3.1-.4.3-.1.1-.1.3 0 .4l1.1 2.4-2.2 1.5c-.1.1-.2.2-.2.4s.1.3.2.4l2.2 1.5-1.1 2.4c-.1.1-.1.3 0 .5.1.1.2.2.4.2l2.6.2.2 2.6c0 .2.1.3.3.4.1.1.3.1.4 0l2.4-1.1 1.5 2.2c.1.1.2.2.4.2s.3-.1.4-.2l1.5-2.2 2.4 1.1c.1.1.3.1.4 0s.3-.2.3-.4l.2-2.6 2.6-.2c.2 0 .3-.1.4-.2.1-.2.1-.4 0-.5l-1.1-2.4 2.2-1.5c.1-.1.2-.2.2-.4s-.1-.3-.2-.4l-2.2-1.5z' })
    )
  );
};

exports.default = Icon;