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
      _react2.default.createElement('path', { d: 'M14.5 4.2q2 1 3.2 2.9t1.2 4q0 3-2 5.2T12 18.8v1.8h1.3q.2 0 .3.1t.1.3v.9q0 .1-.1.3t-.3.1H12v1.3q0 .2-.1.3t-.3.1h-.9q-.2 0-.3-.1t-.1-.3v-1.3H9q-.2 0-.3-.1t-.1-.3V21q0-.2.1-.3t.3-.1h1.3v-1.8q-2.9-.3-4.9-2.5t-2-5.2q0-2.2 1.2-4t3.1-2.9Q5.5 2.9 4.7.6q-.1-.2 0-.4t.4-.2H6q.3 0 .4.3.6 1.4 1.9 2.3t2.8.8 2.9-.8T15.9.3q.1-.3.5-.3h.8q.2 0 .4.2t0 .4q-.8 2.3-3.1 3.6zm-3.4 12.9q2.5 0 4.3-1.7t1.7-4.3-1.7-4.2-4.3-1.8-4.2 1.8-1.8 4.2 1.8 4.3 4.2 1.7z' })
    )
  );
};

exports.default = Icon;