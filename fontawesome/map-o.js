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
      _react2.default.createElement('path', { d: 'M25.3.1q.4.3.4.8v18.8q0 .3-.1.5t-.4.3l-8.6 3.4q-.3.2-.6 0l-8.3-3.3-8.2 3.3q-.2.1-.4.1t-.4-.1q-.4-.3-.4-.8V4.3q0-.3.1-.5t.4-.3L7.4.1q.3-.2.6 0l8.3 3.3L24.5.1q.5-.2.8 0zM8.1 2v17l7.8 3V5zM0 4.9v17L7.3 19V2zm24 14.2v-17L16.7 5v17z' })
    )
  );
};

exports.default = Icon;