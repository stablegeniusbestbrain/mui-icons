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
      _react2.default.createElement('path', { d: 'M8.6 3.4h6.8V1.7H8.6v1.7zM24 12v6.4q0 .9-.6 1.5t-1.5.7H2.1q-.8 0-1.5-.7T0 18.4V12h9v2.1q0 .4.3.6t.6.3h4.2q.4 0 .6-.3t.3-.6V12h9zm-10.3 0v1.7h-3.4V12h3.4zM24 5.6v5.1H0V5.6q0-.9.6-1.5t1.5-.7h4.8V1.3q0-.6.3-.9t.9-.4h7.8q.5 0 .9.4t.3.9v2.1h4.8q.8 0 1.5.7t.6 1.5z' })
    )
  );
};

exports.default = Icon;