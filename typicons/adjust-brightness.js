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
      _react2.default.createElement('path', { d: 'M12 6.9L13 4c.1-.2.1-.5 0-.7-.2-.5-.8-.8-1.3-.6-.6.1-.9.7-.7 1.3l1 2.9zM4 11c-.2-.1-.5-.1-.7 0-.5.2-.8.8-.6 1.3.1.6.7.9 1.3.7l2.9-1L4 11zm8 6.1L11 20c-.1.2-.1.5 0 .7.2.5.8.8 1.3.6.6-.1.9-.7.7-1.3l-1-2.9zm9.3-5.4c-.1-.6-.7-.9-1.3-.7l-2.9 1 2.9 1c.2.1.5.1.7 0 .5-.2.8-.8.6-1.3zM5.6 7l2.8 1.4-1.3-2.8c-.1-.2-.3-.3-.5-.4-.6-.3-1.2-.1-1.4.4-.3.6-.1 1.2.4 1.5zm-.4 10.4c-.3.6-.1 1.2.4 1.4.6.3 1.2.1 1.4-.4l1.4-2.8L5.6 17c-.2.1-.3.2-.4.4zm13.2-.5l-2.8-1.3 1.4 2.8c.1.2.2.3.4.4.6.3 1.2.1 1.4-.4s.1-1.2-.4-1.5zm.4-10.3c.3-.6.1-1.2-.4-1.5-.6-.2-1.2 0-1.5.5l-1.3 2.8L18.4 7c.2-.1.3-.2.4-.4zm-6.8.9c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5 4.5-2 4.5-4.5-2-4.5-4.5-4.5z' })
    )
  );
};

exports.default = Icon;