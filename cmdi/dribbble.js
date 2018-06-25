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
      _react2.default.createElement('path', { d: 'M16.4 18.4c-.4-1.9-.9-3.7-1.4-5.2.5-.1 1-.1 1.6-.1.9 0 2 .1 3.1.3-.4 2.1-1.6 3.9-3.3 5zM12 19.8c-1.7 0-3.3-.6-4.6-1.5.2-.5.8-1.4 1.8-2.3.9-.9 2.3-1.8 4-2.4.6 1.6 1.2 3.6 1.6 5.7-.9.3-1.8.5-2.8.5zM4.2 12v-.1h.9c1.5 0 4.3-.1 7-1 .2.3.3.7.5 1-1.9.6-3.3 1.6-4.4 2.6-1 1-1.7 1.9-2.2 2.5-1.1-1.3-1.8-3.1-1.8-5zm4.4-7c.5.7 1.6 2.1 2.7 4.3-2.3.7-4.7.8-6.1.8H4.4C5 7.9 6.5 6 8.6 5zm3.4-.8c1.8 0 3.5.6 4.9 1.7C15.8 7.1 14.5 8 13 8.7c-1-2-2-3.4-2.7-4.3.6-.1 1.1-.2 1.7-.2zm6.1 3c1 1.2 1.6 2.8 1.7 4.4-1.1-.2-2.2-.3-3.2-.3-.8 0-1.6 0-2.3.2-.1-.4-.3-.9-.5-1.2 1.6-.7 3.1-1.7 4.3-3.1zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z' })
    )
  );
};

exports.default = Icon;