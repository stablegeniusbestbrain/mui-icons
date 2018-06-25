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
      _react2.default.createElement('path', { d: 'M10.7 11.6v-6q0-.2-.1-.3t-.3-.2-.3.2-.1.3v6q0 .2.1.3t.3.1.3-.1.1-.3zm9 4.7q0 .3-.2.6t-.6.2h-5.8l-.7 6.5q0 .2-.1.3t-.3.1q-.4 0-.4-.4l-1-6.5H5.1q-.3 0-.6-.2t-.2-.6q0-1.7 1-3T7.7 12V5.1q-.7 0-1.2-.5T6 3.4t.5-1.2 1.2-.5h8.6q.7 0 1.2.5t.5 1.2-.5 1.2-1.2.5V12q1.3 0 2.4 1.3t1 3z' })
    )
  );
};

exports.default = Icon;