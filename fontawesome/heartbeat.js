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
      _react2.default.createElement('path', { d: 'M17.1 13.7h4.1q0 .1-.1.2t-.1.1h-.1l-8.3 8q-.3.3-.6.3t-.6-.3l-8.3-8q-.1 0-.3-.3h4.9q.3 0 .5-.2t.3-.4l1-3.8 2.5 8.9q.1.3.3.5t.6.2q.2 0 .5-.2t.3-.5l1.9-6.5.8 1.5q.2.5.7.5zM24 8q0 1.9-1.4 4h-4.9l-1.5-3q-.1-.2-.3-.3t-.5-.1q-.6 0-.8.6l-1.7 5.7-2.6-9.1q-.1-.3-.4-.5t-.5-.2-.5.2-.3.5L7 12H1.4Q0 9.9 0 8q0-3 1.7-4.6t4.7-1.7q.8 0 1.7.3t1.6.8 1.3.9 1 .9q.5-.5 1-.9t1.3-.9 1.6-.8 1.7-.3q3 0 4.7 1.7T24 8z' })
    )
  );
};

exports.default = Icon;