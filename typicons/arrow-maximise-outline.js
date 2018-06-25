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
      _react2.default.createElement('path', { d: 'M19 3h-5.2c-1.3 0-2.4.8-2.9 2H4V12.2c-1.2.4-2 1.5-2 2.8v7h7c1.3 0 2.6-.8 3-2h7V12.8c1.2-.4 2-1.5 2-2.8V3h-2zm-2 15h-5c-.6 0-1-.4-1-1s.4-1 1-1h3v-3.1c0-.5.4-1 1-1s1 .5 1 1V18zM6 7h5.1c.5 0 1 .4 1 1s-.5 1-1 1H8v3.1c0 .5-.4 1-1 1s-1-.5-1-1V7zm13 3c0 .6-.4 1-1 1s-1-.4-1-1V8.4l-3.3 3.3c-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4L15.6 7H14c-.6 0-1-.4-1-1s.4-1 1-1h5v5zM9 20H4v-5c0-.6.4-1 1-1s1 .4 1 1v1.6l3.3-3.3c.2-.2.4-.3.7-.3s.5.1.7.3c.4.4.4 1 0 1.4L7.4 18H9c.6 0 1 .4 1 1s-.4 1-1 1zm2.4-7.4c-.4-.4-.9-.6-1.4-.6-.4 0-.7.1-1 .3V10H11.3c-.2.3-.3.6-.3 1 0 .5.2 1 .6 1.4s.9.6 1.4.6c.4 0 .7-.1 1-.3V15h-2.3c.2-.3.3-.6.3-1 0-.5-.2-1-.6-1.4z' })
    )
  );
};

exports.default = Icon;