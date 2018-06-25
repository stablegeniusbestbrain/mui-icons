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
      _react2.default.createElement('path', { d: 'M3.6 10.8q-.1-.3-.1-.7 0-.3.2-.7t.3-.6q0-.3.1-.7t.3-.5q0-1.9 1.2-3.9T8.5.9q1.9-.9 4.4-.9 1.8 0 3.5.7.7.3 1.2.7t1 .7.7.9.6 1 .4 1.2.4 1.2.3 1.3q.7 1.2.7 2.1 0 .1-.1.5t-.1.5 0 .1.1.1q1 1.5 1.6 2.8t.6 2.8q0 .6-.3 1.4t-.7.7q-.2 0-.3-.1t-.3-.2-.2-.4-.2-.3-.2-.4-.1-.2h-.1q-.8 2.1-1.8 3 .3.3.8.5t.9.6.5.9v.2q0 .2-.1.2-.9 1.3-4.1 1.3-.7 0-1.5-.1t-1.3-.3-1.4-.4q-.2 0-.3-.1H12q-.6.6-1.7.8T8 24h-.9q-.4 0-1.3-.1t-1.3-.3-1-.6-.4-.8q0-.5.1-.8t.5-.7q.2 0 .6-.1t.6-.2h.2q.1 0 .1-.1h-.1q-.6-.2-1.4-1.4t-1-2.1l-.1-.1-.1.3q-.3.6-.8 1t-1 .5q-.1 0-.1-.1t-.1 0Q.2 17.7.2 17q0-3.6 3.4-6.2z' })
    )
  );
};

exports.default = Icon;