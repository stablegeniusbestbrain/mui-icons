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
      _react2.default.createElement('path', { d: 'M6.4 18.9v1.7H1.7v-1.7h4.7zm4.7-1.8q.4 0 .6.3t.3.6v3.4q0 .4-.3.6t-.6.3H7.7q-.3 0-.6-.3t-.2-.6V18q0-.3.2-.6t.6-.3h3.4zm2.2-5.1v1.7H1.7V12h11.6zM4.7 5.1v1.8h-3V5.1h3zm17.6 13.8v1.7h-9.9v-1.7h9.9zM9.4 3.4q.4 0 .6.3t.3.6v3.4q0 .4-.3.6t-.6.3H6q-.3 0-.6-.3t-.3-.6V4.3q0-.4.3-.6t.6-.3h3.4zm8.6 6.9q.3 0 .6.2t.3.6v3.5q0 .3-.3.6t-.6.2h-3.4q-.4 0-.6-.2t-.3-.6v-3.5q0-.3.3-.6t.6-.2H18zm4.3 1.7v1.7h-3V12h3zm0-6.9v1.8H10.7V5.1h11.6z' })
    )
  );
};

exports.default = Icon;