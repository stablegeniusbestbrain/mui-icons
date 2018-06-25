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
        _react2.default.createElement('path', { d: 'M470 124.837l-98.443-81.78-27.814 32.93 98.442 81.77L470 124.837zM167.192 74.92L139.366 42 42 124.837l27.814 32.92 97.378-82.838zm99.51 97.708H234.6v127.446l101.65 60.54 16.05-26.554-85.6-49.917V172.628zM256 87.665c-107 0-192.6 86.02-192.6 191.166C63.4 383.98 149 470 256 470c105.936 0 192.6-86.02 192.6-191.17 0-105.143-86.664-191.165-192.6-191.165zm0 339.855c-82.393 0-149.8-66.906-149.8-148.688 0-81.777 67.407-148.684 149.8-148.684 82.394 0 149.8 66.906 149.8 148.684 0 82.84-67.406 148.688-149.8 148.688z' })
      )
    )
  );
};

exports.default = Icon;