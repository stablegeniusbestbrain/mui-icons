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
      _react2.default.createElement('path', { d: 'M4.3 18q0-.3-.3-.6t-.6-.3q-.3 0-.6.3t-.2.6q0 .4.2.6t.6.3q.4 0 .6-.3t.3-.6zm2.1-6.9v8.6q0 .4-.2.6t-.6.3H1.7q-.3 0-.6-.3t-.2-.6v-8.6q0-.3.2-.6t.6-.2h3.9q.3 0 .6.2t.2.6zm15.9 0q0 1.2-.8 2 .3.6.3 1.1 0 1-.6 1.8.2.7 0 1.6-.2.7-.7 1.2.1 1.5-.7 2.4-.9 1.1-2.6 1.1h-1.8q-.9 0-1.9-.2t-1.6-.4-1.6-.5q-1.7-.6-2.2-.6-.3 0-.6-.3t-.2-.6v-8.6q0-.3.2-.6t.6-.2q.3-.1 1-.8t1.4-1.6q.9-1.2 1.3-1.6.3-.3.4-.7t.3-.6.2-.8q.1-.6.1-.9t.3-.7.4-.6q.3-.3.6-.3.7 0 1.1.2t.9.3.5.5.3.6.2.7 0 .6 0 .5q0 .6-.1 1.1t-.2.8-.4.7q0 .1-.1.3t-.2.3-.1.3h3.7q1.1 0 1.8.7t.8 1.8z' })
    )
  );
};

exports.default = Icon;