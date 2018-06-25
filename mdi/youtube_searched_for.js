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
      _react2.default.createElement('path', { d: 'M17 14h-.8l-.3-.3c1-1.1 1.6-2.6 1.6-4.2C17.5 5.9 14.6 3 11 3S4.5 6 4.5 9.5H2l3.8 4 4.2-4H6.5C6.5 7 8.5 5 11 5s4.5 2 4.5 4.5-2 4.5-4.5 4.5c-.6 0-1.2-.1-1.8-.4l-1.5 1.5c1 .6 2.1.9 3.3.9 1.6 0 3.1-.6 4.2-1.6l.3.3v.8l5 5L22 19l-5-5z' })
    )
  );
};

exports.default = Icon;