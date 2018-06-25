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
      _react2.default.createElement('path', { d: 'M21 15h1.5v4.5c0 .8-.7 1.5-1.5 1.5h-4.5v-1.5H21V15zM3 15H1.5v4.5c0 .8.7 1.5 1.5 1.5h4.5v-1.5H3V15zM3 4.5h4.5V3H3c-.8 0-1.5.7-1.5 1.5V9H3V4.5zM4.5 6h15v12h-15V6zm3 9h9V9h-9v6zm9-12v1.5H21V9h1.5V4.5c0-.8-.7-1.5-1.5-1.5h-4.5z' })
    )
  );
};

exports.default = Icon;