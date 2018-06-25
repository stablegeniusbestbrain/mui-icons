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
        _react2.default.createElement('path', { d: 'M255.7 106.6h-.2c-25 0-45.5-20.3-45.5-45.3S230.4 16 255.5 16 301 36.3 301 61.3c0 12.1-4.7 23.5-13.3 32-8.5 8.6-19.9 13.3-32 13.3zM221.2 496c-14.4 0-29-10.5-29-30.4l1-277.6h-6v105c0 9.3-4 15.1-7.4 18.3-4.3 4.1-10.1 6.4-16.2 6.4s-11.9-2.3-16.2-6.4c-3.4-3.2-7.4-8.9-7.4-18.3V171.4c0-13.8 5.4-27.8 14.8-38.4 10.4-11.6 24.6-18 40-18h122.3c15.4 0 29.6 6.4 40 18.1 9.4 10.6 14.8 24.5 14.8 38.3V293c0 7.3-2.7 13.8-7.6 18.3-4.4 4-10.3 6.2-16.5 6.2s-12.1-2.2-16.5-6.2c-4.9-4.5-7.6-11-7.6-18.3V188h-5v277.6c0 19.7-15.4 30.4-29.8 30.4-13.4 0-28.3-9.3-29.4-29.8V325h-8v140.9c-.7 19.7-15.8 30.1-30.3 30.1z' })
      )
    )
  );
};

exports.default = Icon;