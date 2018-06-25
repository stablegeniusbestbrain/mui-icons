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
      _react2.default.createElement('path', { d: 'M19.3 11.3v1.5q0 .3-.2.5t-.5.2h-2.7q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h2.7q.3 0 .5.2t.2.5zm-6.6 3.1V11q0-.7-.4-1.1t-1.2-.5H9.3q-.9 0-1.2.7-.4-.7-1.3-.7H5q-.7 0-1.1.5T3.5 11v3.4q0 .3.2.3h.8q.3 0 .3-.3v-3.1q0-.3.1-.5t.6-.2h1.2q.3 0 .5.2t.2.5v3.1q0 .3.3.3h.7q.3 0 .3-.3v-3.1q0-.3.2-.5t.5-.2h1.3q.3 0 .5.2t.2.5v3.1q0 .3.3.3h.7q.3 0 .3-.3zm7.9-1.3V11q0-.7-.4-1.1T19 9.4h-3.5q-.7 0-1.2.5t-.4 1.1v5.5q0 .3.3.3h.7q.3 0 .3-.3v-2.4q.4.6 1.2.6H19q.7 0 1.2-.5t.4-1.1zm1.7-8.3v14.4q0 1.3-.9 2.2t-2.2.9H4.8q-1.3 0-2.2-.9t-.9-2.2V4.8q0-1.3.9-2.2t2.2-.9h14.4q1.3 0 2.2.9t.9 2.2z' })
    )
  );
};

exports.default = Icon;