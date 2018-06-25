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
      _react2.default.createElement('path', { d: 'M21 6.9L17.1 3c-.3-.3-.7-.4-1-.4-.4 0-.8.1-1.1.4L4.1 13.9c-.3.3-.6.8-.8 1.2-.2.5-.3 1-.3 1.4V21h4.5c.4 0 .9-.1 1.4-.3.4-.2.9-.5 1.2-.8L21 9c.3-.3.4-.7.4-1.1 0-.3-.1-.7-.4-1zM5.8 15.1l8.3-8.3L15.3 8 7 16.3l-1.2-1.2zM7.5 19H6l-1-1v-1.5c0-.1 0-.3.2-.6l2.9 2.9c-.3.2-.5.2-.6.2zm1.4-.8L7.7 17 16 8.7l1.2 1.2-8.3 8.3zm9-9l-3.1-3.1 1.3-1.3 3.1 3.1-1.3 1.3z' })
    )
  );
};

exports.default = Icon;