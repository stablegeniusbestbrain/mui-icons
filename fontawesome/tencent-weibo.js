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
      _react2.default.createElement('path', { d: 'M14.7 7.7q0 1-.8 1.8t-1.8.7q-.8 0-1.5-.4-.8.9-1.5 1.9-3.3 5-2.7 11.5 0 .3-.2.6t-.4.2h-.1q-.3 0-.5-.2t-.2-.4q-.2-1.7-.1-3.3t.4-3 .8-2.4.9-2.1 1-1.7q.8-1.2 1.8-2.2-.3-.5-.3-1 0-1.1.8-1.9t1.8-.7 1.8.7.8 1.9zm5.1.1q0 2.1-1 3.9t-2.9 2.9-3.9 1q-.9 0-1.8-.2-.2-.1-.4-.3t-.1-.5q.1-.3.3-.5t.6-.1q.6.2 1.4.2 1.3 0 2.5-.5t2-1.4 1.4-2 .5-2.5-.5-2.5-1.4-2-2-1.4-2.5-.5-2.5.5-2 1.4-1.4 2-.5 2.5q0 1.5.7 2.9.1.3 0 .6t-.3.4-.5 0-.5-.3q-.8-1.7-.8-3.6 0-1.6.6-3t1.7-2.5T9 .6t3-.6q2.1 0 3.9 1t2.9 2.9 1 3.9z' })
    )
  );
};

exports.default = Icon;