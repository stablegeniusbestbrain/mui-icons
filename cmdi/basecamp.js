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
      _react2.default.createElement('path', { d: 'M3.4 15.6v-.2c.1-.2.1-.4.2-.6.2-.6.6-1.2.9-1.8l.6-.9c.2-.3.3-.6.6-.8.3-.5.7-1 1.3-1.1.8-.3 1.4.5 1.8 1 .3.3.6.6.9.8.2 0 .4.1.5.1.3 0 .5-.2.7-.4.6-.4 1-1 1.4-1.5.5-.7.9-1.3 1.4-1.8.2-.2.5-.5.8-.6.1-.1.3-.1.4 0 .1 0 .1.1.2.1l.2.2c.6.4 1.1.9 1.6 1.4.4.4.8.9 1.2 1.4.4.4.7.9 1.1 1.4.3.6.7 1.3 1 1.9.3.6.7 1.3.3 1.9v.1c-.6 1-1.6 1.6-2.6 2-1.3.5-2.6.7-3.9.8-1.3.1-2.7.1-4.1-.1-1.2-.1-2.4-.3-3.5-.7-1-.4-1.9-1-2.6-1.8-.1-.2-.2-.4-.4-.6v-.1-.1zm-1.3.9c.1.2.3.4.4.6.4.4.7.8 1.1 1.1.9.6 1.8 1.1 2.8 1.4 1.2.4 2.4.6 3.6.7 1.5.1 2.9.1 4.3 0 1.3-.2 2.6-.4 3.8-.9 1.1-.5 2.1-1.1 3-1.9l.6-.6c.2-.2.3-.5.3-.7 0-.3 0-.6-.1-.9-.1-.4-.1-.7-.2-1-.1-.1-.1-.2-.1-.4-.3-1.4-.8-2.7-1.5-4-.5-1.1-1.2-2.1-2-3.1-.8-.8-1.7-1.6-2.7-2.1-.5-.3-1.1-.5-1.6-.7-.4-.1-.7-.2-1-.3h-1.7c-.2.1-.3.1-.5.1l-.9.3c-.7.3-1.2.6-1.8 1-1 .7-1.9 1.6-2.7 2.6-.8 1.1-1.5 2.3-2 3.6-.5 1.3-.9 2.7-1.1 4.2-.1.1-.1.3-.1.5v.4l.1.1z' })
    )
  );
};

exports.default = Icon;