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
      _react2.default.createElement('path', { d: 'M20.4 3.1c-.4-.2-.8-.1-1.1.2l-3.9 3.9-4.3-3.5c-.4-.3-.9-.3-1.3.1L5.3 8.3c-.2.2-.3.4-.3.7v10c0 .4.2.8.6.9.1.1.3.1.4.1.3 0 .5-.1.7-.3l3.9-3.9 4.3 3.5c.4.3.9.3 1.3-.1l4.5-4.5c.2-.2.3-.4.3-.7V4c0-.4-.2-.8-.6-.9zM7 16.6V9.4l3-3v7.3c-.1 0-3 2.9-3 2.9zm4.1-2.9H11V6.2l4 3.1v7.5l-3.9-3.1zm7.9-.1l-3 3V9.3c.1 0 3-2.9 3-2.9v7.2z' })
    )
  );
};

exports.default = Icon;