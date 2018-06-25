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
      _react2.default.createElement('path', { d: 'M20 4h-6v6l2.2-2.2c1.1 1 1.8 2.5 1.8 4.2 0 1-.2 1.9-.7 2.8l1.5 1.4C19.6 15 20 13.6 20 12c0-2.2-.9-4.2-2.4-5.6L20 4zM2.9 5.4l2.3 2.4C4.5 9 4 10.4 4 12c0 2.2.9 4.2 2.4 5.6L4 20h6v-6l-2.2 2.2C6.7 15.2 6 13.7 6 12c0-1 .3-1.9.7-2.8l8.1 8.1c-.3.1-.5.3-.8.4v2c.8-.2 1.5-.5 2.2-.9l2.4 2.3 1.2-1.2L4.1 4.1 2.9 5.4zm7.1.9v-2c-.8.2-1.6.5-2.2.9l1.4 1.5c.3-.1.5-.3.8-.4z' })
    )
  );
};

exports.default = Icon;