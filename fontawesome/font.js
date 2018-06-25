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
      _react2.default.createElement('path', { d: 'M10.6 7.5l-2.3 6h1.8q1.4 0 2.2.1.2 0 .7-.1-1.1-3.3-2.4-6zM.9 22.3v-1.1q.3-.1.7-.1t.8-.2.7-.2.6-.4.4-.6l3.1-8.3L11 1.7h1.7q.1.2.2.3l2.7 6.4q.4 1.1 1.4 3.5t1.5 3.6q.3.5.8 2t1 2.2q.3.6.5.8.2.2 1.1.4t1.2.3V22.3q-.8 0-2.5-.1t-2.6-.1q-1 0-2.9.1t-2.3.1v-1.1l1.8-.3.1-.1q.1-.1.2 0t.2-.1.2-.1.2-.1.1-.1 0-.2q0-.2-.4-1.3t-.9-2.4-.6-1.3l-6-.1q-.4.8-1.1 2.7T6 19.9q0 .3.2.5t.5.4.7.2.8.1.5 0V22.3q-.8 0-2.3-.2T4 22h-.3q-.2 0-.3.1-1.1.2-2.5.2z' })
    )
  );
};

exports.default = Icon;