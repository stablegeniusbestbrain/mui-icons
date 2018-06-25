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
      _react2.default.createElement('path', { d: 'M8.5 13.1h.7v3.7h.7v-3.7h.7v-.6H8.5zm3.7 2.9c-.1.1-.6.4-.6 0v-2.4H11v2.6c0 .8.8.6 1.2.2v.4h.6v-3.2h-.6V16zm2.3-2.4c-.4 0-.6.3-.6.3v-1.4h-.6v4.3h.6v-.3s.2.3.6.3c.3 0 .6-.3.6-.7v-1.7s-.3-.8-.6-.8zm-.1 2.4c0 .3-.1.4-.4.3l-.1-.1v-2s.1 0 .1-.1c.2-.1.4.1.4.3V16zm2.3-.1c0 .2-.1.4-.3.4-.1 0-.3-.2-.3-.4v-.6h1.2v-.8c0-.3-.1-.5-.3-.7-.1-.2-.4-.2-.6-.2-.2 0-.4 0-.6.2-.2.1-.3.4-.3.7v1.4c0 .2.1.5.2.6.2.2.4.3.6.3.3 0 .6-.1.8-.3.1-.2.2-.4.2-.6v-.2h-.6v.2zm-.6-1.4c0-.2.1-.4.3-.4s.3.2.3.4v.3h-.6v-.3zM13 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4.1-9-9-9zm1.6 3.4h.8v2.7c0 .1 0 .1.1.1s.3-.1.4-.2V6.4h.8v3.5h-.8v-.3c-.2.1-.3.2-.4.2-.1.1-.3.1-.4.1-.2 0-.3 0-.4-.1-.1-.1-.1-.3-.1-.5V6.4zm-2.6.9c0-.5.4-1 1-1s1 .5 1 1V9c0 .6-.4 1-1 1s-1-.4-1-1V7.3zM9.9 5.2l.5 1.7.5-1.7h.9l-.9 2.7v2H10v-2L9 5.2h.9zm7.9 12.5c-.5.5-4.8.5-4.8.5s-4.3 0-4.8-.5-.5-3-.5-3 0-2.5.5-3 4.8-.5 4.8-.5 4.3 0 4.8.5.5 3 .5 3 0 2.5-.5 3zM13 9.3c.2 0 .2 0 .2-.2V7.2c0-.1-.1-.3-.2-.3s-.3.1-.3.3v1.9c0 .1.1.2.3.2z' })
    )
  );
};

exports.default = Icon;