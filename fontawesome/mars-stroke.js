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
      _react2.default.createElement('path', { d: 'M21.4 1.7q.4 0 .6.3t.3.6v5.5q0 .2-.1.4t-.3.1H21q-.2 0-.3-.1t-.1-.4V4.6l-2.9 2.9 1.9 1.9q.1.1.1.3t-.1.3l-.6.6q-.1.1-.3.1t-.3-.1l-1.9-1.9-1 1.1q1.6 2.1 1.6 4.8 0 1.5-.6 3T14.9 20t-2.5 1.7-3 .6-3-.6T4 20t-1.7-2.4-.6-3 .6-3T4 9.1t2.4-1.6 3-.6q2.7 0 4.8 1.6l1.1-1L13 5.2q-.1-.1-.1-.3t.1-.3l.6-.6q.1-.1.3-.1t.3.1l2.3 2.3 2.9-2.9h-3.5q-.2 0-.4-.1t-.1-.3v-.9q0-.1.1-.3t.4-.1h5.5zm-12 18.9q2.5 0 4.3-1.8t1.7-4.2-1.7-4.3-4.3-1.7-4.2 1.7-1.8 4.3 1.8 4.2 4.2 1.8z' })
    )
  );
};

exports.default = Icon;