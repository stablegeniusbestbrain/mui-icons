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
      _react2.default.createElement('path', { d: 'M11 20c-.8 0-1.6-.3-2.1-.9l-4-4c-.6-.5-.9-1.3-.9-2.1s.3-1.6.9-2.1C6 9.7 8 9.7 9.1 10.9l1.2 1.2 3.1-5.6C13.9 5.6 14.9 5 16 5c.5 0 1 .1 1.5.4.7.4 1.2 1 1.4 1.8.2.7.1 1.6-.3 2.3l-5 9c-.4.8-1.3 1.3-2.2 1.5H11zm-4-8c-.3 0-.5.1-.7.3s-.3.4-.3.7.1.5.3.7l4 4c.2.2.5.3.8.3.3-.1.6-.2.8-.5l5-9c.1-.2.1-.5.1-.8-.1-.2-.3-.4-.5-.6-.5-.2-1.1-.1-1.4.4l-4.3 7.9-3.1-3.1c-.2-.2-.4-.3-.7-.3z' })
    )
  );
};

exports.default = Icon;