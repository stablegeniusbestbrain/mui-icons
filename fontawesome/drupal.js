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
      _react2.default.createElement('path', { d: 'M17.3 21.2q0-.2-.3 0-.4.3-1.1.5t-1.8.2q-1.7 0-2.6-.6 0-.1-.2-.1-.1 0-.3.2-.1.1-.1.2t.1.3q.5.4 1.2.6t1.3.1 1.4 0q.5-.1 1.1-.3t.9-.4.3-.3q.2-.1.1-.4zm-.5-1.5q-.2-.6-.5-.8-.3-.2-1-.2-.6 0-1 .1-.4.2-1 .8-.4.3-.2.6.1.1.3 0t.4-.3l.1-.1q.1-.1.2-.1t.1-.1.2-.1.1-.1.2 0 .2-.1.3 0q.4 0 .6.1t.3.2.2.3.2.3.1 0q.3-.2.2-.5zm4.8-3.8q0-.3-.1-.6t-.2-.6-.5-.5-.7-.1q-.4 0-1.3.5t-1.7 1.1-1.3.6q-.4 0-.9-.3t-1-.6-1.1-.8-1.4-.6-1.5-.3q-1.5 0-2.6 1.1t-1.1 2.3q-.1 1.5 1 2.2.4.3.8.4t1.4.1q.8 0 1.8-.4t1.8-1 1.6-.9 1.2-.4q.4 0 .9.4t.9.9.9.9.8.4q.5.1.8-.1t.7-.9q.4-.5.6-1.3t.2-1.5zm.7-2.1q0 2.2-.8 4.1T19.2 21 16 23t-3.9.8-3.9-.8-3.3-2.1-2.3-3.2-.9-4.1q0-1.2.3-2.3t.6-2 1-1.5 1-1.3 1.1-.9.8-.7.6-.3q.2-.1.7-.3t.7-.4.7-.4.8-.6q.5-.4.8-1t.4-1.7q1.7 2.1 2.4 2.6.6.4 1.8.9t1.7.9q.3.2.5.4t.8.6 1.1.9 1 1.3.9 1.6.6 2 .3 2.4z' })
    )
  );
};

exports.default = Icon;