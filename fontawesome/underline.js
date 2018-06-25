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
      _react2.default.createElement('path', { d: 'M2.4 3q-.5 0-.6-.1l-.1-1.1q.2-.1.6-.1.8 0 1.5.1 1.7.1 2.2.1 1.1 0 2.2-.1h3.1v1.1q-.8.1-1.6.1t-1.1.4q-.1.2-.1 1.7V9l.2 3.7q0 1.7.6 2.7.5.8 1.3 1.3 1.2.6 2.4.6 1.4 0 2.6-.4.7-.2 1.3-.7.6-.4.9-.8.4-.8.7-1.5.2-1 .2-3.1V9.1q0-.6-.1-1.7t-.2-2.1l-.1-.8q0-.9-.3-1.2-.5-.4-1-.4H15.4l.1-1.2h1.1l2.7.1q1.1.1 2.7-.1h.2q.1.5.1.7 0 .1-.1.4-.6.2-1.1.2-1 .2-1.1.2-.2.2-.2.6 0 .1.1.4t0 .4q.1.2.3 5.3.1 2.6-.2 4-.2 1.1-.6 1.7-.5.8-1.5 1.6t-2.4 1.2q-1.5.5-3.4.5-2.3 0-3.8-.7-1.6-.6-2.4-1.6-.8-1-1.1-2.6-.2-1.1-.2-3.2V6.4q0-2.6-.3-2.9Q4 3 2.4 3zm19.9 18.9V21q0-.2-.1-.3t-.3-.1H2.1q-.1 0-.3.1t-.1.3v.9q0 .1.1.3t.3.1h19.8q.1 0 .3-.1t.1-.3z' })
    )
  );
};

exports.default = Icon;