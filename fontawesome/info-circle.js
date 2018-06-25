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
      _react2.default.createElement('path', { d: 'M15.4 18.4v-2.1q0-.2-.1-.3t-.3-.1h-1.3V9q0-.2-.1-.3t-.3-.1H9q-.2 0-.3.1t-.1.3v2.1q0 .2.1.4t.3.1h1.3v4.3H9q-.2 0-.3.1t-.1.3v2.1q0 .2.1.3t.3.2h6q.2 0 .3-.2t.1-.3zm-1.7-12V4.3q0-.2-.1-.3t-.3-.1h-2.6q-.2 0-.3.1t-.1.3v2.1q0 .2.1.3t.3.2h2.6q.2 0 .3-.2t.1-.3zm8.6 5.6q0 2.8-1.4 5.2t-3.7 3.7-5.2 1.4-5.2-1.4-3.7-3.7T1.7 12t1.4-5.2 3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;