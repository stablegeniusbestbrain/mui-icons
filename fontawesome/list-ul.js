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
      _react2.default.createElement('path', { d: 'M5.1 18.9q0 1-.7 1.8t-1.8.7-1.9-.7-.7-1.8.7-1.9 1.9-.7 1.8.7.7 1.9zm0-6.9q0 1.1-.7 1.8t-1.8.8-1.9-.8T0 12t.8-1.8 1.8-.8 1.8.8.7 1.8zM24 17.6v2.5q0 .2-.1.3t-.3.2H7.3q-.2 0-.3-.2t-.1-.3v-2.5q0-.2.1-.3t.3-.2h16.3q.1 0 .3.2t.1.3zM5.1 5.1q0 1.1-.7 1.9t-1.8.7T.7 7 0 5.1t.8-1.8 1.8-.7 1.8.7.7 1.8zM24 10.7v2.6q0 .2-.1.3t-.3.1H7.3q-.2 0-.3-.1t-.1-.3v-2.6q0-.2.1-.3t.3-.1h16.3q.1 0 .3.1t.1.3zm0-6.8v2.5q0 .2-.1.3t-.3.2H7.3q-.2 0-.3-.2t-.1-.3V3.9q0-.2.1-.3t.3-.2h16.3q.1 0 .3.2t.1.3z' })
    )
  );
};

exports.default = Icon;