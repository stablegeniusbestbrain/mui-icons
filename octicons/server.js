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
      _react2.default.createElement('path', { d: 'M19.5 9h-15C3.7 9 3 9.7 3 10.5v3c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM6 13.5H4.5v-3H6v3zm3 0H7.5v-3H9v3zm3 0h-1.5v-3H12v3zm3 0h-1.5v-3H15v3zm4.5-12h-15C3.7 1.5 3 2.2 3 3v3c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5zM6 6H4.5V3H6v3zm3 0H7.5V3H9v3zm3 0h-1.5V3H12v3zm3 0h-1.5V3H15v3zm4.5-1.5H18V3h1.5v1.5zm0 12h-15c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM6 21H4.5v-3H6v3zm3 0H7.5v-3H9v3zm3 0h-1.5v-3H12v3zm3 0h-1.5v-3H15v3z' })
    )
  );
};

exports.default = Icon;