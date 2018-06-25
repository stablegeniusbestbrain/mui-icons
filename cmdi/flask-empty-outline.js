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
      _react2.default.createElement('path', { d: 'M5 19c0 .6.4 1 1 1h12c.6 0 1-.4 1-1 0-.2-.1-.4-.2-.6L13 8.3V4h-2v4.3L5.2 18.4c-.1.2-.2.4-.2.6zm1 3c-1.7 0-3-1.3-3-3 0-.6.2-1.2.5-1.6L9 7.8V6c-.6 0-1-.4-1-1V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v1c0 .6-.4 1-1 1v1.8l5.5 9.6c.3.4.5 1 .5 1.6 0 1.7-1.3 3-3 3H6z' })
    )
  );
};

exports.default = Icon;