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
      _react2.default.createElement('path', { d: 'M24 9.5v10.6q0 .9-.6 1.6t-1.5.6H2.1q-.8 0-1.5-.6T0 20.1V9.5q.6.7 1.4 1.2Q6.2 14 8 15.3l1.2.9q.4.3 1.3.6t1.5.3q.7 0 1.5-.3t1.3-.6 1.2-.9q2.3-1.7 6.7-4.6.7-.5 1.3-1.2zm0-3.9q0 1-.7 2t-1.6 1.6q-5 3.5-6.3 4.4-.1.1-.5.4t-.8.5-.6.4-.8.4-.7.1q-.3 0-.7-.1t-.8-.4-.6-.4-.8-.5-.5-.4q-1.3-.9-3.6-2.5T2.3 9.2Q1.5 8.7.7 7.7T0 5.9q0-1.1.6-1.8t1.5-.7h19.8q.8 0 1.5.7t.6 1.5z' })
    )
  );
};

exports.default = Icon;