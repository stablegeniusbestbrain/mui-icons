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
        _react2.default.createElement('path', { d: 'M400 224v-96c0-35.2-28.8-64-64-64H176c-35.2 0-64 28.8-64 64v96H32l52.5 194.3c4.7 17 20.4 29.7 39.1 29.7h264.7c18.7 0 34.4-12.5 39.3-29.5L480 224h-80zm59 16h.1l-12.9 48H368v-48h91zM70.2 304H144v64H87.5l-17.3-64zm89.8 0h88v64h-88v-64zm192-16h-88v-48h88v48zm-104 0h-88v-48h88v48zm0 96v48h-88v-48h88zm16 0h88v48h-88v-48zm0-16v-64h88v64h-88zm104-64h73.9l-17.2 64H368v-64zM128 128c0-12.8 5-24.8 14.1-33.9C151.2 85 163.2 80 176 80h160c12.8 0 24.8 5 33.9 14.1 9.1 9.1 14.1 21.1 14.1 33.9v96H128v-96zm16 112v48H65.9l-13-48H144zm-44 174.1L91.8 384H144v48h-20.4c-11 0-20.7-7.3-23.6-17.9zm312.3.1c-3.1 10.5-12.9 17.8-23.9 17.8H368v-48h52.4l-8.1 30.2z' })
      )
    )
  );
};

exports.default = Icon;