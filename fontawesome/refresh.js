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
      _react2.default.createElement('path', { d: 'M22 14.1q0 .1-.1.1-.8 3.6-3.6 5.9t-6.4 2.2q-1.9 0-3.7-.8t-3.3-2.1l-1.7 1.8q-.3.2-.6.2t-.6-.2-.3-.6v-6q0-.4.3-.6t.6-.3h6q.3 0 .6.3t.2.6-.2.6L7.3 17q1 .9 2.2 1.4t2.5.5q1.8 0 3.3-.9t2.5-2.4q.2-.2.7-1.6.2-.3.5-.3h2.5q.2 0 .3.1t.2.3zm.3-10.7v6q0 .4-.3.6t-.6.3h-6q-.3 0-.6-.3t-.2-.6.2-.6L16.7 7q-2-1.9-4.7-1.9-1.8 0-3.3.9T6.2 8.4q-.2.2-.7 1.6-.2.3-.5.3H2.4q-.2 0-.3-.1T2 9.9v-.1q.8-3.6 3.6-5.9T12 1.7q2 0 3.8.8t3.3 2.1l1.7-1.8q.3-.2.6-.2t.6.2.3.6z' })
    )
  );
};

exports.default = Icon;