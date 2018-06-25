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
      _react2.default.createElement('path', { d: 'M23 4.3l-2 2V19c0 1.1-.9 2-2 2H6.3l-2 2L3 21.7 21.7 3 23 4.3zM5 3h14.2l-2 2h-1.4c-.1 1-1 1.8-2 1.8h-2v2c0 .5-.4 1-1 1h-2v2h1.6l-1.8 1.8L5 10.3v6.9l-2 2V5c0-1.1.9-2 2-2zm6.8 16v-1.2c-.6 0-1.2-.3-1.6-.8l-1.9 2h3.5zm4-6.2v3h1c.9 0 1.9.6 2.2 1.4V8.3l-3.7 3.6c.3.2.5.5.5.9z' })
    )
  );
};

exports.default = Icon;