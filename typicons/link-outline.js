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
      _react2.default.createElement('path', { d: 'M17.5 6c.3 0 .6.1.8.3.4.5.4 1.1 0 1.6l-1.7 1.7.3.3c.5.6.9 1.4.9 2.2s-.4 1.6-.9 2.2l-4.2 4.2c-.6.5-1.4.9-2.2.9s-1.6-.4-2.2-.9l-.3-.3-1.7 1.7c-.2.2-.5.3-.8.3s-.6-.1-.8-.3c-.4-.5-.4-1.2 0-1.6l1.7-1.7-.3-.3c-.5-.6-.9-1.4-.9-2.2s.3-1.6.9-2.2l4.2-4.2c.6-.6 1.4-.8 2.2-.8s1.6.2 2.2.8l.3.3 1.7-1.7c.2-.2.5-.3.8-.3m0-2c-.8 0-1.6.3-2.2.9l-.5.5c-.7-.4-1.5-.5-2.3-.5-1.4 0-2.7.5-3.6 1.4l-4.2 4.2c-.9 1-1.5 2.2-1.5 3.6 0 .8.2 1.6.6 2.3l-.5.5c-.6.6-.9 1.4-.9 2.2 0 .8.3 1.6.9 2.2.6.6 1.4.9 2.2.9s1.6-.3 2.2-.9l.5-.5c.7.4 1.5.6 2.3.6 1.4 0 2.6-.6 3.6-1.5l4.2-4.2c.9-1 1.5-2.2 1.5-3.6 0-.8-.2-1.6-.6-2.3l.5-.5c.6-.6.9-1.4.9-2.2 0-.8-.3-1.6-.9-2.2-.6-.6-1.4-.9-2.2-.9zm-6.1 7.2c0 .5.2 1 .6 1.4.4.4.9.6 1.4.6L11.6 15c0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6l1.8-1.8M12.5 9c-.2 0-.5.1-.6.3l-4.2 4.2c-.2.1-.3.4-.3.6 0 .2.1.5.3.6l.3.3.7-.7c.2-.2.5-.3.8-.3s.6.1.8.3c.4.5.4 1.1 0 1.6l-.7.7.3.3c.1.2.4.3.6.3s.5-.1.6-.3l4.2-4.2c.2-.1.3-.4.3-.6 0-.2-.1-.5-.3-.6l-.3-.3-.7.7c-.2.2-.5.3-.8.3s-.6-.1-.8-.3c-.4-.5-.4-1.1 0-1.6l.7-.7-.3-.3c-.1-.2-.4-.3-.6-.3z' })
    )
  );
};

exports.default = Icon;