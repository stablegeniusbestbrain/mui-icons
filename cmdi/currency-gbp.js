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
      _react2.default.createElement('path', { d: 'M6.5 21v-1.2c.9-.5 1.7-1.2 2.3-2.1.6-.9.9-1.9.9-2.9v-1l-.1-.8H7v-2h2.4c-.1-.8-.2-1.7-.3-2.8.1-1.6.5-2.9 1.5-3.8S12.8 3 14.3 3c.7 0 1.3.1 1.8.2s.9.3 1.2.4l-.5 1.8c-.3-.2-.6-.3-1-.4-.4-.1-.9-.2-1.5-.2-1 .1-1.8.4-2.3 1-.5.7-.7 1.5-.7 2.5l.1 1.5.2 1.2h3.9v2h-3.7c.1 1 0 2-.1 3-.4 1.2-1 2.2-1.9 3H18v2H6.5z' })
    )
  );
};

exports.default = Icon;