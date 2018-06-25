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
      _react2.default.createElement('path', { d: 'M19.7 17.6q0-.9-.5-1.6t-1.4-.7q-.7 0-1.1.5t-.5 1.3.5 1.2 1.4.6q.7 0 1.2-.4t.4-.9zm-8.1 1.7q0 .1-.2.3l-4.2 4.3q-.2.1-.3.1-.2 0-.4-.1l-4.2-4.3q-.2-.2-.1-.5.1-.2.4-.2h2.5V.4q0-.2.2-.3t.3-.1h2.5q.2 0 .4.1t.1.3v18.5h2.5q.2 0 .4.1t.1.3zm10-.9q0 .8-.2 1.6t-.5 1.5-.9 1.3-1.3.9-1.7.3q-.9 0-1.5-.2l-.6-.2.6-1.5q.2.1.4.1.5.2 1 .2 1.1 0 1.8-.8t.9-1.9q-.3.3-.9.5t-1.1.1q-1.4 0-2.3-.9t-.9-2.3q0-1.4.9-2.4t2.5-1q1.6 0 2.7 1.3t1.1 3.4zm-.4-9.6v1.5h-6.3V8.8h2.3V3v-.3-.4l-.1.1q-.1.2-.4.5l-.8.7-1.1-1.1L17.4 0H19v8.8h2.2z' })
    )
  );
};

exports.default = Icon;