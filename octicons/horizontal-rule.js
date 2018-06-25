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
      _react2.default.createElement('path', { d: 'M6 10.5h3v3h1.5v-9H9V9H6V4.5H4.5v9H6v-3zm13.5 3v-3H18v3h1.5zm0-4.5V6H18v3h1.5zM15 9V6h3V4.5h-4.5v9H15v-3h3V9h-3zM4.5 19.5h15v-3h-15v3z' })
    )
  );
};

exports.default = Icon;