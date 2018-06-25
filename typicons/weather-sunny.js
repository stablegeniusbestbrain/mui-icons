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
      _react2.default.createElement('path', { d: 'M13 4l-1 2.9L11 4c-.2-.6.1-1.2.7-1.3.5-.2 1.1.1 1.3.6.1.2.1.5 0 .7zm-9 7l2.9 1L4 13c-.6.2-1.2-.1-1.3-.7-.2-.5.1-1.1.6-1.3.2-.1.5-.1.7 0zm7 9l1-2.9 1 2.9c.2.6-.1 1.2-.7 1.3-.5.2-1.1-.1-1.3-.6-.1-.2-.1-.5 0-.7zm9-7l-2.9-1 2.9-1c.6-.2 1.2.1 1.3.7.2.5-.1 1.1-.6 1.3-.2.1-.5.1-.7 0zM7 5.6l1.4 2.8-2.8-1.3c-.5-.3-.7-.9-.4-1.5.2-.5.8-.7 1.4-.4.2.1.4.2.4.4zM5.6 16.9l2.8-1.3-1.3 2.8c-.3.5-.9.7-1.5.4-.5-.2-.7-.8-.4-1.4.1-.2.2-.3.4-.4zm11.3 1.5l-1.3-2.8 2.8 1.3c.5.3.7.9.4 1.5-.2.5-.8.7-1.4.4-.2-.1-.3-.2-.5-.4zM18.4 7l-2.8 1.4 1.3-2.8c.3-.5.9-.7 1.5-.4.5.2.7.8.4 1.4-.1.2-.2.3-.4.4zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5zm0-7c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z' })
    )
  );
};

exports.default = Icon;