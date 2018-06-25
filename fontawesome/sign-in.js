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
      _react2.default.createElement('path', { d: 'M17.6 12q0 .3-.3.6L10 19.9q-.2.2-.6.2t-.6-.2-.2-.6v-3.9h-6q-.4 0-.6-.2t-.3-.6V9.4q0-.3.3-.6t.6-.2h6V4.7q0-.3.2-.6t.6-.2.6.2l7.3 7.3q.3.3.3.6zm4.7-4.7v9.4q0 1.6-1.1 2.7t-2.8 1.2h-4.3q-.1 0-.3-.2t-.1-.3v-.2-.4-.3q0-.1.2-.3t.2 0h4.3q.9 0 1.5-.7t.7-1.5V7.3q0-.9-.7-1.5t-1.5-.7h-4.5l-.1-.1-.1-.1v-.2-.3-.3-.3q0-.3.2-.3t.2-.1h4.3q1.6 0 2.8 1.2t1.1 2.7z' })
    )
  );
};

exports.default = Icon;