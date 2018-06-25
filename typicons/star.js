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
      _react2.default.createElement('path', { d: 'M9.4 9.2l-5.3.5c-.2.1-.4.2-.4.4s0 .4.1.5c1.6 1.4 3.9 3.6 3.9 3.6s-.6 3.1-1 5.2c-.1.2 0 .4.2.5.1.1.3.1.5 0l4.6-2.6 4.6 2.6c.2.1.4.1.5 0 .2-.1.3-.3.2-.5l-1-5.2 3.9-3.6c.1-.1.2-.3.1-.5s-.2-.3-.4-.4c-2.1-.2-5.3-.5-5.3-.5l-2.1-4.9c-.1-.1-.3-.3-.5-.3s-.4.2-.5.3L9.4 9.2z' })
    )
  );
};

exports.default = Icon;