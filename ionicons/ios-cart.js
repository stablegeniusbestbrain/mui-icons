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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M160 400c-13.248 0-24 10.752-24 24s10.752 24 24 24 24-10.752 24-24-10.752-24-24-24zm224.5 0c-13.248 0-24 10.752-24 24s10.752 24 24 24 24-10.752 24-24-10.752-24-24-24zM448 128L123.177 95.646c-1.628-6.972-4.37-14.66-11.838-20.667C102.024 67.49 86.98 64 64 64v16c18.614 0 31.167 2.507 37.312 7.448 4.458 3.585 5.644 8.423 7.165 15.99l-.024.003 42.052 233.64c2.413 14.42 7.194 25.208 13.29 32.985C171.044 379.312 180.534 384 192 384h240v-16H192c-4.727 0-19.136.123-25.75-33.755l-5.428-30.16L432 256l16-128z' })
      )
    )
  );
};

exports.default = Icon;