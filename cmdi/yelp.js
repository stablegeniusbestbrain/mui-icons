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
      _react2.default.createElement('path', { d: 'M10.6 2c.6 0 .9.3 1 1l.2 3.1.2 4.2c.1.3 0 .7-.1 1-.3.5-.8.6-1.2.3-.2-.2-.4-.5-.5-.7L6.4 4.6c-.3-.7-.2-1.1.4-1.4.7-.5 2.9-1.2 3.8-1.2zm4.2 12.8l.3.1 3.9 1.4c.6.2.8.6.5 1.3-.4 1.1-1.2 2.1-2.1 2.8-.4.4-.9.4-1.2-.1l-2.3-4c-.4-.7.1-1.5.9-1.5zM4.5 14c0-.7 0-1.4.2-2.1.3-.7.6-.9 1.3-.6l3.6 1.5c.5.2.8.5.7 1 0 .6-.3.8-.8.9l-3.7 1.2c-.7.3-1 .1-1.2-.7-.1-.4-.1-.8-.1-1.2zm7.5 7c-.1.8-.4 1.1-1.2 1-1-.2-2-.6-2.8-1.2-.5-.4-.5-.9-.2-1.3l2.7-3.5c.2-.3.5-.4.9-.3.4.2.6.5.6.9V21zm2.5-7.7c-.8 0-1.3-.8-.9-1.4.9-1.2 1.7-2.4 2.6-3.6.3-.4.7-.5 1.1-.1.9.8 1.6 1.8 2 3 .1.5-.1.9-.5 1l-3.7 1-.6.1z' })
    )
  );
};

exports.default = Icon;