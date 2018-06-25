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
      _react2.default.createElement('path', { d: 'M22.3 6.9v10.2H0V6.9h22.3zm1.7 7.7h1.7V9.4H24V5.6q0-.2-.1-.3t-.3-.2H-1.3q-.2 0-.3.2t-.1.3v12.8q0 .2.1.3t.3.2h24.9q.2 0 .3-.2t.1-.3v-3.8zm3.4-5.2v5.2q0 .7-.5 1.2t-1.2.5v2.1q0 .9-.6 1.5t-1.5.7H-1.3q-.9 0-1.5-.7t-.6-1.5V5.6q0-.9.6-1.5t1.5-.7h24.9q.9 0 1.5.7t.6 1.5v2.1q.7 0 1.2.5t.5 1.2z' })
    )
  );
};

exports.default = Icon;