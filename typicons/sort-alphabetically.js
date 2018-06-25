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
      _react2.default.createElement('path', { d: 'M10.9 16.6l-4-8c-.3-.7-1.5-.7-1.8 0l-4 8c-.2.4 0 1 .5 1.3.4.2 1 0 1.3-.5l.7-1.4h4.8l.7 1.4c.2.4.5.6.9.6.2 0 .3 0 .4-.1.5-.3.7-.9.5-1.3zM4.6 14L6 11.2 7.4 14H4.6zM22 18h-6c-.4 0-.7-.2-.9-.6s-.1-.7.1-1L20 10h-4c-.6 0-1-.4-1-1s.4-1 1-1h6c.4 0 .7.2.9.6s.1.7-.1 1L18 16h4c.6 0 1 .4 1 1s-.4 1-1 1zm-8-4h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;