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
      _react2.default.createElement('path', { d: 'M16.3 12.4q0-.2-.1-.3t-.3-.1h-3V7.3q0-.2-.2-.3t-.3-.1H9.9q-.2 0-.3.1t-.2.3V12h-3q-.1 0-.3.1t-.1.3q0 .2.1.3l4.7 4.8q.2.1.3.1t.4-.1l4.7-4.8q.1-.1.1-.3zm8.6 3q0 2.2-1.5 3.7t-3.7 1.5H5.1q-2.4 0-4.2-1.8t-1.8-4.2q0-1.8 1-3.2t2.5-2.3v-.5q0-2.9 2-4.9t4.8-2q2.1 0 3.9 1.2T15.8 6q.9-.9 2.2-.9 1.4 0 2.4 1t1 2.5q0 1-.5 1.8 1.7.4 2.8 1.8t1.2 3.2z' })
    )
  );
};

exports.default = Icon;