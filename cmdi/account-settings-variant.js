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
      _react2.default.createElement('path', { d: 'M9 4C6.8 4 5 5.8 5 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 10c-2.7 0-8 1.3-8 4v2h11.1c-.1-.3-.1-.7-.1-1 0-1.5.5-3 1.4-4.2-1.5-.5-3.2-.8-4.4-.8zm9 0c-.1 0-.2.1-.3.2l-.1 1.3c-.3.2-.6.3-.9.5l-1.2-.5c-.2 0-.3 0-.4.1l-1 1.8c0 .1 0 .2.1.3l1.1.8c0 .2-.1.3-.1.5s.1.3.1.5l-1.1.8c-.1.1-.1.2-.1.3l1 1.8c.1.1.2.1.4.1l1.2-.5c.3.2.5.3.9.5l.1 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.6-.3.9-.5l1.2.5c.1 0 .3 0 .3-.1l1-1.8c.1-.1.1-.2 0-.3l-1.1-.8V19v-.5l1.1-.8c0-.1.1-.2 0-.3l-1-1.8c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.3-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2m-1 3.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z' })
    )
  );
};

exports.default = Icon;