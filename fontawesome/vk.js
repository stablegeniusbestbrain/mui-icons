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
      _react2.default.createElement('path', { d: 'M24.8 7q.3.8-2 3.9-.3.4-.9 1.1-1 1.4-1.2 1.8-.2.5.2 1.1.2.3 1.1 1.1h.1q1.9 1.8 2.5 3 .1.1.1.2t.1.3 0 .5-.3.3-.8.2l-3.4.1q-.4 0-.8-.1t-.7-.3l-.3-.2q-.4-.2-.9-.8t-.9-1.1-.8-.7-.8-.2H15q-.1 0-.2.2t-.3.4-.2.7-.1 1q0 .2-.1.4t-.1.2v.1q-.3.3-.7.3h-1.6q-.9.1-1.9-.2T8 19.6t-1.4-.9-.9-.8l-.4-.3q-.1-.1-.3-.4T4 16t-1.4-2T1 11.1-.8 7.5q-.1-.2-.1-.4t.1-.2v-.1q.2-.2.8-.2l3.7-.1q.1.1.3.1t.2.1v.1q.3.1.4.4.2.7.6 1.4t.5 1.1l.2.4q.4.8.8 1.4t.6.9.6.5.5.2.3-.1h.1q.1 0 .1-.3t.2-.7.2-1 0-1.7q-.1-.6-.2-1t-.2-.6v-.2q-.4-.4-1.2-.5-.1-.1.1-.4.2-.2.5-.4.7-.3 3.2-.3 1.1 0 1.8.2.3 0 .5.2t.2.3.2.4 0 .6 0 .8 0 .9 0 1.1q0 .2-.1.6t0 .6.1.6.1.5.3.3q.1 0 .3.1t.3-.2.5-.5.7-.8.9-1.5q.8-1.4 1.5-3 0-.1.1-.2t.1-.2h.1l.1-.1h4.3q.5-.1.8 0t.4.2z' })
    )
  );
};

exports.default = Icon;