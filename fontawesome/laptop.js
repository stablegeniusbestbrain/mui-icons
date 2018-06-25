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
      _react2.default.createElement('path', { d: 'M4.7 17.1q-.9 0-1.5-.6T2.6 15V5.6q0-.9.6-1.5t1.5-.7h14.6q.9 0 1.5.7t.6 1.5V15q0 .9-.6 1.5t-1.5.6H4.7zM4.3 5.6V15q0 .2.1.3t.3.1h14.6q.2 0 .3-.1t.1-.3V5.6q0-.2-.1-.3t-.3-.2H4.7q-.2 0-.3.2t-.1.3zM22.7 18h2.2v1.3q0 .5-.7.9t-1.5.4H1.3q-.9 0-1.5-.4t-.7-.9V18h23.6zm-9.6 1.3q.2 0 .2-.2t-.2-.2h-2.2q-.2 0-.2.2t.2.2h2.2z' })
    )
  );
};

exports.default = Icon;