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
      _react2.default.createElement('path', { d: 'M14.6 4.7v14.6q0 .3-.3.6t-.6.2-.6-.2l-4.4-4.5H5.1q-.3 0-.6-.2t-.2-.6V9.4q0-.3.2-.6t.6-.2h3.6l4.4-4.5q.3-.2.6-.2t.6.2.3.6zm5.1 7.3q0 1-.6 1.9t-1.5 1.2q-.1.1-.3.1-.3 0-.6-.2t-.3-.6q0-.3.2-.5t.4-.4.5-.3.3-.4.2-.8-.2-.8-.3-.4-.5-.3-.4-.4-.2-.5q0-.3.3-.6t.6-.2q.2 0 .3.1 1 .3 1.5 1.2t.6 1.9z' })
    )
  );
};

exports.default = Icon;