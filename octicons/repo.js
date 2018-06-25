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
      _react2.default.createElement('path', { d: 'M9 13.5H7.5V12H9v1.5zM9 9H7.5v1.5H9V9zm0-3H7.5v1.5H9V6zm0-3H7.5v1.5H9V3zm12-1.5v18c0 .8-.7 1.5-1.5 1.5H12v3l-2.2-2.2L7.5 24v-3h-3c-.8 0-1.5-.7-1.5-1.5v-18C3 .7 3.7 0 4.5 0h15c.8 0 1.5.7 1.5 1.5zm-1.5 15h-15v3h3V18H12v1.5h7.5v-3zm0-15H6V15h13.5V1.5z' })
    )
  );
};

exports.default = Icon;