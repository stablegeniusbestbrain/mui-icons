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
      _react2.default.createElement('path', { d: 'M2 4h4V2H2C.9 2 0 2.9 0 4v4h2V4zm20-2h-4v2h4v4h2V4c0-1.1-.9-2-2-2zM2 16H0v4c0 1.1.9 2 2 2h4v-2H2v-4zm20 4h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM4 8v8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2zm2 8v-4h12v4H6zm12-8v2H6V8h12z' })
    )
  );
};

exports.default = Icon;