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
      _react2.default.createElement('path', { d: 'M19 7.2V7c0-.8-.3-1.6-.9-2.1-.5-.6-1.3-.9-2.1-.9s-1.6.3-2.1.9L11 7.8c-.5-.5-1.2-.8-2-.8H8c-3.9 0-7 3.1-7 7 0 3.3 2.1 6.1 5 6.8v.2c0 .8.3 1.6.9 2.1.5.6 1.3.9 2.1.9s1.6-.3 2.1-.9l2.9-2.9c.5.5 1.2.8 2 .8h1c3.9 0 7-3.1 7-7 0-3.3-2.1-6.1-5-6.8zM17 19h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c1.7 0 3-1.3 3-3s-1.1-3-2.5-3h-2.1l1.3 1.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3L11.6 10l3.7-3.7c.2-.2.4-.3.7-.3s.5.1.7.3c.4.4.4 1 0 1.4L15.4 9h2.1C20 9 22 11.2 22 14s-2.2 5-5 5zm.8-7c.6.2 1.2 1 1.2 2 0 1.1-.9 2-2 2h-1c-.9 0-1.6.5-1.9 1.3l-3.7-3.7c-.4-.4-.9-.6-1.4-.6s-1 .2-1.4.6-.6.9-.6 1.4c0 .3.1.7.3 1-.8-.2-1.3-1-1.3-2 0-1.1.9-2 2-2h1c.9 0 1.6-.5 1.9-1.3l3.7 3.7c.4.4.9.6 1.4.6s1-.2 1.4-.6.6-.9.6-1.4c0-.3-.1-.7-.2-1zM10 10c0 .6-.4 1-1 1H8c-1.7 0-3 1.3-3 3s1.1 3 2.5 3h2.1l-1.3-1.3c-.4-.4-.4-1 0-1.4.2-.2.4-.3.7-.3s.5.1.7.3l3.7 3.7-3.7 3.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4L9.6 19H7.5C5 19 3 16.8 3 14s2.2-5 5-5h1c.6 0 1 .4 1 1z' })
    )
  );
};

exports.default = Icon;