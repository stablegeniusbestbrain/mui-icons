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
      _react2.default.createElement('path', { d: 'M14.7 16.7v2.8q0 .9-.5.9-.3 0-.6-.3v-4q.3-.3.6-.3.5 0 .5.9zm4.5 0v.6H18v-.6q0-.9.6-.9t.6.9zM6.3 13.8h1.4v-1.3H3.6v1.3H5v7.6h1.3v-7.6zm3.9 7.6h1.2v-6.6h-1.2v5q-.4.6-.8.6-.2 0-.3-.3v-5.3H7.9V20q0 .7.1 1 .2.5.8.5.6 0 1.4-.8v.7zm5.7-2v-2.6q0-1-.1-1.4-.2-.7-1-.7-.6 0-1.2.7v-2.9h-1.2v8.9h1.2v-.7q.6.8 1.2.8.8 0 1-.8.1-.3.1-1.3zm4.5-.1v-.2h-1.2v.8q-.1.5-.5.5-.7 0-.7-.9v-1.2h2.4v-1.4q0-1-.3-1.5-.5-.7-1.4-.7-1 0-1.5.7-.4.5-.4 1.5v2.3q0 1.1.4 1.6.6.7 1.5.7t1.4-.7q.3-.4.3-.8v-.7zM12.3 7V4.2q0-.9-.6-.9t-.6.9V7q0 1 .6 1t.6-1zm9.6 10.1q0 3.1-.3 4.7-.2.8-.8 1.3t-1.4.6Q17 24 12 24t-7.4-.3q-.8-.1-1.4-.6t-.8-1.3q-.3-1.5-.3-4.7 0-3.1.3-4.7.2-.8.8-1.3t1.4-.7q2.4-.2 7.4-.2t7.4.2q.8.1 1.4.7t.8 1.3q.3 1.5.3 4.7zM8.6 0h1.3L8.3 5.3V9H7V5.3q-.2-.9-.9-2.8-.4-1.4-.8-2.5h1.4l.9 3.5zm4.9 4.5v2.3q0 1.1-.4 1.6-.5.7-1.4.7-.9 0-1.4-.7-.4-.5-.4-1.6V4.5q0-1.1.4-1.6.5-.7 1.4-.7.9 0 1.4.7.4.5.4 1.6zM18 2.3V9h-1.2v-.8q-.7.9-1.4.9-.6 0-.8-.5-.1-.3-.1-1V2.3h1.2v5.4q.1.3.3.3.4 0 .8-.6V2.3H18z' })
    )
  );
};

exports.default = Icon;