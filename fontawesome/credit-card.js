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
      _react2.default.createElement('path', { d: 'M22.7 1.7q.9 0 1.5.6t.7 1.6v16.2q0 .9-.7 1.6t-1.5.6H1.3q-.9 0-1.5-.6t-.7-1.6V3.9q0-.9.7-1.6t1.5-.6h21.4zM1.3 3.4q-.2 0-.3.2t-.1.3v3h22.2v-3q0-.2-.1-.3t-.3-.2H1.3zm21.4 17.2q.2 0 .3-.2t.1-.3V12H.9v8.1q0 .2.1.3t.3.2h21.4zM2.6 18.9v-1.8H6v1.8H2.6zm5.1 0v-1.8h5.2v1.8H7.7z' })
    )
  );
};

exports.default = Icon;