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
      _react2.default.createElement('path', { d: 'M21.4 18.5q0 1.6-1.1 2.7t-2.6 1q-1.8 0-3.2-1.3L4.1 10.5Q2.6 9 2.6 6.9q0-2.2 1.5-3.6t3.6-1.5q2.1 0 3.7 1.5l8.1 8.1q.1.1.1.3 0 .2-.4.6t-.6.4q-.2 0-.3-.1l-8.2-8.1q-1-1.1-2.4-1.1t-2.4 1-1 2.5q0 1.4 1.1 2.4l10.3 10.4q.9.8 2 .8.8 0 1.4-.5t.6-1.5q0-1-.9-1.9L11 8.8q-.3-.3-.8-.3-.3 0-.6.3t-.3.6q0 .4.4.8l5.5 5.5q.1.1.1.3 0 .2-.4.6t-.6.4q-.2 0-.3-.1l-5.5-5.5q-.9-.8-.9-2 0-1.1.8-1.9t1.9-.7q1.1 0 2 .8l7.7 7.8q1.4 1.3 1.4 3.1z' })
    )
  );
};

exports.default = Icon;