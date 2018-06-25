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
      _react2.default.createElement('path', { d: 'M19.1 8.6q.2 2.4-1.8 3.4 1.6.4 2.3 1.4t.7 2.9q-.1.9-.5 1.6t-.8 1.2-1.3.8-1.7.5-1.9.2V24H12v-3.4h-1.6V24H8.3v-3.4H4.2l.4-2.5h1.5q.6 0 .8-.7v-5.3h.2Q7 12 6.9 12V8.2q-.2-.9-1.2-.9H4.2V5.1h4.1V1.7h2.1V5H12V1.7h2.1v3.4q1 .1 1.9.3t1.5.6 1.1 1 .5 1.6zm-2.9 7.3q0-.5-.2-.9t-.5-.6-.8-.4-.9-.3-1-.1-.9 0-.8 0-.7 0v4.5h2.7q.4 0 .7-.1t.8-.2.6-.3.5-.4.4-.5.1-.7zm-1-6.4q0-.4-.1-.8t-.4-.6-.7-.3-.7-.2-.9-.2-.7 0-.8 0-.5 0v4.1q.1 0 .5.1t.6 0 .7-.1.7 0 .7-.2.7-.2.4-.4.4-.5.1-.7z' })
    )
  );
};

exports.default = Icon;