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
      _react2.default.createElement('path', { d: 'M19.7 13.3v6.4q0 .4-.2.6t-.6.3h-5.2v-5.2h-3.4v5.2H5.1q-.3 0-.6-.3t-.2-.6v-6.4-.1q0-.1 0 0L12 6.9l7.7 6.3v.1zm3-.9l-.8 1q-.1.1-.3.1h-.1q-.1 0-.2-.1L12 5.7l-9.3 7.7q-.1.1-.3.1-.2 0-.3-.1l-.8-1q-.1-.2-.1-.4t.2-.2L11 3.7q.4-.3 1-.3t1 .3l3.3 2.8V3.9q0-.2.1-.4t.3-.1h2.6q.2 0 .3.1t.1.4v5.4l2.9 2.5q.2.1.2.2t-.1.4z' })
    )
  );
};

exports.default = Icon;