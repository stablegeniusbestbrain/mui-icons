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
      _react2.default.createElement('path', { d: 'M18.9 21.4q0-.3-.3-.6t-.6-.2-.6.2-.3.6.3.6.6.3.6-.3.3-.6zm1.7-10.2q0-2.5-2.3-2.5h-.7q-.2-.4-.7-.6t-1-.2-.9.2q-.7-.7-1.6-.7-.4 0-.8.1t-.6.4V3.4q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2v7.7q-.3 0-.7-.2t-.7-.4-.9-.4-1.2-.2q-.9 0-1.3.6T3.4 12q0 .3 1.9 1.2.6.3.9.5.8.5 1.9 1.5 1.1 1 1.4 1.4.8.9.8 1.8v.5h8.6v-.5q0-.9.4-2.2t.8-2.6.5-2.4zm1.7-.1q0 1.8-.9 4.3-.8 2.2-.8 3v3.9q0 .7-.5 1.2t-1.2.5h-8.6q-.7 0-1.2-.5t-.5-1.2v-3.9q0-.1-.1-.3t-.2-.3-.2-.3-.3-.3-.3-.3-.3-.2-.2-.2q-1-.9-1.8-1.4l-.8-.4q-.6-.3-.9-.5t-.9-.5-.7-.8-.2-.9q0-1.7.9-2.8t2.5-1.1q1 0 1.8.3v-5q0-1.4 1-2.4t2.4-1q1.4 0 2.4 1t1 2.4v2.3q.8 0 1.6.5.3-.1.6-.1 1.3 0 2.4.9 1.8-.1 2.9 1.1t1.1 3z' })
    )
  );
};

exports.default = Icon;