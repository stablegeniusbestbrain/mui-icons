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
      _react2.default.createElement('path', { d: 'M20.6.4q0-.2.1-.3T21 0h3.9q.3 0 .6.3t.2.6v3.8q0 .2-.1.3t-.3.1h-.9q-.2 0-.3-.1t-.1-.3V2.9l-3.4 3.4q1 1.3 1.4 2.9t.2 3.3q-.5 2.4-2.2 4.2t-4.2 2.1q-3 .4-5.5-1.2-1.6 1-3.4 1.2v1.8h1.2q.2 0 .4.1t.1.3v.9q0 .1-.1.3t-.4.1H6.9v1.3q0 .2-.2.3t-.3.1h-.8q-.2 0-.3-.1t-.2-.3v-1.3H3.9q-.2 0-.4-.1t-.1-.3V21q0-.2.1-.3t.4-.1h1.2v-1.8q-2-.2-3.7-1.5t-2.5-3.1-.5-4.2q.3-2.5 2.1-4.3t4.3-2.2q3-.4 5.5 1.2 1.9-1.3 4.3-1.3 2.7 0 4.8 1.7l3.4-3.4H21q-.2 0-.3-.1t-.1-.3V.4zM10.3 15.3q1.7-1.7 1.7-4.2T10.3 7q-1.7 1.7-1.7 4.1t1.7 4.2zM0 11.1q0 2.5 1.8 4.3T6 17.1q1.6 0 2.9-.7-2-2.3-2-5.3t2-5.2Q7.6 5.1 6 5.1q-2.5 0-4.2 1.8T0 11.1zm14.6 6q2.4 0 4.2-1.7t1.8-4.3-1.8-4.2-4.2-1.8q-1.6 0-2.9.8 2 2.2 2 5.2t-2 5.3q1.3.7 2.9.7z' })
    )
  );
};

exports.default = Icon;