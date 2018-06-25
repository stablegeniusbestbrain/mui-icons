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
      _react2.default.createElement('path', { d: 'M19.5 14.6c1.6 1.4 1.9 2.1 2 2.2.6 1.1-.7 1.2-.7 1.2h-2.6s-.6.1-1.3-.4c-1-.7-1.9-2.4-2.6-2.1-.7.2-.7 1.7-.7 1.7s0 .2-.1.4c-.2.2-.6.1-.6.1h-1.1s-2.6.3-4.8-2c-2.4-2.6-4.6-7.6-4.6-7.6s-.1-.3 0-.4c.2-.2.6-.2.6-.2h2.7s.3 0 .5.2c.1.1.2.3.2.3s.5 1.1 1 2.1c1.2 2 1.7 2.5 2.1 2.2.6-.3.4-2.8.4-2.8s0-.9-.3-1.3c-.2-.3-.6-.4-.8-.4-.2 0 .1-.4.4-.6.5-.2 1.4-.2 2.4-.2.8 0 1.1.1 1.4.1.9.3.6 1.1.6 3.3 0 .7-.1 1.6.4 1.9.2.2.7.1 2-2.1.6-1.1 1.1-2.3 1.1-2.3s.1-.2.2-.3c.2-.1.4-.1.4-.1h2.9s.9-.1 1 .3c.2.4-.3 1.4-1.5 2.9-2 2.6-2.2 2.4-.6 3.9z' })
    )
  );
};

exports.default = Icon;