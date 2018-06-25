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
      _react2.default.createElement('path', { d: 'M22.7 12.9q0 .3-.2.6t-.6.2h-3q0 2.3-.9 3.9l2.7 2.8q.3.3.3.6t-.3.6q-.2.3-.6.3t-.6-.3L16.9 19q-.1 0-.2.1t-.6.4-.8.5-1.1.4-1.3.2v-12h-1.8v12q-.6 0-1.3-.2t-1.2-.5-.9-.5-.5-.4l-.2-.2-2.5 2.8q-.3.3-.6.3-.4 0-.6-.3-.3-.2-.3-.6t.2-.6l2.7-3q-.8-1.5-.8-3.7h-3q-.3 0-.6-.2t-.2-.6.2-.6.6-.3h3V8.1L2.8 5.7q-.2-.2-.2-.6t.2-.6.6-.2.6.2l2.3 2.4h11.4L20 4.5q.2-.2.6-.2t.6.2.2.6-.2.6l-2.3 2.4V12h3q.3 0 .6.3t.2.6zm-6.4-7.8H7.7q0-1.7 1.3-3t3-1.2 3 1.2 1.3 3z' })
    )
  );
};

exports.default = Icon;