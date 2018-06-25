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
      _react2.default.createElement('path', { d: 'M22 17l-3 3v-2h-6v-2h6v-2l3 3zM9 5c1.7 0 3 1.3 3 3v3c0 1.7-1.3 3-3 3s-3-1.3-3-3V8c0-1.7 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1zm7-2c1.7 0 3 1.3 3 3v3c0 1.7-1.3 3-3 3s-3-1.3-3-3V8c0-1.7 1.3-3 3-3zm0 2c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1zM4 12c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z' })
    )
  );
};

exports.default = Icon;