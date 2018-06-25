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
      _react2.default.createElement('path', { d: 'M23.4 4q.1.1.1.3t-.1.3l-1.9 1.9q-.4.4-.9.4h-18q-.4 0-.6-.3T1.7 6V2.6q0-.4.3-.6t.6-.3h7.7V.9q0-.4.2-.6t.6-.3h1.8q.3 0 .6.3t.2.6v.8h6.9q.5 0 .9.4zM10.3 16.3h3.4v6.8q0 .4-.2.6t-.6.3h-1.8q-.3 0-.6-.3t-.2-.6v-6.8zm11.1-6q.4 0 .6.2t.3.6v3.5q0 .3-.3.6t-.6.2h-18q-.5 0-.9-.3L.6 13.2q-.1-.2-.1-.3t.1-.4l1.9-1.8q.4-.4.9-.4h6.9V7.7h3.4v2.6h7.7z' })
    )
  );
};

exports.default = Icon;