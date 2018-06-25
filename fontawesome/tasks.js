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
      _react2.default.createElement('path', { d: 'M13.7 18.9h8.6v-1.8h-8.6v1.8zM8.6 12h13.7v-1.7H8.6V12zm8.5-6.9h5.2V3.4h-5.2v1.7zM24 16.3v3.4q0 .4-.3.6t-.6.3H.9q-.4 0-.6-.3t-.3-.6v-3.4q0-.4.3-.6t.6-.3h22.2q.4 0 .6.3t.3.6zm0-6.9v3.5q0 .3-.3.6t-.6.2H.9q-.4 0-.6-.2t-.3-.6V9.4q0-.3.3-.6t.6-.2h22.2q.4 0 .6.2t.3.6zm0-6.8V6q0 .3-.3.6t-.6.3H.9q-.4 0-.6-.3T0 6V2.6q0-.4.3-.6t.6-.3h22.2q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;