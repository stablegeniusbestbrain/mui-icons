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
      _react2.default.createElement('path', { d: 'M14.6 16.7v2.6q0 .5-.4.9t-.9.4h-2.6q-.5 0-.9-.4t-.4-.9v-2.6q0-.5.4-.9t.9-.4h2.6q.5 0 .9.4t.4.9zm0-6.8v2.5q0 .6-.4.9t-.9.4h-2.6q-.5 0-.9-.4t-.4-.9V9.9q0-.6.4-1t.9-.3h2.6q.5 0 .9.3t.4 1zm0-6.9v2.6q0 .5-.4.9t-.9.4h-2.6q-.5 0-.9-.4t-.4-.9V3q0-.5.4-.9t.9-.4h2.6q.5 0 .9.4t.4.9z' })
    )
  );
};

exports.default = Icon;