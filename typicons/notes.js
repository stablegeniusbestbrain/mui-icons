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
      _react2.default.createElement('path', { d: 'M18.8 4.1c-.1-.1-.2-.2-.4-.2l-11 1.3c-.2 0-.4.2-.4.5V16c-1.7 0-3 1.1-3 2.5S5.3 21 7 21s3-1.1 3-2.5v-7.6l6-.6V14c-1.7 0-3 1.1-3 2.5s1.3 2.5 3 2.5 3-1.1 3-2.5V4.4c0-.1-.1-.2-.2-.3z' })
    )
  );
};

exports.default = Icon;