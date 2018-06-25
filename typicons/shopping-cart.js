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
      _react2.default.createElement('path', { d: 'M20.8 5.3c-.2-.2-.5-.3-.8-.3H6.2L6 3.8c-.1-.4-.5-.8-1-.8H2.8c-.6 0-1 .4-1 1s.4 1 1 1h1.4L6 16.2l.1.1v.1l.1.2.1.1.2.2h.1c.1.1.3.1.4.1h11c.6 0 1-.4 1-1s-.4-1-1-1H7.8l-.1-1H19c.5 0 .9-.4 1-.9l1-7c0-.2-.1-.5-.2-.8zm-2 1.7l-.2 2H15V7h3.8zM14 7v2h-3V7h3zm0 3v2h-3v-2h3zm-4-3v2H6.9l-.4-2H10zm-3 3h3v2H7.3L7 10zm8 2v-2h3.4l-.3 2H15z' }),
      _react2.default.createElement('circle', { cx: '8.5', cy: '19.5', r: '1.5' }),
      _react2.default.createElement('circle', { cx: '17.5', cy: '19.5', r: '1.5' })
    )
  );
};

exports.default = Icon;