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
      _react2.default.createElement('path', { d: 'M22 12v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8c-.6 0-1-.4-1-1V8c0-1.1.9-2 2-2h3.2c-.1-.3-.2-.7-.2-1 0-1.7 1.3-3 3-3 1 0 1.9.5 2.4 1.2l.6.8.6-.8C13.1 2.5 14 2 15 2c1.7 0 3 1.3 3 3 0 .3-.1.7-.2 1H21c1.1 0 2 .9 2 2v3c0 .6-.4 1-1 1zM4 20h7v-8H4v8zm16 0v-8h-7v8h7zM9 4c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm6 0c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zM3 8v2h8V8H3zm10 0v2h8V8h-8z' })
    )
  );
};

exports.default = Icon;