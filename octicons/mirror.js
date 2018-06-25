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
      _react2.default.createElement('path', { d: 'M23.3 7.1L12.8 0 2.3 7.1c-.5.2-.8.6-.8 1.2V24l11.3-6L24 24V8.3c0-.6-.3-1-.7-1.3zm-.8 14.7l-9-4.9V15H12v1.9l-9 4.9V8.3l9-6V9h1.5V2.3l9 6v13.5zM9 10.5h7.5v-3L21 12l-4.5 4.5v-3H9v3L4.5 12 9 7.5v3z' })
    )
  );
};

exports.default = Icon;