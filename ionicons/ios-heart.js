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
        _react2.default.createElement('path', { d: 'M359.385 80C319.965 80 277.17 97.6 256 132.8 234.83 97.6 192.034 80 152.615 80 83.647 80 32 123.238 32 195.78c0 31.287 12.562 71.923 40.923 105.656 28.36 33.735 45.23 51.7 100.153 88C228 425.738 256 432 256 432s28-6.262 82.924-42.564c54.923-36.3 71.794-54.265 100.153-88C467.437 267.703 480 227.066 480 195.78 480 123.237 428.353 80 359.385 80z' })
      )
    )
  );
};

exports.default = Icon;