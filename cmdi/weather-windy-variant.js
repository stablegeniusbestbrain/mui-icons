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
      _react2.default.createElement('path', { d: 'M6 6l.7.1C7.3 3.7 9.5 2 12 2c3 0 5.5 2.5 5.5 5.5l-.1.9c.5-.2 1-.4 1.6-.4 1.7 0 3 1.3 3 3s-1.3 3-3 3H6c-2.2 0-4-1.8-4-4s1.8-4 4-4zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2h13c.6 0 1-.4 1-1s-.4-1-1-1h-3.5V7.5C15.5 5.6 13.9 4 12 4S8.5 5.6 8.5 7.5V8H6zm12 10H4c-.6 0-1-.4-1-1s.4-1 1-1h14c1.7 0 3 1.3 3 3s-1.3 3-3 3c-.8 0-1.6-.3-2.1-.9-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0 .2.2.4.3.7.3.6 0 1-.4 1-1s-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;