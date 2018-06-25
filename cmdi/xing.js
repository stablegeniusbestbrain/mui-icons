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
      _react2.default.createElement('path', { d: 'M17.7 2c-.5 0-.6.3-.8.5 0 0-6.2 11.1-6.4 11.4l4.1 7.5c.1.3.3.6.8.6h2.9c.1 0 .3-.1.3-.2.1-.1.1-.3 0-.4l-4-7.5L21 2.6v-.4c-.1-.1-.2-.2-.4-.2M5.5 5.9c-.1 0-.3.1-.3.2-.1.2-.1.3 0 .5L7.1 10l-3 5.4c-.1.1-.1.3 0 .4 0 .1.2.2.3.2h2.9c.5 0 .7-.3.8-.5l3.1-5.6-2-3.4c-.1-.3-.3-.6-.8-.6' })
    )
  );
};

exports.default = Icon;