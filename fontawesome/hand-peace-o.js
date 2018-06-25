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
      _react2.default.createElement('path', { d: 'M19 8.7q.8 0 1.4.3 1.9.8 1.9 3v2.4q0 1.2-.3 2.5l-1.2 4.5q-.2 1.2-1.2 1.9t-2.1.7H8.6q-1.4 0-2.5-1t-1-2.4v-5.4L1.9 6.8q-.2-.6-.2-1.2 0-1.4 1-2.5t2.4-1q1.1 0 2 .7t1.2 1.6l.3.5V3.4q0-1.4 1-2.4T12 0t2.4 1 1 2.4v3.5h.7q.9 0 1.7.4T19 8.7zm-2.9-.1q-.5 0-.8.2t-.6.7l-1 2.1-.9 2.1h.7q.7 0 1.2.4t.7 1.1l2-4.5q.2-.3.2-.6 0-.6-.5-1.1t-1-.4zm2.9 1.8q-.3 0-.5.1t-.4.2-.3.4-.2.4-.3.5l-1.7 3.9q-.2.3-.2.6 0 .6.5 1.1t1 .4q.5 0 .8-.2t.6-.7l2.1-4.7q.2-.2.2-.5 0-.7-.5-1.1t-1.1-.4zM3.4 5.6q0 .3.1.6l3.4 8.7v.9l1.3-1.5q.6-.6 1.4-.6h2.7l1.4-3.1V3.4q0-.7-.5-1.2T12 1.7t-1.2.5-.5 1.2V12h-.9L6.8 5q-.2-.5-.7-.8t-1-.3q-.7 0-1.2.5t-.5 1.2zm14.1 16.7q.6 0 1.1-.4t.6-.9l1.1-4.6q.3-.9.3-2v-1.2l-1.9 4.1q-.2.5-.7.8t-1.1.3q-.7 0-1.2-.4t-.7-1.2q-.6.8-1.5.8h-2.8v-.5h2.8q.6 0 1.1-.4t.5-1.1-.5-1-1-.5h-4q-.6 0-1.1.5l-1.6 1.8v4.2q0 .7.5 1.2t1.2.5h8.9z' })
    )
  );
};

exports.default = Icon;