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
      _react2.default.createElement('path', { d: 'M3.4 17.6v2.5q0 .2-.1.3t-.3.2H.4q-.1 0-.3-.2t-.1-.3v-2.5q0-.2.1-.3t.3-.2H3q.2 0 .3.2t.1.3zm0-5.2V15q0 .2-.1.3t-.3.1H.4q-.1 0-.3-.1T0 15v-2.6q0-.1.1-.3t.3-.1H3q.2 0 .3.1t.1.3zm0-5.1v2.6q0 .1-.1.3t-.3.1H.4q-.1 0-.3-.1T0 9.9V7.3q0-.2.1-.3t.3-.1H3q.2 0 .3.1t.1.3zM24 17.6v2.5q0 .2-.1.3t-.3.2h-18q-.2 0-.3-.2t-.2-.3v-2.5q0-.2.2-.3t.3-.2h18q.1 0 .3.2t.1.3zM3.4 2.1v2.6q0 .2-.1.3t-.3.1H.4Q.3 5.1.1 5T0 4.7V2.1q0-.1.1-.3t.3-.1H3q.2 0 .3.1t.1.3zM24 12.4V15q0 .2-.1.3t-.3.1h-18q-.2 0-.3-.1t-.2-.3v-2.6q0-.1.2-.3t.3-.1h18q.1 0 .3.1t.1.3zm0-5.1v2.6q0 .1-.1.3t-.3.1h-18q-.2 0-.3-.1t-.2-.3V7.3q0-.2.2-.3t.3-.1h18q.1 0 .3.1t.1.3zm0-5.2v2.6q0 .2-.1.3t-.3.1h-18q-.2 0-.3-.1t-.2-.3V2.1q0-.1.2-.3t.3-.1h18q.1 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;