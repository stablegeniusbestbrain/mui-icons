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
      _react2.default.createElement('path', { d: 'M13.2 20.6h-2.3q-.2 0-.3-.1t-.1-.4v-4.4H6.6q-.2 0-.3-.1t-.1-.3v-1.4q0-.2.1-.3t.3-.1h3.9v-1.2H6.6q-.2 0-.3-.1t-.1-.3v-1.4q0-.1.1-.3t.3-.1h2.9L5.2 2.4q-.1-.3 0-.5t.4-.2h2.5q.3 0 .4.3l2.9 5.6q.3.6.8 1.7.1-.3.4-.9t.3-.8L15.5 2q.1-.3.4-.3h2.5q.3 0 .4.2.1.2 0 .4l-4.2 7.8h2.9q.2 0 .3.1t.1.3v1.4q0 .2-.1.3t-.3.1h-3.9v1.2h3.9q.2 0 .3.1t.1.3v1.4q0 .2-.1.3t-.3.1h-3.9v4.4q0 .2-.1.3t-.3.2z' })
    )
  );
};

exports.default = Icon;