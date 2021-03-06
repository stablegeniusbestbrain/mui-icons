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
      _react2.default.createElement('path', { d: 'M6 3H3v3c1.7 0 3-1.3 3-3zm8 0h-2c0 5-4 9-9 9v2c6.1 0 11-4.9 11-11zm-4 0H8c0 2.8-2.2 5-5 5v2c3.9 0 7-3.1 7-7zm0 18h2c0-5 4-9 9-9v-2c-6.1 0-11 4.9-11 11zm8 0h3v-3c-1.7 0-3 1.3-3 3zm-4 0h2c0-2.8 2.2-5 5-5v-2c-3.9 0-7 3.1-7 7z' })
    )
  );
};

exports.default = Icon;