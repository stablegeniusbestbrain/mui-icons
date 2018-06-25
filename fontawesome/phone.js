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
      _react2.default.createElement('path', { d: 'M21.4 16.6q0 .4-.1 1t-.3.9q-.3.6-1.6 1.4-1.3.7-2.5.7-.4 0-.7-.1t-.8-.1-.6-.2-.8-.3-.6-.3q-1.3-.4-2.4-1.1-1.7-1-3.5-2.9t-2.9-3.5q-.6-1-1.1-2.3 0-.2-.2-.7T3 8.4t-.2-.7-.2-.7 0-.7q0-1.3.7-2.5.7-1.4 1.4-1.7l.9-.3q.6-.2.9-.1.2 0 .3.1.3 0 .7 1 .2.2.4.7t.5.8.4.8q.1 0 .2.3t.3.5.1.4q0 .2-.4.6t-.8.8-.8.7T7 9q0 .1.1.3t.1.3.2.3.1.2q1 1.9 2.4 3.2t3.1 2.3l.3.2.3.2.3.1q.3.1.3 0 .2 0 .6-.3t.7-.9.7-.8.7-.4q.2 0 .4.1t.4.3.4.2q.3.2.7.4t.8.5.8.4q.9.5 1 .7v.3z' })
    )
  );
};

exports.default = Icon;