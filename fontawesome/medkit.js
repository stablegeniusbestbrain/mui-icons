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
      _react2.default.createElement('path', { d: 'M17.1 15v-2.6q0-.2-.1-.3t-.3-.1h-3V9q0-.2-.1-.3t-.3-.1h-2.6q-.2 0-.3.1t-.1.3v3h-3q-.2 0-.3.1t-.1.3V15q0 .2.1.3t.3.1h3v3q0 .2.1.3t.3.2h2.6q.2 0 .3-.2t.1-.3v-3h3q.2 0 .3-.1t.1-.3zM8.6 5.1h6.8V3.4H8.6v1.7zm-5.2 0v17.2H3q-1.2 0-2.1-.9T0 19.3V8.1Q0 6.9.9 6T3 5.1h.4zm15.9 0v17.2H4.7V5.1h2.2V3q0-.5.3-.9t.9-.4h7.8q.5 0 .9.4t.3.9v2.1h2.2zm4.7 3v11.2q0 1.2-.9 2.1t-2.1.9h-.4V5.1h.4q1.2 0 2.1.9t.9 2.1z' })
    )
  );
};

exports.default = Icon;