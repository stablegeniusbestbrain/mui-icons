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
      _react2.default.createElement('path', { d: 'M22.3 12q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4q-1.5 0-2.9-.4.8-1.3 1-2.2.1-.5.7-2.9.3.6 1 .9t1.6.4q1.6 0 2.8-.9t2-2.5.7-3.6q0-1.6-.8-2.9T15.8 6t-3.4-.8q-1.4 0-2.6.4t-2.1 1-1.5 1.5-.9 1.7-.3 1.8q0 1.4.6 2.4t1.6 1.5q.4.2.5-.2 0-.1.1-.4t.1-.4q.1-.4-.2-.6-.7-.8-.7-2 0-2.1 1.4-3.5t3.7-1.5q2 0 3.2 1.1t1.1 2.9q0 2.3-.9 3.8t-2.4 1.6q-.8 0-1.3-.5t-.3-1.4q.1-.5.4-1.3t.4-1.4.1-1q0-.7-.3-1.1T11 9.2q-.8 0-1.4.7T9 11.8q0 1 .4 1.7L8 19.1q-.2.9-.1 2.3-2.8-1.2-4.5-3.7T1.7 12q0-2.8 1.4-5.2t3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;