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
      _react2.default.createElement('path', { d: 'M21.2 15.4l-5.9-9.8c-.8-1.3-2-2.1-3.3-2.1s-2.5.8-3.3 2l-5.9 9.9c-.4.7-.6 1.5-.6 2.2 0 .6.1 1.1.4 1.6C3.2 20.4 4.5 21 6 21h12c1.5 0 2.8-.6 3.4-1.8.3-.5.4-1 .4-1.6 0-.7-.2-1.5-.6-2.2zm-9.2-7c.8 0 1.6.7 1.6 1.6 0 .8-.7 1.6-1.6 1.6-.8 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6zm1.7 8.5s-.8.9-2.1.9h-.1c-.5 0-1-.2-1.2-.6-.3-.5-.4-1.1-.1-1.8l.4-1.2c.2-.7 0-.8-.1-.9h-.2c-.2 0-.6.1-.7.2-.1.1-.2 0-.3-.1-.1-.1-.1-.2 0-.3 0 0 .9-1 2.2-.9.6 0 1 .3 1.2.6.3.5.4 1.1.1 1.9l-.4 1.2c-.2.7 0 .8.1.8l.2.1c.2 0 .6-.2.7-.2.1-.1.2-.1.3 0 .1.1.1.2 0 .3z' })
    )
  );
};

exports.default = Icon;