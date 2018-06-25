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
      _react2.default.createElement('path', { d: 'M5 3c1.7 0 3 1.3 3 3S6.7 9 5 9 2 7.7 2 6s1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm5 0h3v6l5-6h4l-5.1 5.8L22 20h-3.6l-3.6-6.8-1.8 1.9V20h-3V5z' })
    )
  );
};

exports.default = Icon;