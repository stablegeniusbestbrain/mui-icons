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
      _react2.default.createElement('path', { d: 'M22.3 12q0 3.4-2 6t-5 3.8q-.4 0-.6-.1t-.1-.4v-2.9q0-1.3-.7-1.9.7 0 1.3-.2t1.3-.5 1.1-.9.7-1.4.3-2q0-1.7-1.1-2.8.5-1.2-.1-2.7-.4-.1-1.1.1t-1.2.6l-.5.3q-1.3-.3-2.6-.3T9.4 7q-.2-.1-.5-.3t-1.2-.5T6.6 6Q6 7.5 6.5 8.7q-1.1 1.1-1.1 2.8 0 1.1.3 2t.7 1.4 1.1.9 1.3.5 1.3.2q-.5.5-.6 1.4-.3.2-.6.2t-.8.1-.9-.3-.7-.8q-.3-.5-.7-.7t-.6-.4h-.3q-.3 0-.4.1t-.1.1.2.2.1.2h.1q.3.2.6.5t.4.7l.2.3q.1.5.6.9t.9.4.9.1.7-.1h.3v1.1q0 .6.1.8 0 .2-.2.4t-.6.1q-3.1-1.1-5-3.8t-2-6q0-2.8 1.4-5.2t3.7-3.7T12 1.7t5.2 1.4 3.7 3.7 1.4 5.2z' })
    )
  );
};

exports.default = Icon;