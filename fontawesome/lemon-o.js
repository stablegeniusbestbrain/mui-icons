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
      _react2.default.createElement('path', { d: 'M20.6 11.1q0-.6-.1-1.6t-.3-1.2q-.1-.5-.2-.6t-.1-.5-.1-.7q0-.3.1-.9t.1-.9q0-.5-.2-.7H18.9q-.5 0-.8.1-.8 0-2.4-.3t-2.3-.4q-.6 0-1.3.2t-1.1.3-1.2.5q-1.9.7-2.7 1.3-1.3 1-2.2 2.6t-1.1 3.1-.4 3.4q0 .5.2 1.6t.2 1.6q0 .3-.2.9t-.1.9.1.4.5.2q.3 0 1-.1t.9-.2q.8 0 2.3.3t2.3.2q2.4 0 3.8-.5 1.7-.6 3.1-2.1t2.3-3.3.8-3.6zm1.7-.1q0 2.2-1 4.4t-2.6 3.9-3.8 2.4q-1.6.6-4.3.6-.8 0-2.3-.2T6 21.9q-.3 0-.9.2t-1 .2q-1 0-1.7-.8t-.6-1.7q0-.3.1-.9T2 18q0-.5-.1-1.6t-.2-1.6q0-1.5.3-2.9t.7-2.8T4 6.5t2-2.1q1.1-.8 3.1-1.6 2.6-1.1 4.3-1.1.8 0 2.3.3t2.4.4q.2 0 .7-.1t.8-.1q1.1 0 1.6.7t.5 1.8q0 .3-.1.9t-.1.9v.3q0 .1.1.2t0 .2.1.2.1.2q.2.6.4 1.6t.1 1.8z' })
    )
  );
};

exports.default = Icon;