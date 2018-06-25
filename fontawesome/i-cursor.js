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
      _react2.default.createElement('path', { d: 'M16.3 1.7q-4.3 0-4.3 3v5.6h1.7V12H12v7.3q0 3 4.3 3h.8V24h-.8q-3.7 0-5.2-2-1.5 2-5.1 2h-.9v-1.7H6q4.3 0 4.3-3V12H8.6v-1.7h1.7V4.7q0-3-4.3-3h-.9V0H6q3.6 0 5.1 2 1.5-2 5.2-2h.8v1.7h-.8z' })
    )
  );
};

exports.default = Icon;