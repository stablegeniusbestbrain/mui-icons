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
      _react2.default.createElement('path', { d: 'M8.1 7.9l.4 1.6q.2.8.2 1.9t-.2 2.1-.8 2q-.3-1.1-.9-2.1t-1.3-1.7-1.3-1.2-1.1-.8-.4-.3Q1.9 9 1.6 8.1t.2-1.7 1.3-1.1 1.8.2q1.8 1.1 3.2 2.4zM12.4 4l.3.6q.1.2.5 1.4t.5 2 .4 2.4 0 2.8-.6 2.8-1.5 2.8q-.6.9-1.8.9-.7 0-1.3-.4-.8-.5-.9-1.5t.3-1.7q.8-1.1 1.1-2.6t.2-2.6-.4-2.5-.6-1.7-.3-.7q-.4-.8-.1-1.7T9.4 3q.4-.2 1-.2t1.2.3.8.9zm4.3 9q-.2 2.1-.9 4.1-.3-1.7-.9-3.3.3-2.3-.1-4.8-.3-2.4-1.2-4.6 1.5 1.2 2.8 2.9l.2 1q.4 2.4.1 4.7zm3.7-11.7l.3.6q.2.4.6 1.6t.6 2.4.5 3.1.1 3.6-.7 4-1.5 4.3q-.3.6-.9 1t-1.2.4q-.6 0-1-.2-.9-.4-1.3-1.4t.1-1.8q.8-1.7 1.2-3.4t.5-3.2 0-2.9-.4-2.4-.5-1.9-.5-1.2-.2-.4q-.4-.9-.1-1.8T17.2.3q.5-.3 1-.3.7 0 1.3.3t.9 1z' })
    )
  );
};

exports.default = Icon;