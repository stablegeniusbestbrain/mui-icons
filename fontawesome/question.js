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
      _react2.default.createElement('path', { d: 'M14.6 16.8V20q0 .3-.2.4t-.4.2h-3.2q-.2 0-.4-.2t-.1-.4v-3.2q0-.2.1-.4t.4-.1H14q.2 0 .4.1t.2.4zm4.2-8q0 .7-.2 1.3t-.5 1.1-.7.8-.8.5-.8.5q-.5.3-.9.9t-.4.9q0 .2-.1.4t-.4.2h-3.2q-.2 0-.4-.2t-.1-.5v-.6q0-1.1.9-2.1t1.9-1.5q.8-.3 1.1-.7t.3-1q0-.6-.6-1t-1.4-.5q-.9 0-1.5.4-.4.4-1.4 1.6-.2.2-.4.2t-.4-.1L6.6 7.7q-.1-.1-.2-.3t.1-.4q2.2-3.6 6.2-3.6 1.1 0 2.2.4T16.8 5t1.5 1.7.5 2.1z' })
    )
  );
};

exports.default = Icon;