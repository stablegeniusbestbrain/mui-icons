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
      _react2.default.createElement('path', { d: 'M4 2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v3c0 .6.4 1 1 1h.5c.3 0 .5-.1.7-.3l3.7-3.7H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm0 2h16v12h-6.9L10 19.1V16H4V4zm8.2 1.5c-.9 0-1.6.2-2.2.5-.5.4-.8 1-.7 1.7h1.9c0-.3.1-.5.3-.6.2-.2.4-.3.7-.3.3 0 .6.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.2.7-.2.3-.4.4-.6.6-.6.3-.9.6-1.1.8-.2.3-.3.6-.3 1.1h2c0-.3 0-.5.1-.7.1-.1.3-.3.6-.4.4-.3.8-.5 1.1-.9.3-.4.4-.8.4-1.2 0-.7-.2-1.3-.8-1.7-.5-.4-1.3-.6-2.2-.6zM11 12v2h2v-2h-2z' })
    )
  );
};

exports.default = Icon;