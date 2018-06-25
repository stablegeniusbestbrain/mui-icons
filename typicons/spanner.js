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
      _react2.default.createElement('path', { d: 'M20.3 7.1c-.1-.1-.2-.3-.4-.3-.1-.1-.3 0-.4.1l-2.7 2.6-1.9-.4-.4-1.9 2.7-2.6c.1-.1.2-.3.1-.5s-.1-.3-.3-.4c-.5-.1-1-.2-1.5-.2-2.8 0-5 2.2-5 5 0 .3 0 .7.1 1-.5.5-1.1.9-1.7 1.3-.8.7-1.8 1.4-3.2 2.5C5 14 4.5 15 4.5 16c0 1.9 1.6 3.5 3.5 3.5 1 0 2-.5 2.7-1.2 1.1-1.4 1.9-2.4 2.5-3.3.4-.6.8-1.1 1.3-1.6.3.1.7.1 1 .1 2.8 0 5-2.2 5-5 0-.4-.1-.9-.2-1.4zM8 17c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z' })
    )
  );
};

exports.default = Icon;