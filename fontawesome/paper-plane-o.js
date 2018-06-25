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
      _react2.default.createElement('path', { d: 'M23.6.1q.5.4.4.9l-3.4 20.6q-.1.4-.5.6-.2.1-.4.1-.1 0-.3-.1l-7.1-2.9-4 4.4q-.2.3-.6.3-.2 0-.3-.1-.2 0-.4-.3t-.1-.5v-6L.5 14.5q-.5-.2-.5-.7 0-.6.4-.8L22.7.1q.5-.3.9 0zM19 20.2l3-17.7L2.8 13.6l4.5 1.8 11.6-8.5-6.4 10.6z' })
    )
  );
};

exports.default = Icon;