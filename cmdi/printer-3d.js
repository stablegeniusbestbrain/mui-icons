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
      _react2.default.createElement('path', { d: 'M19 6c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1zm0-4c1.7 0 3 1.3 3 3v6h-4V7H6v4H2V5c0-1.7 1.3-3 3-3h14zm-1 16.3c0 .3-.2.7-.5.8l-4.9 2.7c-.2.1-.4.2-.6.2-.2 0-.4-.1-.6-.2l-4.9-2.7c-.3-.1-.5-.5-.5-.8V13c0-.4.2-.7.5-.9l4.9-2.4c.2-.1.4-.2.6-.2.2 0 .4.1.6.2l4.9 2.4c.3.2.5.5.5.9v5.2zm-6-6.6L9 13l3 1.6 3-1.6-3-1.3zm-4 6l3 1.6v-3l-3-1.6v3zm8 0v-3l-3 1.6v3l3-1.6z' })
    )
  );
};

exports.default = Icon;