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
      _react2.default.createElement('path', { d: 'M4.7 11.1q0 .2-.1.4L.7 15.3q-.1.1-.3.1-.1 0-.3-.1T0 15V7.3q0-.2.1-.3t.3-.1q.2 0 .3.1l3.9 3.8q.1.2.1.3zM24 17.6v2.5q0 .2-.1.3t-.3.2H.4q-.1 0-.3-.2t-.1-.3v-2.5q0-.2.1-.3t.3-.2h23.2q.1 0 .3.2t.1.3zm0-5.2V15q0 .2-.1.3t-.3.1H9q-.2 0-.3-.1t-.1-.3v-2.6q0-.1.1-.3T9 12h14.6q.1 0 .3.1t.1.3zm0-5.1v2.6q0 .1-.1.3t-.3.1H9q-.2 0-.3-.1t-.1-.3V7.3q0-.2.1-.3t.3-.1h14.6q.1 0 .3.1t.1.3zm0-5.2v2.6q0 .2-.1.3t-.3.1H.4Q.3 5.1.1 5T0 4.7V2.1q0-.1.1-.3t.3-.1h23.2q.1 0 .3.1t.1.3z' })
    )
  );
};

exports.default = Icon;