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
      _react2.default.createElement('path', { d: 'M14.6 11.1q0-.3-.3-.6t-.6-.2h-3.4q-.4 0-.6.2t-.3.6.3.6.6.3h3.4q.4 0 .6-.3t.3-.6zm7.7-2.5v12.8q0 .4-.3.6t-.6.3H2.6q-.4 0-.6-.3t-.3-.6V8.6q0-.4.3-.6t.6-.3h18.8q.4 0 .6.3t.3.6zm.8-6V6q0 .3-.2.6t-.6.3H1.7q-.3 0-.6-.3T.9 6V2.6q0-.4.2-.6t.6-.3h20.6q.3 0 .6.3t.2.6z' })
    )
  );
};

exports.default = Icon;