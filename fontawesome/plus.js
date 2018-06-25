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
      _react2.default.createElement('path', { d: 'M21.4 9.9v2.5q0 .6-.3.9t-1 .4h-5.5v5.6q0 .5-.4.9t-.9.4h-2.6q-.5 0-.9-.4t-.4-.9v-5.6H3.9q-.6 0-1-.4t-.3-.9V9.9q0-.6.3-1t1-.3h5.5V3q0-.5.4-.9t.9-.4h2.6q.5 0 .9.4t.4.9v5.6h5.5q.6 0 1 .3t.3 1z' })
    )
  );
};

exports.default = Icon;