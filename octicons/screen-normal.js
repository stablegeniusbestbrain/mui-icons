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
      _react2.default.createElement('path', { d: 'M4.5 6h-3V4.5h3v-3H6v3C6 5.3 5.3 6 4.5 6zm0 12h-3v1.5h3v3H6v-3c0-.8-.7-1.5-1.5-1.5zM18 15c0 .8-.7 1.5-1.5 1.5h-9c-.8 0-1.5-.7-1.5-1.5V9c0-.8.7-1.5 1.5-1.5h9c.8 0 1.5.7 1.5 1.5v6zm-3-4.5H9v3h6v-3zm3 9v3h1.5v-3h3V18h-3c-.8 0-1.5.7-1.5 1.5zm1.5-15v-3H18v3c0 .8.7 1.5 1.5 1.5h3V4.5h-3z' })
    )
  );
};

exports.default = Icon;