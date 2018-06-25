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
      _react2.default.createElement('path', { d: 'M19.7 3.9q0-.9-.5-1.6t-1.4-.7q-.7 0-1.1.5t-.5 1.3.5 1.2 1.4.5q.7 0 1.2-.3t.4-.9zm-8.1 15.4q0 .1-.2.3l-4.2 4.3q-.2.1-.3.1-.2 0-.4-.1l-4.2-4.3q-.2-.2-.1-.5.1-.2.4-.2h2.5V.4q0-.2.2-.3t.3-.1h2.5q.2 0 .4.1t.1.3v18.5h2.5q.2 0 .4.1t.1.3zm9.6 3.2V24h-6.3v-1.5h2.3v-5.8-.3-.4l-.1.2-.4.4-.8.7-1.1-1.1 2.6-2.5H19v8.8h2.2zm.4-17.9q0 .9-.2 1.7t-.5 1.5-.9 1.3-1.3.9-1.7.3q-.9 0-1.5-.2l-.6-.2.6-1.5q.2.1.4.1.5.2 1 .2 1.1 0 1.8-.8t.9-2q-.3.4-.9.5t-1.1.2q-1.4 0-2.3-.9t-.9-2.3q0-1.4.9-2.4t2.5-1q1.6 0 2.7 1.3t1.1 3.3z' })
    )
  );
};

exports.default = Icon;