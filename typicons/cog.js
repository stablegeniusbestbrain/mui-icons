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
      _react2.default.createElement('path', { d: 'M9.4 17.5l.4 1.5c.1.6.6 1 1.2 1h1c.6 0 1.1-.4 1.2-1l.4-1.5c.1-.5.7-.8 1.2-.6l1.5.4c.5.1 1.2-.1 1.4-.6l.5-.9c.3-.5.2-1.2-.2-1.5l-1.1-1.1c-.4-.4-.4-1 0-1.4l1.1-1.1c.4-.3.5-1 .2-1.5l-.5-.9c-.2-.5-.9-.7-1.4-.6l-1.5.4c-.5.2-1.1-.1-1.2-.7L13.2 6c-.1-.6-.6-1-1.2-1h-1c-.6 0-1.1.4-1.2 1l-.4 1.4c-.1.6-.7.9-1.2.7l-1.5-.4c-.5-.1-1.2.1-1.4.6l-.5.9c-.3.5-.2 1.2.2 1.5l1.1 1.1c.4.4.4 1 0 1.4L5 14.3c-.4.3-.5 1-.2 1.5l.5.9c.2.5.9.7 1.4.6l1.5-.4c.5-.2 1.1.1 1.2.6zm2.1-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z' })
    )
  );
};

exports.default = Icon;