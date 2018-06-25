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
      _react2.default.createElement('path', { d: 'M19.6 8.7c-.4-.2-2.5-.4-3.9-.6.2-1.2.3-2.4.3-3.6C16 3.1 14.9 2 13.5 2S11 3.1 11 4.5c0 1.9-.7 2.7-1.6 3.7C8.8 7.5 8 7 7 7c-1.7 0-3 1.3-3 3v6c0 1.7 1.3 3 3 3 .8 0 1.4-.3 2-.8l.2.2c.9.8 3.6 1.6 5.8 1.6 1.9 0 2.6-.3 3.3-.6l.3-.1c.8-.3 1.5-1.2 1.7-2.2l.7-6c.1-1-.5-2.1-1.4-2.4zM7 17c-.5 0-1-.4-1-1v-6c0-.6.5-1 1-1s1 .4 1 1v6c0 .6-.5 1-1 1zm11.3-.1c0 .2-.3.5-.4.5l-.4.2c-.5.2-1 .4-2.5.4-1.9 0-4.1-.8-4.6-1.1-.2-.2-.4-.6-.4-.9v-5s.1-.6.7-1.3c.9-.9 2.3-2.3 2.3-5.2 0-.3.2-.5.5-.5s.5.2.5.5c0 1.4-.1 2.7-.5 4.3l-.3 1.4 1.3-.2c.6 0 4 .4 4.4.5 0 .1.1.2.1.4l-.7 5.9z' })
    )
  );
};

exports.default = Icon;