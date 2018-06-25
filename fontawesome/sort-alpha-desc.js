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
      _react2.default.createElement('path', { d: 'M16.8 19.2h2.4l-1-2.9-.1-.7-.1-.2-.1.2v.3q0 .3-.1.4zm-6.1.1q0 .1-.1.3l-4.3 4.3q-.1.1-.3.1-.2 0-.3-.1l-4.3-4.3q-.2-.2-.1-.5.1-.2.4-.2h2.6V.4q0-.2.1-.3t.3-.1h2.6q.2 0 .3.1t.1.3v18.5h2.6q.2 0 .3.1t.1.3zm12.4 3.3V24h-3.9v-1.4h1l-.6-1.9h-3.2l-.7 1.9h1V24h-3.8v-1.4h.9l3.1-8.9h2.2l3.1 8.9h.9zM21.9 7.2v3.1h-7.8V9.1L19 2q.2-.2.3-.4l.2-.1h-.1-3.6v1.6h-1.6V0h7.5v1.2l-4.9 7.1-.3.3-.1.2h3.9V7.2h1.6z' })
    )
  );
};

exports.default = Icon;