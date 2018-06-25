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
      _react2.default.createElement('path', { d: 'M11.1 18V4.3q0-.2-.1-.3t-.3-.1H4.3q-.2 0-.3.1t-.1.3V18q0 .2.1.3t.3.1h6.4q.2 0 .3-.1t.1-.3zm9-5.1V4.3q0-.2-.1-.3t-.3-.1h-6.4q-.2 0-.3.1t-.1.3v8.6q0 .1.1.3t.3.1h6.4q.2 0 .3-.1t.1-.3zm2.2-10.3v18.8q0 .4-.3.6t-.6.3H2.6q-.4 0-.6-.3t-.3-.6V2.6q0-.4.3-.6t.6-.3h18.8q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;