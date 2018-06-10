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
      _react2.default.createElement('path', { d: 'M20.6 1.7q0 3.5-1.5 6.2T15.6 12q2.1 1.4 3.5 4.1t1.5 6.2h1.3q.1 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1H2.1q-.1 0-.3-.1t-.1-.3v-.9q0-.2.1-.3t.3-.1h1.3q0-3.5 1.5-6.2T8.4 12q-2.1-1.4-3.5-4.1T3.4 1.7H2.1q-.1 0-.3-.1t-.1-.3V.4q0-.2.1-.3t.3-.1h19.8q.1 0 .3.1t.1.3v.9q0 .2-.1.3t-.3.1h-1.3zm-7.2 9.5q1.1-.4 2-1.2t1.7-2.1 1.3-2.8.5-3.4H5.1q0 1.8.5 3.4t1.3 2.8T8.6 10t2 1.2q.2.1.4.3t.1.5-.1.5-.4.3q-1.1.4-2 1.2t-1.7 2.1-1.3 2.8-.5 3.4h13.8q0-1.8-.5-3.4t-1.3-2.8-1.7-2.1-2-1.2q-.2-.1-.4-.3t-.1-.5.1-.5.4-.3z' })
    )
  );
};

exports.default = Icon;