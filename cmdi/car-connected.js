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
      _react2.default.createElement('path', { d: 'M5 14h14l-1.5-4.5h-11L5 14zm12.5 5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5-1.5.7-1.5 1.5.7 1.5 1.5 1.5zm-11 0c.8 0 1.5-.7 1.5-1.5S7.3 16 6.5 16 5 16.7 5 17.5 5.7 19 6.5 19zM18.9 9l2.1 6v8c0 .6-.4 1-1 1h-1c-.6 0-1-.4-1-1v-1H6v1c0 .6-.5 1-1 1H4c-.6 0-1-.4-1-1v-8l2.1-6c.2-.6.7-1 1.4-1h11c.7 0 1.2.4 1.4 1zM12 0c2.1 0 4.1.9 5.6 2.4l-1.4 1.4C15.1 2.6 13.6 2 12 2s-3.1.6-4.2 1.8L6.4 2.4C7.8.9 9.9 0 12 0zm0 4c1.1 0 2.1.4 2.8 1.2l-1.4 1.4C13 6.2 12.5 6 12 6c-.5 0-1 .2-1.4.6L9.2 5.2C9.9 4.4 10.9 4 12 4z' })
    )
  );
};

exports.default = Icon;