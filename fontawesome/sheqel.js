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
      _react2.default.createElement('path', { d: 'M15 8.4V15q0 .2-.1.3t-.3.1h-2.2q-.2 0-.3-.1T12 15V8.4q0-1.5-1.1-2.6T8.4 4.7H4.7v15.4q0 .2-.1.4t-.3.1H2.1q-.1 0-.3-.1t-.1-.4v-18q0-.1.1-.3t.3-.1h6.3q1.8 0 3.3.9T14.1 5t.9 3.4zm5.1-6.3v11.8q0 1.8-.8 3.4t-2.5 2.4-3.3.9H7.3q-.2 0-.3-.1t-.1-.4V7.3q0-.2.1-.3t.3-.1h2.1q.2 0 .3.1t.2.3v10.3h3.6q1.5 0 2.6-1.1t1-2.6V2.1q0-.1.2-.3t.3-.1h2.1q.2 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;