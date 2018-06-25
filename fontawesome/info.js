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
      _react2.default.createElement('path', { d: 'M16.3 18v1.7q0 .4-.3.6t-.6.3H8.6q-.4 0-.6-.3t-.3-.6V18q0-.3.3-.6t.6-.3h.8V12h-.8q-.4 0-.6-.3t-.3-.6V9.4q0-.3.3-.6t.6-.2h5.1q.4 0 .6.2t.3.6v7.7h.8q.4 0 .6.3t.3.6zM14.6 2.6v2.5q0 .4-.3.6t-.6.3h-3.4q-.4 0-.6-.3t-.3-.6V2.6q0-.4.3-.6t.6-.3h3.4q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;