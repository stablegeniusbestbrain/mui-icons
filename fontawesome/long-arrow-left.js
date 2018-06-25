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
      _react2.default.createElement('path', { d: 'M24 10.7v2.6q0 .2-.1.3t-.3.1H6.9v3q0 .3-.3.4t-.5-.1L1 12.3q-.1-.1-.1-.3 0-.1.1-.3L6.1 7q.2-.2.5-.1t.3.4v3h16.7q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;