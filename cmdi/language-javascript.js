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
      _react2.default.createElement('path', { d: 'M3 3h18v18H3V3zm4.7 15c.4.9 1.2 1.6 2.6 1.6 1.5 0 2.5-.8 2.5-2.6v-5.7h-1.7V17c0 .9-.3 1.1-.9 1.1-.6 0-.8-.4-1.1-.9l-1.4.8zm6-.1c.5.9 1.5 1.7 3.1 1.7s2.8-.8 2.8-2.4c0-1.4-.8-2-2.2-2.6l-.5-.2c-.7-.3-1-.5-1-1 0-.4.3-.8.8-.8s.8.2 1.1.8l1.3-.9c-.6-1-1.3-1.3-2.4-1.3-1.5 0-2.5.9-2.5 2.2 0 1.4.8 2 2.1 2.6l.4.1c.7.4 1.2.6 1.2 1.2 0 .4-.4.8-1.1.8-.9 0-1.3-.4-1.7-1l-1.4.8z' })
    )
  );
};

exports.default = Icon;