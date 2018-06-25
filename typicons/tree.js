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
      _react2.default.createElement('path', { d: 'M20.8 17.4L18.1 14h.9c.4 0 .7-.2.9-.5.2-.4.1-.8-.1-1.1l-7-10c-.3-.4-.9-.5-1.4-.2-.1 0-.1.1-.2.2l-7 10c-.2.3-.3.7-.1 1.1.2.3.5.5.9.5h.9l-2.7 3.4c-.2.3-.3.7-.1 1 .2.4.5.6.9.6h7v3c0 .6.4 1 1 1s1-.4 1-1v-3h7c.4 0 .7-.2.9-.6.2-.3.1-.7-.1-1zM13 17v-5c0-.6-.4-1-1-1s-1 .4-1 1v5H6.1l2.7-3.4c.2-.3.3-.7.1-1-.2-.4-.5-.6-.9-.6H6.9L12 4.7l5.1 7.3H16c-.4 0-.7.2-.9.6-.2.3-.1.7.1 1l2.7 3.4H13z' })
    )
  );
};

exports.default = Icon;