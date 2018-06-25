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
      _react2.default.createElement('path', { d: 'M11.1 15.9V8.1q0-.1-.1-.3t-.3-.1H7.3q-.2 0-.3.1t-.1.3v7.8q0 .1.1.3t.3.1h3.4q.2 0 .3-.1t.1-.3zm6 0V8.1q0-.1-.1-.3t-.3-.1h-3.4q-.2 0-.3.1t-.1.3v7.8q0 .1.1.3t.3.1h3.4q.2 0 .3-.1t.1-.3zm5.2-3.9q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;