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
      _react2.default.createElement('path', { d: 'M20.4 16.3q0-.6-.4-.9l-2.8-2.8q-.4-.4-.9-.4-.6 0-1 .4l.3.3.3.3.2.2q.1.1.1.4t.1.3q0 .6-.4 1t-.9.3h-.4q-.2 0-.3-.2T14 15t-.3-.3-.2-.2q-.4.4-.4.9 0 .6.3 1l2.8 2.7q.4.4.9.4t.9-.4l2-1.9q.4-.4.4-.9zm-9.5-9.5q0-.5-.3-.9L7.8 3.2q-.4-.4-.9-.4t-.9.3l-2 2q-.4.4-.4.9t.4.9l2.8 2.8q.4.4.9.4.6 0 1-.5-.1 0-.3-.2t-.3-.3-.2-.2-.1-.4-.1-.4q0-.5.4-.9t.9-.3h.4q.2 0 .3.2t.3.2.3.3.2.2q.4-.4.4-1zm12 9.5q0 1.6-1.1 2.7l-2 2q-1.1 1.1-2.7 1.1t-2.7-1.2l-2.8-2.7q-1.1-1.2-1.1-2.8 0-1.6 1.2-2.8l-1.2-1.1q-1.2 1.1-2.8 1.1-1.6 0-2.7-1.1L2.2 8.7Q1.1 7.6 1.1 6t1.1-2.7l2-2Q5.3.2 6.9.2t2.7 1.2l2.8 2.7q1.1 1.1 1.1 2.7 0 1.7-1.2 2.8l1.2 1.2q1.2-1.2 2.8-1.2 1.6 0 2.7 1.2l2.8 2.8q1.1 1.1 1.1 2.7z' })
    )
  );
};

exports.default = Icon;