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
      _react2.default.createElement('path', { d: 'M17.6 9.4c0-2.5-.9-5.6-1-5.7-.1-.4-.5-.7-.9-.7H8.3c-.4 0-.8.3-.9.7-.1.1-1 3.2-1 5.7 0 2.8 2 5 4.6 5.5V19h-1c-.6 0-1 .4-1 1s.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1h-1v-4.1c2.6-.5 4.6-2.7 4.6-5.5zM12 13c-1.8 0-3.2-1.3-3.5-3h7c-.3 1.7-1.7 3-3.5 3zM8.4 9c.1-1.5.5-3.1.7-4h5.8c.2.9.6 2.5.7 4H8.4z' })
    )
  );
};

exports.default = Icon;