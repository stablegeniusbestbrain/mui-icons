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
      _react2.default.createElement('path', { d: 'M9 15.1H8v-.5c-.3.4-.6.6-.9.6-.3 0-.5-.2-.6-.4 0-.1-.1-.4-.1-.7v-3.8h.9v3.9c.1.1.1.2.2.2.2 0 .4-.2.5-.4v-3.7h1v4.8zm-4.2-1.4v-1.9c.1-.5-.1-.8-.3-.8-.3 0-.5.3-.4.8v1.9c-.1.4.1.7.4.7.2 0 .4-.3.3-.7zm.9-1.9v1.8c0 .5 0 .8-.2 1.1-.3.3-.7.5-1 .5-.4 0-.8-.2-1.1-.5-.1-.3-.2-.6-.2-1.1v-1.7c0-.6.1-1 .2-1.2.3-.3.6-.5 1.1-.5.3 0 .7.2 1 .5.1.2.2.6.2 1.1zm-3.5.7v2.6h-1v-2.6S.2 9.2 0 8.6h1l.7 2.6.6-2.6h1.1l-1.2 3.9zm21.7-3.3s.1 1.1.1 2.3v1c0 1.2-.1 2.4-.1 2.4s-.2.9-.6 1.4c-.6.5-1.2.5-1.4.6-2 .1-5.1.1-5.1.1s-3.7 0-4.8-.1c-.3-.1-1-.1-1.6-.6-.4-.5-.6-1.4-.6-1.4s-.1-1.2-.1-2.4v-1c0-1.2.1-2.3.1-2.3s.2-1 .6-1.5c.6-.5 1.2-.5 1.4-.6 2-.1 5-.1 5-.1h.1s3 0 5 .1c.2.1.8.1 1.4.6.4.5.6 1.5.6 1.5zm-2.8 2.4c0-.4.1-.6.4-.6.3 0 .4.2.4.6v.5h-.8v-.5zm1.7 1.3v-1c0-.5-.1-.9-.3-1.2-.2-.3-.6-.5-1-.5s-.8.2-1 .5c-.2.3-.3.7-.3 1.2v1.7c0 .5.1.8.3 1.1.2.3.6.5 1 .5.5 0 .8-.2 1.1-.6.1-.1.1-.3.2-.5v-.7h-.9v.6c-.1.3-.2.4-.4.4-.3 0-.4-.2-.4-.7v-.8h1.7zm-4.1.8c0 .5-.1.7-.4.7-.1 0-.3-.1-.4-.2v-2.9c.1-.2.3-.3.4-.3.3 0 .4.2.4.7v2zm.1-3.5c-.3 0-.7.2-.9.6V8.7H17v6.4h.9v-.5c.3.4.6.6.9.6.3 0 .6-.2.7-.6.1-.2.1-.5.1-.9v-1.9c0-.5-.1-.8-.1-1-.1-.4-.4-.6-.7-.6zm-2.5 4.9v-4.8h-.9V14c-.2.2-.4.4-.5.4-.2 0-.2-.1-.2-.2v-3.9h-1v3.8c0 .3.1.6.1.7.1.2.3.4.6.4s.6-.2 1-.6v.5h.9zm-3.5 0V9.6h1.1v-.9h-3v.9h1v5.5h.9z' })
    )
  );
};

exports.default = Icon;