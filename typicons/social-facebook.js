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
      _react2.default.createElement('path', { d: 'M13 10h3v3h-3v7h-3v-7H7v-3h3V8.7c0-1.1.4-2.6 1.1-3.5.8-.8 1.7-1.2 2.8-1.2H16v3h-2.1c-.5 0-.9.4-.9.9V10z' })
    )
  );
};

exports.default = Icon;