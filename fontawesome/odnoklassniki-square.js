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
      _react2.default.createElement('path', { d: 'M14.1 7.8q0 .9-.6 1.5t-1.5.6-1.5-.6-.6-1.5.6-1.5 1.5-.7 1.5.7.6 1.5zm2.9 4.8q-.1-.2-.4-.4t-.6-.1-.8.3q-.2.1-.4.3t-1.1.4-1.7.3-1.7-.2-1.1-.5l-.4-.3q-.4-.3-.8-.3t-.6.1-.4.4q-.3.6 0 1t1.1 1q1.2.7 3.1.9l-.7.7-2.6 2.6q-.3.2-.3.7t.3.7l.1.1q.3.3.8.3t.7-.3l2.5-2.6q1.5 1.6 2.6 2.6.3.3.7.3t.7-.3l.1-.1q.3-.3.3-.7t-.3-.7l-2.6-2.6-.7-.7q1.9-.2 3.1-.9.9-.6 1.1-1t0-1zm-.7-4.8q0-1.8-1.2-3.1T12 3.4 8.9 4.7 7.7 7.8t1.2 3 3.1 1.3 3.1-1.3 1.2-3zm6-2.2v12.8q0 1.6-1.1 2.8t-2.8 1.1H5.6q-1.6 0-2.8-1.1t-1.1-2.8V5.6q0-1.6 1.1-2.8t2.8-1.1h12.8q1.6 0 2.8 1.1t1.1 2.8z' })
    )
  );
};

exports.default = Icon;