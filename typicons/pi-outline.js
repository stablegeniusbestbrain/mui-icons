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
      _react2.default.createElement('path', { d: 'M20.1 7.1c-.5-.5-1.3-.9-2.1-.9s-1.6.4-2.1.9c-.3.3-.6.4-.9.4s-.6-.1-.9-.4C12.8 5.8 10.9 5 9 5s-3.8.8-5.1 2.1c-.6.6-.9 1.3-.9 2.1s.3 1.6.9 2.2c.5.5 1.3.8 2.1.8V17c0 1.7 1.3 3 3 3s3-1.3 3-3c0 1.7 1.3 3 3 3s3-1.3 3-3v-4.2c.8-.3 1.5-.8 2.1-1.4.6-.6.9-1.4.9-2.2s-.3-1.5-.9-2.1zm-1.4 2.8c-.8.8-1.7 1.3-2.7 1.5V17c0 .6-.4 1-1 1s-1-.4-1-1v-5.6c-1-.2-1.9-.7-2.7-1.5-.4-.3-.8-.6-1.3-.7V17c0 .6-.4 1-1 1s-1-.4-1-1V9.2c-.5.1-.9.4-1.3.7-.2.2-.4.3-.7.3s-.5-.1-.7-.3c-.4-.3-.4-1 0-1.4C6.3 7.5 7.7 7 9 7s2.7.5 3.7 1.5c.6.7 1.5 1 2.3 1 .8 0 1.7-.3 2.3-1 .2-.2.4-.3.7-.3s.5.1.7.3c.4.4.4 1.1 0 1.4z' })
    )
  );
};

exports.default = Icon;