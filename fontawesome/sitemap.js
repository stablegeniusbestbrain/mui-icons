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
      _react2.default.createElement('path', { d: 'M24 16.7V21q0 .5-.4.9t-.9.4h-4.3q-.5 0-.9-.4t-.4-.9v-4.3q0-.5.4-.9t.9-.4h1.3v-2.5h-6.8v2.5h1.2q.6 0 1 .4t.3.9V21q0 .5-.3.9t-1 .4H9.9q-.6 0-1-.4t-.3-.9v-4.3q0-.5.3-.9t1-.4h1.2v-2.5H4.3v2.5h1.3q.5 0 .9.4t.4.9V21q0 .5-.4.9t-.9.4H1.3q-.6 0-.9-.4T0 21v-4.3q0-.5.4-.9t.9-.4h1.3v-2.5q0-.7.5-1.2t1.2-.6h6.8V8.6H9.9q-.6 0-1-.4t-.3-.9V3q0-.5.3-.9t1-.4h4.2q.6 0 1 .4t.3.9v4.3q0 .5-.3.9t-1 .4h-1.2v2.5h6.8q.7 0 1.2.6t.5 1.2v2.5h1.3q.6 0 .9.4t.4.9z' })
    )
  );
};

exports.default = Icon;