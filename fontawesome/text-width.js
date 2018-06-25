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
      _react2.default.createElement('path', { d: 'M2.8 1.7l.7.4q.2.1 2.8.1.6 0 1.8-.1t1.8 0h10.7q.4.1.7-.4h1v4.5q0 1.1-.1 1.5-.5.2-.9.2-.3-.6-.7-1.7-.1-.1-.2-.6t-.2-1-.1-.5q-.1-.2-.3-.2-.1-.1-.9-.1H15q-.7 0-1.3.1-.1 1.1-.1 1.8v2.1-.7 2q0 1.3.1 2.5t0 2q0 .2-.1 1t0 1.2.2.9q.5.3 1.7.6t1.6.5v1l-.5.1q-1 0-2.9-.1t-2.7-.2q-.7 0-2.1.1t-2 .2V18q.2-.3.8-.5t1.3-.4 1-.4q.1-.2.2-1t.1-1.9 0-2.1 0-2.1 0-1.1v-.3q0-.2-.1-.3v-.6-1-1-.9q0-.4-.1-.5-.1-.1-2.2-.1-.5 0-2.1.2t-1.9.3q-.2.1-.4.9T3 6.7t-.5.8q-.6-.4-.8-.6V1.7zm16.5 17.2q.1 0 .5.3t.8.5.8.7.5.4q.3.3.3.6t-.3.7q-.1 0-.5.4t-.8.6-.8.6-.5.3q-.2 0-.3-.2t-.1-.4-.1-.4 0-.5.1-.2H5.1l.1.2q.1.2 0 .5t-.1.4-.1.4-.3.2q-.1 0-.5-.3t-.8-.6-.8-.6-.5-.4q-.3-.3-.3-.7t.3-.6q.1-.1.5-.4t.8-.7.8-.5.5-.3q.2 0 .3.1t.1.4.1.5 0 .4-.1.3h13.8q0-.1-.1-.3t0-.4.1-.5.1-.4.3-.1z' })
    )
  );
};

exports.default = Icon;