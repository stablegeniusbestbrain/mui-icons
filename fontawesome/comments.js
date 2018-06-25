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
      _react2.default.createElement('path', { d: 'M18.9 10.3q0 1.8-1.3 3.4t-3.4 2.5-4.8.9q-1.1 0-2.3-.2-1.7 1.2-3.8 1.7-.4.2-1.1.3-.2 0-.3-.1t-.2-.3v-.1-.1-.1l.1-.1.1-.1v-.1H2q.1-.1.3-.4t.4-.4.3-.3.3-.6.3-.5q-1.7-1-2.6-2.4t-1-3q0-1.9 1.3-3.5t3.4-2.5 4.7-.9 4.8.9 3.4 2.5 1.3 3.5zm5.1 3.4q0 1.6-1 3t-2.6 2.4q.2.3.3.6t.3.5.3.4.4.4.3.3l.1.1q.1.1 0 0t.1.1 0 .1h.1V21.9q-.1.2-.2.3t-.3.1q-.7-.1-1.1-.2-2.1-.6-3.8-1.7-1.2.2-2.3.2-3.7 0-6.4-1.8.8.1 1.2.1 2.2 0 4.2-.6t3.5-1.8q1.7-1.2 2.6-2.8t.9-3.4q0-1-.3-2.1 1.7 1 2.7 2.4t1 3.1z' })
    )
  );
};

exports.default = Icon;