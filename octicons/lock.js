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
      _react2.default.createElement('path', { d: 'M9 19.5H7.5V18H9v1.5zm12-9V21c0 .8-.7 1.5-1.5 1.5h-15c-.8 0-1.5-.7-1.5-1.5V10.5C3 9.7 3.7 9 4.5 9H6V6c0-3.3 2.7-6 6-6s6 2.7 6 6v3h1.5c.8 0 1.5.7 1.5 1.5zM8.7 9h6.6V6c0-1.8-1.5-3.3-3.3-3.3-1.8 0-3.3 1.5-3.3 3.3v3zm10.8 1.5H6V21h13.5V10.5zM9 12H7.5v1.5H9V12zm0 3H7.5v1.5H9V15z' })
    )
  );
};

exports.default = Icon;