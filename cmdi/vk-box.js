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
      _react2.default.createElement('path', { d: 'M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm12.2 11c-1.1-1.1-1-.9.4-2.8.9-1.1 1.2-1.8 1.1-2.1-.1-.3-.7-.2-.7-.2h-2.1-.3c-.1.1-.2.3-.2.3s-.3.8-.7 1.6c-1 1.6-1.4 1.7-1.5 1.6-.4-.3-.3-.9-.3-1.4 0-1.6.2-2.2-.4-2.4-.3-.1-.4-.1-1-.1-.8 0-1.4 0-1.8.2-.2.1-.4.4-.3.4.1 0 .5.1.6.3.2.3.2.9.2.9s.2 1.9-.3 2.1c-.2.1-.6-.2-1.5-1.6-.4-.8-.7-1.6-.7-1.6L7.5 9l-.3-.2-2 .1s-.3 0-.4.1c-.1.1 0 .3 0 .3s1.5 3.7 3.3 5.5c1.6 1.7 3.5 1.5 3.5 1.5h.8s.3.1.4-.1c.1-.1.1-.3.1-.3s0-1.1.5-1.2c.5-.2 1.2 1 1.9 1.5.5.4.9.3.9.3h1.9s1-.1.5-.9c0 0-.2-.5-1.4-1.6z' })
    )
  );
};

exports.default = Icon;