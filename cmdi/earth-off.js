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
      _react2.default.createElement('path', { d: 'M22 5.3l-1.5 1.5c1 1.5 1.5 3.3 1.5 5.2 0 5.5-4.5 10-10 10-1.9 0-3.7-.5-5.2-1.5L5.3 22 4 20.7 20.7 4 22 5.3zm-4.1 12.1C19.2 16 20 14.1 20 12c0-1.4-.3-2.7-.9-3.8l-4.3 4.2c.1.2.2.4.2.6v3h1c.9 0 1.6.6 1.9 1.4zM11 19.9V18c-.5 0-.9-.2-1.3-.5L8.2 19c.9.5 1.8.8 2.8.9zm4-15.3V5c0 1.1-.9 2-2 2h-2v2c0 .6-.4 1-1 1H8v2h2.2l-2.1 2.1-3.9-3.9c-.1.6-.2 1.2-.2 1.8 0 1.7.6 3.4 1.5 4.7l-1.4 1.4C2.8 16.4 2 14.3 2 12 2 6.5 6.5 2 12 2c2.3 0 4.4.8 6.1 2.1l-1.4 1.4c-.5-.4-1.1-.7-1.7-.9z' })
    )
  );
};

exports.default = Icon;