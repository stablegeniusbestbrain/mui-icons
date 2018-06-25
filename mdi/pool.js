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
      _react2.default.createElement('path', { d: 'M22 21c-1.1 0-1.7-.4-2.2-.6-.4-.3-.6-.4-1.1-.4-.6 0-.8.1-1.2.4-.4.2-1 .6-2.2.6s-1.7-.4-2.1-.6c-.4-.3-.6-.4-1.2-.4-.5 0-.8.1-1.1.4-.5.2-1.1.6-2.2.6s-1.8-.4-2.2-.6c-.4-.3-.6-.4-1.2-.4s-.7.1-1.1.4c-.5.2-1.1.6-2.2.6v-2c.6 0 .8-.1 1.2-.4.4-.2 1-.6 2.1-.6s1.8.4 2.2.6c.4.3.6.4 1.2.4.5 0 .8-.1 1.1-.4.5-.2 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.3.6.4 1.1.4s.8-.1 1.2-.4c.4-.2 1.1-.6 2.2-.6s1.7.4 2.2.6c.3.3.5.4 1.1.4v2zm0-4.5c-1.1 0-1.7-.4-2.2-.6-.4-.3-.6-.4-1.1-.4-.6 0-.8.1-1.2.4-.4.2-1 .6-2.2.6s-1.7-.4-2.1-.6c-.4-.3-.6-.4-1.2-.4-.5 0-.8.1-1.1.4-.5.2-1.1.6-2.2.6s-1.7-.4-2.2-.6c-.4-.3-.6-.4-1.1-.4s-.8.1-1.2.4c-.5.2-1.1.6-2.2.6v-2c.6 0 .8-.1 1.2-.4.4-.2 1-.6 2.1-.6s1.8.4 2.2.6c.4.3.6.4 1.2.4.5 0 .7-.1 1.1-.4.5-.2 1.1-.6 2.2-.6s1.7.4 2.2.6c.3.3.6.4 1.1.4s.8-.1 1.2-.4c.4-.2 1-.6 2.2-.6s1.7.4 2.1.6c.4.3.6.4 1.2.4v2zM8.7 12c.5 0 .7-.1 1.1-.4.5-.2 1.1-.6 2.2-.6s1.7.4 2.2.6c.4.3.6.4 1.1.4s.8-.1 1.2-.4c.1 0 .3-.1.4-.2L10.5 5C8.9 3.5 7.5 3 5 3v2.5c1.8 0 2.9.4 4 1.5l1 1-3.2 3.3c.3.1.5.2.7.3.4.3.6.4 1.2.4z' }),
      _react2.default.createElement('circle', { cx: '16.5', cy: '5.5', r: '2.5' })
    )
  );
};

exports.default = Icon;