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
      _react2.default.createElement('path', { d: 'M13.5 11.5q.1.8-.7 1.4t-1.5 0q-.5-.2-.7-.7t0-1.1.7-.8q.5-.3 1-.2t.8.5.4.9zm1.5-.3q-.2-1.4-1.5-2.2t-2.7-.1q-.8.3-1.3 1.1T9 11.8q.1 1.2 1.1 2t2.2.8q1.2-.1 2-1.1t.7-2.3zM18.2 4q-.3-.4-.8-.6t-.8-.3-.9-.2q-3.9-.6-7.6 0-.6.1-.9.2t-.7.3-.7.6q.4.3 1 .6t1 .3T9 5q3.1.4 6 0 .8-.1 1.2-.1t1-.3 1-.6zm.7 13.8q-.1.4-.2 1.1t-.2 1.1-.3.9-.8.8q-1.2.6-2.6.9t-2.7.3-2.7-.2q-.6-.1-1-.3t-1.1-.3-1-.6-.6-.8q-.4-1.3-.8-3.9l.1-.3.2-.1q3 2 6.8 2t6.8-2q.3.1.3.3t-.1.6-.1.5zM21.4 5q-.4 2.2-1.5 8.7-.1.4-.4.8t-.6.5-.7.4q-3.4 1.7-8.2 1.2-3.3-.4-5.2-1.9-.2-.1-.4-.3t-.2-.5-.1-.4-.1-.6-.1-.4q-.1-.7-.3-2t-.4-2.2-.3-2-.3-2.1q0-.3.2-.6t.4-.5.6-.4.6-.3.7-.3q1.7-.6 4.2-.9 5.1-.5 9 .7 2.1.6 2.9 1.6.2.3.2.7t0 .8z' })
    )
  );
};

exports.default = Icon;