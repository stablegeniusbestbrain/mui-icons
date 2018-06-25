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
      _react2.default.createElement('path', { d: 'M22.6 5.5q-.9 1.3-2.2 2.2v.6q0 1.7-.5 3.4t-1.6 3.4-2.4 2.8-3.5 1.9-4.3.8q-3.6 0-6.7-2 .5.1 1.1.1 3 0 5.4-1.9-1.4 0-2.6-.8t-1.5-2.2q.5.1.8.1.6 0 1.2-.1-1.5-.4-2.5-1.5t-1-2.8q.9.5 2 .5-.9-.6-1.4-1.5t-.6-2.1q0-1.2.6-2.2 1.6 2 4 3.2t4.9 1.3q-.1-.5-.1-.9 0-1.8 1.3-3.1t3.1-1.3q1.8 0 3.1 1.4 1.5-.3 2.8-1-.5 1.5-1.9 2.3 1.2-.1 2.5-.6z' })
    )
  );
};

exports.default = Icon;