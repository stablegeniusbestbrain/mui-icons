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
      _react2.default.createElement('path', { d: 'M3.4 8q0-1.5.5-2.7T5.3 3t2.1-1.6T9.8.3t2.7-.3q2.2 0 4 .9t2.9 2.6 1.2 3.8q0 1.3-.3 2.5t-.8 2.4-1.3 2-2 1.4-2.5.5q-.9 0-1.8-.4t-1.3-1.2q-.1.5-.4 1.5t-.3 1.3-.3.9-.3 1-.4.8-.6 1.1-.9 1.1l-.2.1-.1-.1q-.2-2.2-.2-2.6 0-1.2.3-2.7t.9-3.9.7-2.7q-.4-.9-.4-2.3 0-1.1.7-2.1t1.7-.9q.8 0 1.3.5t.4 1.4q0 .9-.5 2.5t-.6 2.5q0 .9.6 1.4t1.4.6q.8 0 1.4-.3t1.1-.9.7-1.3.5-1.5.3-1.5.1-1.3q0-2.3-1.5-3.6t-3.8-1.3q-2.7 0-4.5 1.7T5.9 8.3q0 .6.2 1.2t.3.8.4.6.2.4q0 .4-.2 1t-.5.6H6q-.6-.2-1.2-.8T4 10.9t-.4-1.5T3.4 8z' })
    )
  );
};

exports.default = Icon;