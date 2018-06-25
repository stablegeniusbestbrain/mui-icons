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
      _react2.default.createElement('path', { d: 'M6 9V4h7v5h10v7h-5v5h-7v-5H1V9h5zm10 7h-3v3h3v-3zM8 9h3V6H8v3zm-2 5v-3H3v3h3zm12-3v3h3v-3h-3zm-5 0v3h3v-3h-3zm-5 0v3h3v-3H8z' })
    )
  );
};

exports.default = Icon;