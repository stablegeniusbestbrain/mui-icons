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
      _react2.default.createElement('path', { d: 'M18.2 15.9q0 2-1.3 3.5t-3.5 1.8v2.4q0 .2-.1.3t-.3.1h-1.8q-.2 0-.3-.1t-.1-.3v-2.4q-.9-.1-1.7-.4t-1.4-.6-1-.6-.6-.5-.2-.3q-.3-.3-.1-.5l1.4-1.8q.1-.2.3-.2.2 0 .3.1l.1.1q1.5 1.3 3.2 1.6.5.1 1 .1 1.1 0 1.9-.5t.9-1.7q0-.3-.2-.7t-.5-.5-.8-.5-.9-.5-1-.4l-.9-.3q-.3-.1-.8-.4t-.8-.4-.8-.5-.7-.6-.6-.6-.5-.8-.2-.9-.1-1q0-1.9 1.3-3.3t3.4-1.8V.4q0-.1.1-.3t.3-.1H13q.2 0 .3.1t.1.3v2.4q.8.1 1.5.3t1.2.4.8.5.6.4.2.2q.2.3 0 .5l-1.1 2q-.1.2-.3.2-.1 0-.3-.1-.1 0-.2-.2t-.5-.3-.8-.4-1-.4-1.2-.1q-1.2 0-2 .5t-.8 1.5q0 .4.1.7t.4.5.5.5.7.4.9.3.9.4q.7.3 1.1.4t1 .5 1 .6.8.6.7.9.5 1 .1 1.3z' })
    )
  );
};

exports.default = Icon;