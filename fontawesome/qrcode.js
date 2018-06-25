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
      _react2.default.createElement('path', { d: 'M7.7 15.4v1.7H6v-1.7h1.7zm0-10.3v1.8H6V5.1h1.7zm10.3 0v1.8h-1.7V5.1H18zM4.3 18.8h5.1v-5.1H4.3v5.1zm0-10.2h5.1V3.4H4.3v5.2zm10.3 0h5.1V3.4h-5.1v5.2zM11.1 12v8.6H2.6V12h8.5zm6.9 6.9v1.7h-1.7v-1.7H18zm3.4 0v1.7h-1.7v-1.7h1.7zm0-6.9v5.1h-5.1v-1.7h-1.7v5.2h-1.7V12H18v1.7h1.7V12h1.7zM11.1 1.7v8.6H2.6V1.7h8.5zm10.3 0v8.6h-8.5V1.7h8.5z' })
    )
  );
};

exports.default = Icon;