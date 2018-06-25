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
      _react2.default.createElement('path', { d: 'M1.7 1.7h20.6v20.6H1.7V1.7zM13.9 6l-.2.4 1 1.2-.4 1.5.3.3 1.5-.7 1.4.7.3-.3-.4-1.5 1-1.2-.1-.4H17l-.7-1.3h-.4L15.1 6h-1.2zm-3.6 2.2q.4 0 .6.2t.1.8l2.4-.2q0-.8-.3-1.3t-.6-.7-1-.4-1.1-.1q-1.8 0-2.7.8t-.8 2.5v.9H5.6v1.7h1q.3 0 .3.1v5.2q0 .1-.1.2t-.3.1l-.9.1v1.2h6v-1.2l-2-.2h-.1-.1q-.1 0 0-.1t0-.1 0-.1v-5.2H12l.5-1.7H9.4q-.1 0 0-.1t0-.1V9.4v-.5q0-.2.1-.4t.3-.2.5-.1zm8.1 11.1v-1.2l-.7-.1h-.1l-.1-.1q-.1-.1.1-.1t0-.1v-7h-3.7l-.3 1.4 1.1.3q.3.1.3.3v5q0 .2-.1.2t-.2.1l-1 .1v1.2h4.7z' })
    )
  );
};

exports.default = Icon;