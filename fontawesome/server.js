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
      _react2.default.createElement('path', { d: 'M1.7 18.9h13.7v-1.8H1.7v1.8zm0-6.9h13.7v-1.7H1.7V12zm21 6q0-.5-.4-.9t-.9-.4-.9.4-.4.9.4.9.9.4.9-.4.4-.9zM1.7 5.1h13.7V3.4H1.7v1.7zm21 6q0-.5-.4-.9t-.9-.3-.9.3-.4.9.4 1 .9.3.9-.3.4-1zm0-6.8q0-.5-.4-.9t-.9-.4-.9.4-.4.9.4.9.9.4.9-.4.4-.9zM24 15.4v5.2H0v-5.2h24zm0-6.8v5.1H0V8.6h24zm0-6.9v5.2H0V1.7h24z' })
    )
  );
};

exports.default = Icon;