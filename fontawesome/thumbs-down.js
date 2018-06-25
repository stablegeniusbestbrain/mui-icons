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
      _react2.default.createElement('path', { d: 'M4.3 7.7q0 .4-.3.6t-.6.3q-.3 0-.6-.3t-.2-.6q0-.3.2-.6t.6-.2q.4 0 .6.2t.3.6zm2.1 6.9V6q0-.3-.2-.6t-.6-.3H1.7q-.3 0-.6.3T.9 6v8.6q0 .3.2.6t.6.2h3.9q.3 0 .6-.2t.2-.6zm15.1-2q.8.8.8 2 0 1-.8 1.8t-1.8.7H16q.1.2.1.4t.2.3.1.2q.2.5.4.8t.2.7.1 1.1v1.1q0 .4-.2.7t-.3.6-.5.5-.9.4-1.1.1q-.3 0-.6-.3-.2-.2-.4-.6t-.3-.7-.1-.8q-.2-.6-.2-.8t-.3-.7-.4-.6q-.4-.5-1.3-1.6-.7-.9-1.4-1.7t-1-.8q-.3 0-.6-.2t-.2-.6V6q0-.3.2-.6t.6-.3q.5 0 2.2-.5 1-.4 1.6-.6t1.6-.4 1.9-.2h1.8q1.7.1 2.6 1.1.8.9.7 2.4.5.5.7 1.3.2.8 0 1.5.6.8.6 1.9 0 .4-.3 1z' })
    )
  );
};

exports.default = Icon;