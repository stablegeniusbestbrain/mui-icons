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
      _react2.default.createElement('path', { d: 'M22.5 1.9q.3-.3.5-.2t.1.4v19.8q0 .3-.1.4t-.5-.2L13 12.6q-.1-.1-.1-.3v9.6q0 .3-.2.4t-.4-.2l-9.6-9.5q-.2-.3-.2-.6t.2-.6l9.6-9.5q.2-.3.4-.2t.2.4v9.6q0-.2.1-.3z' })
    )
  );
};

exports.default = Icon;