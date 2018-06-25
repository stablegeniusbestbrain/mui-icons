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
      _react2.default.createElement('path', { d: 'M7.1 8h9.8c.1 0 .1 0 .1-.1-.1-.5-.2-.9-.4-1.3-.4-.9-1.1-1.5-1.9-2l-.4-.2s0-.1.1-.1c.3-.4.6-.8.9-1.3.1-.1.1-.2 0-.3-.1-.1-.2 0-.3.1l-.9 1.3s-.1.1-.1 0c-.8-.3-1.6-.4-2.4-.4-.6 0-1.1.2-1.6.4h-.1L9 2.9s0-.1-.1-.1c-.1-.1-.2-.1-.2 0-.1 0-.1.1 0 .2 0 0 0 .1.1.1.2.4.5.8.8 1.2l.1.1h-.1c-.6.3-1.1.7-1.5 1.2-.6.6-1 1.4-1.1 2.3 0 .1 0 .1.1.1zm7.1-2.8c.4 0 .8.3.8.8 0 .4-.3.8-.7.8-.4 0-.8-.3-.8-.8-.1-.4.3-.8.7-.8zm-4.3 0c.4 0 .8.3.8.8 0 .4-.3.8-.7.8-.5 0-.9-.4-.9-.8s.4-.8.8-.8zM5 9c-.5 0-1 .5-1 1v5c0 .5.5 1 1 1s1-.5 1-1v-5c0-.5-.5-1-1-1zm14 0c-.5 0-1 .5-1 1v5c0 .5.5 1 1 1s1-.5 1-1v-5c0-.5-.5-1-1-1zM7 17c0 .5.5 1 1 1h1v3c0 .5.5 1 1 1s1-.5 1-1v-3h2v3c0 .5.5 1 1 1s1-.5 1-1v-3h1c.5 0 1-.5 1-1V9H7v8z' })
    )
  );
};

exports.default = Icon;