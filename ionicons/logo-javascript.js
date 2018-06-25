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
        _react2.default.createElement('path', { d: 'M208 88h-80v212.5c0 52.58-18.032 67.26-49.412 67.26-14.705 0-27.948-2.52-38.25-6.063L32 423.904C46.7 428.966 69.26 432 86.907 432 158.955 432 208 398.13 208 301.02V88zm174.463-8C305.02 80 256 123.998 256 182.154c0 50.083 37.75 81.44 92.64 101.665 39.7 14.157 55.393 26.807 55.393 47.538 0 22.756-18.14 37.425-52.448 37.425-31.863 0-60.79-10.64-80.394-21.255v-.02L256 410.727c18.64 10.637 53.44 21.254 91.167 21.254C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.14-17.19-61.27-26.794-61.27-48.54 0-17.2 15.688-32.87 48.043-32.87 31.846 0 53.744 10.707 66.505 17.29l19.125-64c-20-8.78-46.937-16-84.662-16z' })
      )
    )
  );
};

exports.default = Icon;