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
      _react2.default.createElement('path', { d: 'M.6 22.1q-.3.3-.4.2t-.2-.4V2.1q0-.3.2-.4t.4.2l9.5 9.5q.1.1.2.3V2.1q0-.3.2-.4t.4.2l9.5 9.5q.1.1.2.3V2.6q0-.4.2-.6t.6-.3h1.7q.4 0 .6.3t.3.6v18.8q0 .4-.3.6t-.6.3h-1.7q-.3 0-.6-.3t-.2-.6v-9.1q-.1.2-.2.3l-9.5 9.5q-.3.3-.4.2t-.2-.4v-9.6q-.1.2-.2.3z' })
    )
  );
};

exports.default = Icon;