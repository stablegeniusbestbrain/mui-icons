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
      _react2.default.createElement('path', { d: 'M11.2 2.3c-.3 0-.5 0-.8.1L3.1 5.5C2 5.9 1.5 7 2 8.1L6.9 20c.3.8 1.1 1.2 1.8 1.3.3 0 .6-.1.8-.2l7.4-3c.7-.4 1.2-1.1 1.2-1.8 0-.3 0-.6-.1-.8l-5-12c-.3-.8-1-1.2-1.8-1.2zm3.5 0l3.4 8.3V4.3c0-1.1-.9-2-2-2m4 1.5v9L22.6 7c.4-1.1-.1-2.2-1.1-2.6m-10.3-.2l5 12-7.4 3.1-5-12' })
    )
  );
};

exports.default = Icon;