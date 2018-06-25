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
      _react2.default.createElement('path', { d: 'M23.7 12.3q.3.2.3.6t-.3.6l-3.9 3.9q-.1.1-.3.1t-.3-.1l-.6-.6q-.1-.1-.1-.3t.1-.3l2.5-2.5h-4v3q0 .2-.1.3t-.3.1h-.8q-.2 0-.4-.1t-.1-.3v-3h-1.7q-.4 2.9-2.6 4.9t-5.1 2q-2.2 0-4.1-1.2t-2.8-3.2-.8-4.2q.2-1.8 1.2-3.3T2 6.2t3.4-1q2-.2 3.9.7t3 2.5 1.4 3.6h1.7V9q0-.2.1-.3t.4-.1h.8q.2 0 .3.1t.1.3v3h4l-2.5-2.5q-.1-.1-.1-.3t.1-.3l.6-.6q.1-.1.3-.1t.3.1zM6 18.9q2.5 0 4.2-1.8t1.8-4.2-1.8-4.3T6 6.9 1.8 8.6 0 12.9t1.8 4.2T6 18.9z' })
    )
  );
};

exports.default = Icon;