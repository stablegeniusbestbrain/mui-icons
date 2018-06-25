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
      _react2.default.createElement('path', { d: 'M18 6.3v1.4q0 .1-.1.3t-.3.1h-2.3q-.3 1.9-1.7 3.1t-3.7 1.5q2.2 2.4 6.2 7.2.1.2 0 .4-.1.3-.4.3h-2.6q-.2 0-.3-.2-4.1-4.9-6.7-7.6-.1-.2-.1-.3v-1.7q0-.2.1-.3t.3-.2h1.5q1.8 0 2.9-.5t1.3-1.7H6.4q-.2 0-.3-.1T6 7.7V6.3q0-.2.1-.3t.3-.1h5.5q-.7-1.5-3.5-1.5h-2q-.2 0-.3-.2T6 3.9V2.1q0-.1.1-.3t.3-.1h11.2q.1 0 .3.1t.1.3v1.4q0 .2-.1.3t-.3.1h-3.2q.7.9.9 2h2.3q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;