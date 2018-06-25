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
      _react2.default.createElement('path', { d: 'M17.1 9.4q0-.3-.2-.6t-.6-.2q-2.3 0-4.3.6T8.6 11t-3.2 3q-.3.3-.3.6t.3.6.6.2q.3 0 .6-.2.4-.3 1-1t.9-.9q1.8-1.6 3.6-2.3t4.2-.7q.3 0 .6-.3t.2-.6zM24 6.8q0 1.2-.3 2.6-.6 3-2.4 5.1t-4.8 3.6q-2.9 1.4-5.9 1.4-2 0-3.8-.6l-1.2-.6q-1-.5-1.3-.5-.2 0-.5.5t-.6.9-.7.9-.8.5q-.4 0-.7-.2t-.4-.3-.4-.6l-.1-.1q-.1-.1 0-.1t-.1-.2 0-.1q0-.5.4-1t.9-.9.9-.8.5-.6q0-.1-.2-.5t-.2-.6q-.2-.7-.2-1.4 0-1.5.6-2.9t1.6-2.5 2.3-1.9 2.7-1.3q.8-.2 2-.3t2.4-.1 2.4-.1 2.1-.3 1.6-.8l.4-.4.4-.3.3-.3.5-.2.6-.1q.5 0 .9.6t.7 1.5.3 1.7.1 1.3z' })
    )
  );
};

exports.default = Icon;