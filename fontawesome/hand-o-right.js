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
      _react2.default.createElement('path', { d: 'M3.4 18q0-.3-.2-.6t-.6-.3-.6.3-.3.6.3.6.6.3.6-.3.2-.6zm18.9-7.7q0-.7-.5-1.2t-1.2-.5h-7.7q0-.3.2-.7t.4-.7.4-.9.2-1.2q0-.9-.6-1.3T12 3.4q-.3 0-1.2 1.9-.3.6-.5.9-.5.8-1.5 1.9-1 1.1-1.4 1.4-.9.8-1.8.8h-.5v8.6h.5q.9 0 2.2.4t2.6.8 2.4.5q2.5 0 2.5-2.3v-.7q.4-.2.6-.7t.2-1-.2-.9q.7-.7.7-1.6 0-.4-.1-.8t-.4-.6h4.5q.7 0 1.2-.5t.5-1.2zm1.7 0q0 1.4-1 2.4t-2.4 1h-2.3q0 .8-.5 1.6.1.3.1.6 0 1.3-.9 2.4.1 1.8-1.1 2.9t-3 1.1q-1.8 0-4.3-.9-2.2-.8-3-.8H1.7q-.7 0-1.2-.5T0 18.9v-8.6q0-.7.5-1.2t1.2-.5h3.9q.1 0 .3-.1t.3-.2.3-.2.3-.3.3-.3.2-.3.2-.2q.9-1 1.4-1.8l.4-.8q.3-.6.5-.9t.5-.9.8-.7.9-.2q1.7 0 2.8.9t1.1 2.5q0 1-.3 1.8h5q1.4 0 2.4 1t1 2.4z' })
    )
  );
};

exports.default = Icon;