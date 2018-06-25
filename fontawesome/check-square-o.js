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
      _react2.default.createElement('path', { d: 'M19.7 12.5v4.2q0 1.6-1.1 2.7t-2.7 1.2H4.7q-1.6 0-2.7-1.2T.9 16.7V5.6Q.9 4 2 2.8t2.7-1.1h11.2q.8 0 1.5.3.2.1.3.4 0 .2-.2.3l-.6.7q-.1.1-.3.1h-.1q-.3-.1-.6-.1H4.7q-.9 0-1.5.7t-.6 1.5v11.1q0 .9.6 1.5t1.5.7h11.2q.8 0 1.5-.7t.6-1.5v-3.4q0-.2.1-.3l.9-.8q.1-.2.3-.2.1 0 .1.1.3.1.3.4zm3.1-6.6L11.9 16.8q-.3.3-.8.3t-.7-.3L4.6 11q-.3-.3-.3-.7t.3-.8L6.1 8q.3-.3.8-.3t.7.3l3.5 3.6 8.7-8.7q.3-.3.8-.3t.7.3l1.5 1.5q.3.3.3.7t-.3.8z' })
    )
  );
};

exports.default = Icon;