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
      _react2.default.createElement('path', { d: 'M20.7 12.6c-.1-.3-.2-.6-.4-.9.3-.6.5-1 .3-1.9-.2-.8-.8-1.7-1.6-2.5l-1.7-.9.8-1.8c.4-.8.4-1.8-.1-2.5-.5-.8-1.4-1.3-2.3-1.3-1 0-1.8.6-2.3 1.5 0 0-.8-.2-1.8.1l-1.3 1.2s-1.7.5-2 2-.4 3.4-.8 4.1S5 13 3.8 14.4c-.9 1.1-.7 2.3.1 3.2l5 5c.8.8 2.7 1.1 4-.3 1.4-1.4.5-3.3.5-3.3.4-.3 1.5-1.2 2.6-1.5s2.8-.9 3.7-2.1c.8-1 1.2-1.8 1-2.8zm-9.3 8.3c-.4.4-1 .4-1.4 0l-4.2-4.2c-.2-.2-.3-.4-.3-.7s.1-.5.3-.7l.7-.7 4.9 4.9c.2.2.3.4.3.7 0 .3-.1.5-.3.7zM18 11c-.5 0-.7-.5-1.1-.9s-1.3-.5-2-.2-1 1-1 1.7c0 1 .7 1.9 1.7 1.9.7 0 .9-.1 1.3-.3.6-.4.8-.8 1.2-.8s.7.2.7.8-.6 1.3-1.2 1.7-1.1.5-1.7.6c-.6.1-1 .1-1.8.6-.7.4-1.4.9-1.8 1.3l-4.6-4.6c.9-1.1 1.7-2.3 1.8-2.9l.7-3.9c.1-.4.4-.5.6-.5.3 0 .6.2.7.4l.4-1.3c.1-.3.4-.5.6-.5.4 0 .8.3.7.8l-.5 2.4c.6-1.2 1.5-2.7 2.1-3.8.2-.3.4-.6.9-.6s.9.6.7 1.1c-.2.4-2 3.5-2.8 4.8-.1.1 0 .2.2.1.3-.2 1-.7 1.7-.7 1.2-.1 1.8.4 2.1.6.4.3.8.8 1.1 1.3.2.5-.2.9-.7.9zm-.2.7c-.4 0-.7.1-.9.4s-.6.7-1.1.7c-.7 0-1.1-.5-1.1-1.1s.4-1 1.1-1c.5 0 .9.4 1.1.7s.5.3.9.3z' })
    )
  );
};

exports.default = Icon;