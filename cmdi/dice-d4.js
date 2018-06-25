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
      _react2.default.createElement('path', { d: 'M13.4 15.1h.9v1.3h-.9V18h-1.5v-1.6H8.8l-.1-1 3.2-5h1.5v4.7zm-3.2 0h1.7v-2.6l-1.7 2.6zM22 21H2c-.4 0-.7-.2-.9-.5-.1-.3-.1-.7 0-1L11.1 3c.4-.6 1.4-.6 1.8 0l10 16.5c.1.3.1.7 0 1-.2.3-.5.5-.9.5zM3.8 19h16.4L12 5.4 3.8 19z' })
    )
  );
};

exports.default = Icon;