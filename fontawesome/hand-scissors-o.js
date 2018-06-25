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
      _react2.default.createElement('path', { d: 'M14.4 22.3H12q-2.2 0-3-1.9-.3-.7-.3-1.4-.9-.4-1.4-1.2t-.4-1.7v-.7H3.4q-1.4 0-2.4-1T0 12t1-2.4 2.4-1h1.5l-.5-.3q-1-.3-1.6-1.2t-.7-2q0-1.4 1-2.4t2.5-1q.6 0 1.2.2l8.4 3.2h5.4q1.4 0 2.4 1t1 2.5v8.9q0 1.2-.7 2.1t-1.9 1.2L16.9 22q-1.3.3-2.5.3zm-.7-9.5l-2.1.9-2.1 1q-.4.2-.7.6t-.2.8q0 .6.4 1t1.1.5q.3 0 .6-.2l4.5-2q-.6-.2-1.1-.7t-.4-1.2v-.7zm4.3 4.1q0-.6-.4-1t-1.1-.5q-.3 0-.6.2L12 17.3q-.4.2-.5.3t-.4.2-.4.3-.2.4-.1.5q0 .7.4 1.1t1.1.5q.3 0 .5-.2l4.7-2.1q.4-.2.7-.6t.2-.8zm-3.1-10L6.2 3.5q-.3-.1-.6-.1-.7 0-1.2.5t-.5 1.2q0 .6.3 1t.8.6l7 2.7v.9H3.4q-.7 0-1.2.5T1.7 12t.5 1.2 1.2.5h7.2l3.1-1.4V9.6q0-.8.6-1.4l1.5-1.3h-.9zm-.5 13.7q1.1 0 2-.3l4.6-1.1q.6-.2.9-.6t.4-1.1V8.6q0-.7-.5-1.2t-1.2-.5h-4.2l-1.8 1.6q-.5.5-.5 1.1v4q0 .6.5 1t1 .5 1.1-.5.4-1.1v-2.8h.5v2.8q0 .9-.8 1.5.7.1 1.2.7t.4 1.2q0 .6-.3 1.1t-.8.7l-4.1 1.9h1.2z' })
    )
  );
};

exports.default = Icon;