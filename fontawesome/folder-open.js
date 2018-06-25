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
      _react2.default.createElement('path', { d: 'M24.3 12.8q0 .4-.4.8l-4.5 5.3q-.6.7-1.6 1.2t-1.9.5H1.3q-.5 0-.8-.2t-.4-.6q0-.4.4-.9L5 13.6q.6-.6 1.6-1.1t2-.5h14.5q.5 0 .9.2t.3.6zm-4.6-4.7v2.2H8.6q-1.3 0-2.7.6t-2.2 1.6l-4.5 5.3v.1l-.1-.2q-.1-.2 0-.1V4.7q0-1.2.9-2.1t2.1-.9h4.3q1.3 0 2.1.9t.9 2.1v.4h7.3q1.2 0 2.1.9t.9 2.1z' })
    )
  );
};

exports.default = Icon;