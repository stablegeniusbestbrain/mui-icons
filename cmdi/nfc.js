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
      _react2.default.createElement('path', { d: 'M10.6 7.7s.6-.3 1 .1c.3.5 1.3 2.1 1.3 3.8 0 1.7-.4 3.5-.8 4.1-.5.6-.9.6-1.2.4-.4-.3-5.4-4.1-5.7-4.2-.2-.1-.4.2-.1 1.6.3 1.5-.1 1.9-.5 2-.4 0-1.5-.3-1.6-3.3 0-3.1.8-3.6 1.1-3.6.8 0 6.2 4.9 6.5 4.9.4-.1.5-2.2-.1-3.8-.7-1.7.1-2 .1-2zm8.7-3.1C21.1 8.2 21 11.7 21 12c0 .3.1 3.8-1.7 7.4 0 0-.5.5-1.2.2s-.4-1.2-.4-1.2 1.4-2.8 1.4-6.3V12c0-3.5-1.4-6.4-1.4-6.4s-.3-.9.4-1.2c.7-.3 1.2.2 1.2.2zm-3.5 1.7c1.5 2.7 1.4 5.4 1.3 5.7.1.3.2 2.9-1.3 5.9 0 0-.5.5-1.2.2-.7-.4-.5-1.2-.5-1.2s1-1.4 1.1-4.8V12c-.1-3.5-1.1-4.8-1.1-4.8s-.2-.8.5-1.2c.7-.3 1.2.3 1.2.3z' })
    )
  );
};

exports.default = Icon;