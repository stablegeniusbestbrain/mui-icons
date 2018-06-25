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
      _react2.default.createElement('path', { d: 'M12.9 11.1v7.8q0 1.3-1.1 2.4t-2.4 1-2.4-1-1-2.4q0-.4.3-.6t.6-.3.6.3.2.6q0 .6.5 1.1t1.2.6 1.2-.6.5-1.1v-7.8q.5-.2.9-.2t.9.2zm10.2.4q0 .1-.1.3t-.3.1q-.1 0-.3-.2-.7-.6-1.2-.9t-1.4-.3q-.9 0-1.7.5t-1.4 1.3q-.1.1-.2.4t-.2.3q-.2.2-.4.2t-.4-.2q0-.1-.2-.3t-.2-.4q-.6-.8-1.4-1.3t-1.7-.5-1.7.5-1.4 1.3q-.1.1-.2.4t-.2.3q-.2.2-.4.2t-.4-.2q0-.1-.2-.3t-.2-.4q-.6-.8-1.4-1.3t-1.7-.5q-.8 0-1.4.3t-1.2.9q-.2.2-.3.2-.2 0-.3-.1t-.1-.3v-.1q.6-2.5 2.3-4.3t4-2.8 4.8-.9q1.9 0 3.7.6T19 5.5 21.6 8t1.5 3.4v.1zM12.9 1.7V3h-1.8V1.7q0-.3.3-.6t.6-.2.6.2.3.6z' })
    )
  );
};

exports.default = Icon;