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
      _react2.default.createElement('path', { d: 'M6.9 16.7v2.6q0 .5-.4.9t-.9.4H1.3q-.6 0-.9-.4t-.4-.9v-2.6q0-.5.4-.9t.9-.4h4.3q.5 0 .9.4t.4.9zm0-6.8v2.5q0 .6-.4.9t-.9.4H1.3q-.6 0-.9-.4t-.4-.9V9.9q0-.6.4-1t.9-.3h4.3q.5 0 .9.3t.4 1zm8.5 6.8v2.6q0 .5-.3.9t-1 .4H9.9q-.6 0-1-.4t-.3-.9v-2.6q0-.5.3-.9t1-.4h4.2q.6 0 1 .4t.3.9zM6.9 3v2.6q0 .5-.4.9t-.9.4H1.3q-.6 0-.9-.4T0 5.6V3q0-.5.4-.9t.9-.4h4.3q.5 0 .9.4t.4.9zm8.5 6.9v2.5q0 .6-.3.9t-1 .4H9.9q-.6 0-1-.4t-.3-.9V9.9q0-.6.3-1t1-.3h4.2q.6 0 1 .3t.3 1zm8.6 6.8v2.6q0 .5-.4.9t-.9.4h-4.3q-.5 0-.9-.4t-.4-.9v-2.6q0-.5.4-.9t.9-.4h4.3q.6 0 .9.4t.4.9zM15.4 3v2.6q0 .5-.3.9t-1 .4H9.9q-.6 0-1-.4t-.3-.9V3q0-.5.3-.9t1-.4h4.2q.6 0 1 .4t.3.9zM24 9.9v2.5q0 .6-.4.9t-.9.4h-4.3q-.5 0-.9-.4t-.4-.9V9.9q0-.6.4-1t.9-.3h4.3q.6 0 .9.3t.4 1zM24 3v2.6q0 .5-.4.9t-.9.4h-4.3q-.5 0-.9-.4t-.4-.9V3q0-.5.4-.9t.9-.4h4.3q.6 0 .9.4t.4.9z' })
    )
  );
};

exports.default = Icon;