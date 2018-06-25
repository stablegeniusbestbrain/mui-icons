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
      _react2.default.createElement('path', { d: 'M.8 10.4q0 .7-.5 1.1-.4.4-1.2.4h-.2v-3h.2q.8 0 1.2.4.5.4.5 1.1zm23.7-.9q0 .7-.8.7h-.3V8.9h.3q.8 0 .8.6zm-22.8.9q0-1-.7-1.6t-1.7-.6H-2v4.4h1.3q1 0 1.6-.5.8-.7.8-1.7zm.4 2.2h.8V8.2h-.8v4.4zm4.2-1.3q0-.6-.2-.9t-1-.5q-.4-.1-.6-.3t-.1-.3q0-.2.2-.3t.4-.2q.4 0 .7.4l.5-.6q-.5-.5-1.3-.5-.6 0-1 .4t-.4.9q0 .4.2.7t.9.5q.5.2.6.3.3.1.3.4 0 .3-.2.5t-.5.1q-.7 0-1-.5l-.5.5q.6.9 1.5.9.7 0 1.1-.5t.4-1zm3.8 1.2v-1q-.5.4-1.1.4-.6 0-1.1-.4t-.4-1.1q0-.6.4-1.1T9 8.9q.6 0 1.1.5V8.3q-.6-.2-1.1-.2-1 0-1.7.7t-.7 1.6.7 1.7 1.7.6q.5 0 1.1-.2zm16.5 8.1v-7.1q-.9.5-2 1.1t-3.1 1.6T17 18t-5.5 1.8-6.8 1.6h21q.4 0 .6-.2t.3-.6zM15.2 10.4q0-1-.7-1.7T12.7 8t-1.7.7-.7 1.7.7 1.7 1.7.8 1.8-.8.7-1.7zm2 2.4l1.9-4.6h-.9l-1.2 3-1.2-3h-1l1.9 4.6h.5zm2.3-.2H22v-.7h-1.6v-1.2h1.5v-.8h-1.5v-1H22v-.7h-2.5v4.4zm5.3 0h1l-1.4-1.8q1-.3 1-1.3 0-.6-.4-1t-1.1-.3h-1.3v4.4h.8v-1.8h.2zm2.6-9.1v17q0 .7-.5 1.3t-1.2.5H-1.7q-.7 0-1.2-.5t-.5-1.3v-17q0-.7.5-1.3t1.2-.5h27.4q.7 0 1.2.5t.5 1.3z' })
    )
  );
};

exports.default = Icon;