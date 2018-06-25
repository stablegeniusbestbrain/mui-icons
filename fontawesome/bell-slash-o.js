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
      _react2.default.createElement('path', { d: 'M12.2 22.7q0-.2-.2-.2-.8 0-1.4-.6t-.5-1.3q0-.2-.2-.2t-.3.2q0 .9.7 1.6t1.7.7q.2 0 .2-.2zM5 16.4L16.8 6.2q-.6-1.2-1.8-2t-3-.8q-1.2 0-2.3.5t-1.6 1-.9 1.4-.3 1.4q0 5.2-1.9 8.7zm18.1 2.5q0 .7-.5 1.2t-1.2.5h-6q0 1.4-1 2.4T12 24t-2.4-1-1-2.4l2-1.7h10.1q-2.2-2.5-3-6.2l1.5-1.3q.8 4.8 3.9 7.5zM24.3.2l1.1 1.3q.1.1.1.3t-.1.3L.3 23.8q-.1.1-.3.1t-.3-.1l-1.1-1.3q-.1-.1-.1-.3t.1-.3l2.5-2.2q-.2-.4-.2-.8l1.2-1.2q.6-.6 1.1-1.6t1-2.1.7-2.8.2-3.5q0-2 1.6-3.8t4.1-2.1q-.1-.2-.1-.5 0-.6.4-.9T12 0t.9.4.4.9q0 .3-.1.5 1.6.2 2.9 1.1t2 2.1L23.7.2q.1-.1.3-.1t.3.1z' })
    )
  );
};

exports.default = Icon;