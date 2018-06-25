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
      _react2.default.createElement('path', { d: 'M19.4 8.9c.1 0 .2-.1.3-.2l.5-.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.5.5-.1.2C16.8 6.2 15 5.3 13 5.1V4h1c.6 0 1-.5 1-1s-.4-1-1-1h-4c-.6 0-1 .5-1 1s.4 1 1 1h1v1.1c-4.5.4-8 4.3-8 8.9 0 5 4 9 9 9s9-4 9-9c0-1.9-.6-3.6-1.6-5.1zM12 21c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zm1-8v-2c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1h-2zm-1-5c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 11c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z' })
    )
  );
};

exports.default = Icon;