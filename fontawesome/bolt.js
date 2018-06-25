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
      _react2.default.createElement('path', { d: 'M17.9 7.6q.2.2 0 .6l-7.2 15.5q-.2.3-.5.3H10q-.3-.1-.4-.3t0-.4l2.6-10.8-5.4 1.3q-.1.1-.2.1-.2 0-.4-.2-.3-.2-.2-.5L8.7 2.1q.1-.1.2-.3t.4-.1h4.4q.2 0 .4.2t.2.4q0 .1-.1.2l-2.3 6.2 5.3-1.3h.2q.3 0 .5.2z' })
    )
  );
};

exports.default = Icon;