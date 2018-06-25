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
      _react2.default.createElement('path', { d: 'M1.7 12q0-2.2.9-4.2l4.9 13.5Q4.9 20 3.3 17.5T1.7 12zm17.3-.5q0 .2-.1.5t-.1.7-.2.5-.2.8-.2.8l-1.1 3.4-3.7-11q.6-.1 1.2-.1.3-.1.3-.3t0-.4-.4-.2l-2.7.2q-1-.1-2.7-.2-.2 0-.3.1t-.1.2-.1.2.2.3.2.1l1.1.1 1.6 4.4-2.3 6.7L5.7 7.2q.6-.1 1.2-.1.2-.1.3-.3t0-.4-.4-.2l-2.7.2h-.4q-.3 0-.3-.1Q4.8 4.2 7.1 3T12 1.7q2 0 3.8.7t3.2 2h-.2q-.7 0-1.2.5t-.5 1.3v.3q0 .1.1.3t.1.3.1.3.2.3.1.3.2.3.2.3q.9 1.5.9 2.9zm-6.8 1.4l3.1 8.7q.1 0 .1.1-1.7.6-3.4.6-1.5 0-2.9-.4zM21 7.1q1.3 2.3 1.3 4.9 0 2.8-1.4 5.2t-3.7 3.7l3.1-9.1q.8-2.3.8-3.7 0-.5-.1-1zM12 0q2.4 0 4.7 1t3.8 2.5T23 7.3t1 4.7-1 4.7-2.5 3.8-3.8 2.5-4.7 1-4.7-1-3.8-2.5T1 16.7 0 12t1-4.7 2.5-3.8T7.3 1 12 0zm0 23.5q2.3 0 4.4-1t3.7-2.4 2.4-3.7 1-4.4-1-4.4-2.4-3.7-3.7-2.4-4.4-1-4.4 1-3.7 2.4-2.4 3.7-1 4.4 1 4.4 2.4 3.7 3.7 2.4 4.4 1z' })
    )
  );
};

exports.default = Icon;