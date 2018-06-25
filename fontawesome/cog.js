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
      _react2.default.createElement('path', { d: 'M15.4 12q0-1.4-1-2.4t-2.4-1-2.4 1-1 2.4 1 2.4 2.4 1 2.4-1 1-2.4zm6.9-1.5v3q0 .2-.1.3t-.3.2l-2.5.4q-.2.7-.5 1.2.5.7 1.4 1.8.2.2.2.4t-.1.3q-.4.5-1.4 1.4t-1.2 1q-.2 0-.4-.1l-1.8-1.5q-.6.3-1.2.5-.3 1.8-.4 2.5-.1.4-.5.4h-3q-.2 0-.3-.1t-.2-.3l-.3-2.5q-.7-.2-1.2-.5l-1.9 1.5q-.2.1-.4.1t-.3-.2q-1.7-1.5-2.2-2.2-.1-.2-.1-.3 0-.2.1-.3.2-.3.7-.9t.7-1q-.4-.6-.5-1.3l-2.5-.4q-.2 0-.3-.1t-.1-.3v-3q0-.2.1-.3t.3-.2l2.5-.4q.2-.6.5-1.2-.5-.8-1.4-1.9-.2-.1-.2-.3 0-.1.1-.3Q4 5.4 5 4.5t1.2-1q.2 0 .4.2l1.8 1.4q.6-.3 1.2-.5.3-1.8.4-2.5.1-.4.5-.4h3q.2 0 .3.1t.2.3l.3 2.5q.7.2 1.2.5l2-1.5q.1-.1.3-.1.1 0 .3.2 1.7 1.6 2.2 2.2.1.1.1.3 0 .2-.1.3-.2.3-.7.9t-.7 1q.3.6.5 1.3l2.5.4q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;