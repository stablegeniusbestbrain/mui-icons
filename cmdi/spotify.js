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
      _react2.default.createElement('path', { d: 'M17.9 10.9C14.7 9 9.3 8.8 6.3 9.8c-.5.1-1-.2-1.1-.6-.2-.5.1-1 .6-1.2 3.5-1 9.4-.8 13.1 1.3.4.3.6.9.3 1.4-.2.3-.8.5-1.3.2zm-.1 2.8c-.3.3-.7.5-1.1.2-2.7-1.6-6.8-2.1-9.9-1.1-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.7-1 8.2-.5 11.3 1.4.3.1.4.6.2 1zm-1.2 2.7c-.2.4-.6.4-.9.2-2.3-1.4-5.3-1.7-8.8-.9-.3.1-.6-.2-.7-.4-.1-.4.1-.7.4-.8 3.8-.8 7.1-.5 9.7 1.1.4.2.4.5.3.8zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.6 2 12 2z' })
    )
  );
};

exports.default = Icon;