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
      _react2.default.createElement('path', { d: 'M13 17v2h1c.6 0 1 .4 1 1h7v2h-7c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1H2v-2h7c0-.6.4-1 1-1h1v-2h2zm10.7-9.3c.2.1.3.4.3.7 0 .2-.1.5-.3.7l-2.5 2.5c-.1.1-.4.2-.7.2-.2 0-.5-.1-.7-.2-.8-.8-1.7-1.4-2.6-1.9-.4-.1-.6-.5-.6-.9V5.7c-1.5-.4-3-.7-4.6-.7-1.6 0-3.2.3-4.6.7v3.1c0 .4-.2.8-.6.9-.9.5-1.8 1.1-2.6 1.9-.2.1-.5.3-.7.3-.3 0-.5-.2-.7-.3L.3 9.1c-.2-.2-.3-.4-.3-.7 0-.3.1-.5.3-.7C3.3 4.8 7.5 3 12 3s8.6 1.8 11.7 4.7zM11 10v5h-1v-5h1zm1 0h3v3h-2v2h-1v-5zm2 2v-1h-1v1h1z' })
    )
  );
};

exports.default = Icon;