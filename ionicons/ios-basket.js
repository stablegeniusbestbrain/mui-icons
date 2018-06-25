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
        _react2.default.createElement('path', { d: 'M400 224v-96c0-35.2-28.8-64-64-64H176c-35.2 0-64 28.8-64 64v96H32l52.5 194.3c4.7 17 20.4 29.7 39.1 29.7h264.7c18.7 0 34.4-12.5 39.3-29.5L480 224h-80zm-272-96c0-12.8 5-24.8 14.1-33.9C151.2 85 163.2 80 176 80h160c12.8 0 24.8 5 33.9 14.1 9.1 9.1 14.1 21.1 14.1 33.9v96H128v-96zm313.9 176H368v64h56.7l-4.3 16H368v48h-16v-48h-88v48h-16v-48h-88v48h-16v-48H91.8l-4.3-16H144v-64H70.2l-4.3-16H144v-48h16v48h88v-48h16v48h88v-48h16v48h78.2l-4.3 16z' }),
        _react2.default.createElement('path', { d: 'M264 304h88v64h-88zm-104 0h88v64h-88z' })
      )
    )
  );
};

exports.default = Icon;