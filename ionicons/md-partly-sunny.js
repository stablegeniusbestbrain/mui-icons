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
        _react2.default.createElement('path', { d: 'M248.03 116.81l24.68-24.678 19.232 19.234-24.678 24.677zM176 125.7c-45.3 0-82.3 37-82.3 82.3 0 17.5 5.5 33.7 14.9 47 15.3-13 33.9-22.6 54.7-27.6l13.2-16.6c13.6-17.1 30.7-30.2 50.8-38.9 6.1-2.6 12.4-4.8 19-6.6-14.5-23.7-40.6-39.6-70.3-39.6zM162 64h28v41h-28zM32 194h41v28H32zm49.6 82.8l-.8-.8-24.7 24.7 19.2 19.2 24.7-24.7zM79.29 92.13l24.677 24.678-19.233 19.233-24.678-24.677zM405.6 288.6C394.7 233.4 346.2 192 288 192c-34 0-65.1 11.9-86.5 38.8 29.4 2.2 56.7 13 77.8 33.9 15.6 15.6 26.6 34.6 32.1 55.3h-28.7c-13.1-37.3-48-64-90.6-64-5.1 0-12.3.6-17.7 1.7C128.6 267.1 96 305 96 352c0 53 43 96 96 96h208c44.2 0 80-35.8 80-80 0-42.2-32.8-76.5-74.4-79.4z' })
      )
    )
  );
};

exports.default = Icon;