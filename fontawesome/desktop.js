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
      _react2.default.createElement('path', { d: 'M23.1 13.3V2.1q0-.1-.1-.3t-.3-.1H1.3q-.2 0-.3.1t-.1.3v11.2q0 .2.1.3t.3.1h21.4q.2 0 .3-.1t.1-.3zm1.8-11.2v14.6q0 .9-.7 1.5t-1.5.7h-7.3q0 .5.2 1t.5.9.2.6q0 .4-.3.6t-.6.3H8.6q-.4 0-.6-.3t-.3-.6q0-.2.2-.6t.5-.9.2-1H1.3q-.9 0-1.5-.7t-.7-1.5V2.1q0-.8.7-1.5T1.3 0h21.4q.9 0 1.5.6t.7 1.5z' })
    )
  );
};

exports.default = Icon;