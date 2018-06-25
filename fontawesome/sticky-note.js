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
      _react2.default.createElement('path', { d: 'M15.4 16.7v5.6H3q-.5 0-.9-.4t-.4-.9V3q0-.5.4-.9t.9-.4h18q.5 0 .9.4t.4.9v12.4h-5.6q-.5 0-.9.4t-.4.9zm1.7.4h5.1q-.2 1.1-.8 1.8l-2.5 2.5q-.7.6-1.8.8v-5.1z' })
    )
  );
};

exports.default = Icon;