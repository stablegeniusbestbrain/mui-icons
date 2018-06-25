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
      _react2.default.createElement('path', { d: 'M23.4 18.9q.4 0 .5.2t-.1.6l-1.7 2.2q-.3.3-.7.3t-.6-.3l-1.7-2.2q-.3-.3-.2-.6t.6-.2h1.1V5.1h-1.1q-.4 0-.6-.2t.2-.6l1.7-2.2q.2-.3.6-.3t.7.3l1.7 2.2q.2.3.1.6t-.5.2h-1.1v13.8h1.1zM1.1 1.7l.7.4q.2.1 2.8.1.6 0 1.8-.1t1.8 0h7.5q.2 0 .3-.1t.2-.3H17.1v6q-.5.2-.9.2-.4-.6-.8-1.7 0-.1-.1-.6t-.2-1-.1-.5l-.2-.2q-.1-.1-.2 0t-.1-.1-.3 0-.2 0h-2.8q-.6 0-.9.1-.1 1.1-.1 1.8v13.5q0 .5.2.9.5.3 1.6.6t1.6.5q.1.5.1.7v.4h-.5q-1 0-2.9-.1T7.5 22q-.6 0-2 .2t-2 .1l-.1-.7v-.1q.3-.4.9-.6t1.3-.4 1-.4q.3-.5.3-5.1 0-1.3-.1-4t0-4.1V5.3v-.2-.3-.4q0-.3-.1-.3t0-.2q-.2-.1-2.2-.1-.4 0-1.2.1t-1.1.4q-.3.2-.5 1t-.4 1.4-.5.8q-.6-.4-.8-.6V1.7z' })
    )
  );
};

exports.default = Icon;