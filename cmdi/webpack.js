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
      _react2.default.createElement('path', { d: 'M21 16.5c0 .4-.2.7-.5.9l-7.9 4.4c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-7.9-4.4c-.3-.2-.5-.5-.5-.9v-9c0-.4.2-.7.5-.9l7.9-4.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l7.9 4.4c.3.2.5.5.5.9v9zM12 4.2L5 8.1v7.8l7 4 7-4V8.1l-7-3.9zm0 2l4.9 2.9-4.9 2.8-4.9-2.8L12 6.2zm5 8.7l-4 2.3v-3.6l4-2.3v3.6zm-6 2.3l-4-2.3v-3.6l4 2.3v3.6z' })
    )
  );
};

exports.default = Icon;