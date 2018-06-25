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
      _react2.default.createElement('path', { d: 'M6 3c.6 0 1 .4 1 1v.9c1.1-.5 2.5-.9 4-.9 3 0 3 2 5 2 3 0 4-2 4-2v8s-1 2-4 2-3-2-5-2c-3 0-4 2-4 2v7H5V4c0-.6.4-1 1-1zm5 5.8c1.2 0 2.1.6 3 1.1v1.4c.6.4 1.2.7 2 .7 2 0 2-.5 2-.5v-1.2s-1 .2-2 .2c-.8 0-1.4-.3-2-.6V8.6c.6.3 1.2.7 2 .7 2 0 2-.3 2-.3V7.5S17 8 16 8c-.8 0-1.4-.3-2-.7v1.3c-.9-.6-1.8-1.3-3-1.3V6C9 6 7 7.3 7 7.3v1.2s2-1.2 4-1.2v1.5C9 8.8 7 10 7 10v1.5S9 10 11 10V8.8z' })
    )
  );
};

exports.default = Icon;