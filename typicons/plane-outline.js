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
      _react2.default.createElement('path', { d: 'M21 12.4l-5-2.9V4.8c0-2-1.6-3.5-3.5-3.5S9 2.8 9 4.8v4.7l-5 2.9c-1.3.7-1.9 2.4-1.3 3.8.6 1.4 2.2 2.1 3.6 1.7l2.7-.8v.9l-.9.7c-1.2.9-1.5 2.6-.6 3.9.8 1.3 2.5 1.8 3.8 1.1 0 0 .5-.2 1.2-.2l1.2.2c1.3.7 3 .2 3.8-1.1.9-1.3.6-3-.6-3.9L16 18v-.9l2.7.8c1.4.4 3-.3 3.6-1.7s0-3-1.3-3.8zm-.6 3c-.2.5-.7.7-1.2.6L14 14.5v4.4l1.6 1.3c.4.3.5.9.2 1.3-.2.5-.8.6-1.2.4-.1 0-.9-.4-2.1-.4s-2 .4-2.1.4c-.4.2-1 .1-1.2-.4-.3-.4-.2-1 .2-1.3l1.6-1.3v-4.4L5.8 16c-.5.1-1-.1-1.2-.6-.2-.5 0-1 .4-1.3l6-3.4V4.8c0-.9.7-1.5 1.5-1.5s1.5.6 1.5 1.5v5.9l6 3.4c.4.3.6.8.4 1.3z' }),
      _react2.default.createElement('circle', { cx: '12.5', cy: '4.5', r: '.5' })
    )
  );
};

exports.default = Icon;