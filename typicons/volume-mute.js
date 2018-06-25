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
      _react2.default.createElement('path', { d: 'M19.7 5.3c-.4-.4-1-.4-1.4 0l-1.6 1.5c-.3-.6-.9-1-1.6-1-.4 0-.9.2-1.3.5l-2.7 1.8c-.7.5-2.2.9-3.1.9-1.7 0-3 1.3-3 3v2c0 1.2.8 2.3 1.8 2.8l-1.5 1.5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3l2.5-2.5c.7.2 1.5.4 1.9.7l2.7 1.8c.4.3.9.5 1.3.5.9 0 1.9-.7 1.9-2.2V9.4l2.7-2.7c.4-.4.4-1 0-1.4zm-4.8 2.6h.1V9.3l-2 2V9.2l1.9-1.3zM7 12c0-.6.4-1 1-1 1.2 0 2.9-.5 4-1.1v2.4l-2.8 2.8C8.8 15 8.4 15 8 15c-.6 0-1-.4-1-1v-2zm3.3 3.4l1.7-1.7v2.4c-.5-.2-1.1-.5-1.7-.7zm4.7 2.7h-.1L13 16.8v-4.1l2-2V18.1z' })
    )
  );
};

exports.default = Icon;