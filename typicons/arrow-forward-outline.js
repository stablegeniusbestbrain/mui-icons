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
      _react2.default.createElement('path', { d: 'M4 20h-.3c-.4-.2-.7-.6-.7-1v-1c0-4.8 3.4-8.9 8-9.8V6.5c0-.5.2-1 .6-1.4.7-.8 2.1-.8 2.8 0l6.3 6.2c.2.2.3.4.3.7s-.1.5-.3.7l-6.3 6.2c-.7.8-2.1.8-2.8 0-.4-.4-.6-.9-.6-1.4v-1.4c-2.5.2-4.5.9-6.2 3.4-.2.3-.5.5-.8.5zm8-6h1v3.5l5.6-5.5L13 6.5V10s-.4 0-.9.1c-3.4.3-6.1 2.8-6.9 6 2.1-1.7 4.6-2 6.8-2.1z' })
    )
  );
};

exports.default = Icon;