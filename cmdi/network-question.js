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
      _react2.default.createElement('path', { d: 'M17 3c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-4v2h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2H7c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10zm-4.8 2c-.9 0-1.6.2-2.1.6-.5.4-.8 1-.8 1.8h2c0-.3.1-.5.2-.7.2-.2.4-.2.7-.2.3 0 .6.1.7.3.2.1.3.4.3.7 0 .3-.1.6-.2.8-.2.3-.4.5-.6.6-.6.4-.9.7-1.1.9-.2.3-.3.7-.3 1.2h2c0-.3 0-.6.1-.7.1-.2.3-.4.5-.6.5-.2.9-.5 1.1-.9.3-.4.5-.8.5-1.3 0-.8-.3-1.4-.8-1.8-.5-.5-1.3-.7-2.2-.7zM11 12v2h2v-2h-2z' })
    )
  );
};

exports.default = Icon;