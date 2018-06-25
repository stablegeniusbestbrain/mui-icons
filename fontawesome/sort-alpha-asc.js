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
      _react2.default.createElement('path', { d: 'M16.8 5.5h2.4l-1-3-.1-.6q-.1-.2-.1-.3l-.1.3v.3q0 .3-.1.3zm-6.1 13.8q0 .1-.1.3l-4.3 4.3q-.1.1-.3.1-.2 0-.3-.1l-4.3-4.3q-.2-.2-.1-.5.1-.2.4-.2h2.6V.4q0-.2.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3v18.5h2.6q.2 0 .3.1t.1.3zm11.2 1.6V24h-7.8v-1.2l4.9-7.1q.2-.2.3-.4l.2-.1h-.1-3.6v1.6h-1.6v-3.1h7.5v1.2L16.8 22q-.1.1-.3.4l-.1.1h3.9v-1.6h1.6zm1.2-12v1.4h-3.9V8.9h1l-.6-2h-3.2l-.7 2h1v1.4h-3.8V8.9h.9L16.9 0h2.2l3.1 8.9h.9z' })
    )
  );
};

exports.default = Icon;