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
        _react2.default.createElement('path', { d: 'M255.7 106.6h-.2c-25 0-45.5-20.3-45.5-45.3S230.4 16 255.5 16 301 36.3 301 61.3c0 12.1-4.7 23.5-13.3 32-8.5 8.6-19.9 13.3-32 13.3zm-.2-74.6c-16.2 0-29.4 13.1-29.4 29.3s13.2 29.3 29.4 29.3h.2c7.8 0 15.2-3 20.7-8.6 5.5-5.5 8.6-12.9 8.6-20.7-.1-16.2-13.3-29.3-29.5-29.3zm-34.3 464c-14.4 0-29-10.5-29-30.4l1-277.6h-6v105c0 9.3-4 15.1-7.4 18.3-4.3 4.1-10.1 6.4-16.2 6.4s-11.9-2.3-16.2-6.4c-3.4-3.2-7.4-8.9-7.4-18.3V171.4c0-13.8 5.4-27.8 14.8-38.4 10.4-11.6 24.6-18 40-18h122.3c15.4 0 29.6 6.4 40 18.1 9.4 10.6 14.8 24.5 14.8 38.3V293c0 7.3-2.7 13.8-7.6 18.3-4.4 4-10.3 6.2-16.5 6.2-6.2 0-12.1-2.2-16.5-6.2-4.9-4.5-7.6-11-7.6-18.3V188h-5v277.6c0 19.7-15.4 30.4-29.8 30.4-13.4 0-28.3-9.3-29.4-29.8V325h-8v140.9c-.7 19.7-15.8 30.1-30.3 30.1zm-42-324h22.1c2.1 0 4.2.8 5.7 2.4s2.4 3.5 2.3 5.7l-1 285.6c0 10.6 6.7 14.4 12.9 14.4 6.8 0 13.8-4.5 14.2-14.6V317c0-4.4 3.6-8 8-8h24.1c4.4 0 8 3.6 8 8v148.5c.7 10.7 7.3 14.5 13.4 14.5 6.6 0 13.7-4.5 13.7-14.4V180c0-4.4 3.6-8 8-8h21.1c4.4 0 8 3.6 8 8v113c0 8.1 6.7 8.5 8 8.5 1.3 0 8-.4 8-8.5V171.4c0-19.5-15.6-40.4-38.8-40.4H194.8c-18.6 0-38.8 15.4-38.8 40.4V293c0 8.2 6.3 8.6 7.5 8.6s7.5-.4 7.5-8.6V180c.1-4.4 3.7-8 8.2-8z' })
      )
    )
  );
};

exports.default = Icon;