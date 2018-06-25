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
      _react2.default.createElement('path', { d: 'M4 18c-.6 0-1-.4-1-1v-6.4l-.6.3c-.4.2-1 0-1.3-.5-.2-.4 0-1 .5-1.3l2-1c.3-.1.6-.1.9 0 .3.2.5.6.5.9v8c0 .6-.4 1-1 1zm9 0H8c-.4 0-.8-.2-.9-.6-.2-.4-.1-.8.2-1.1l4-4c.2-.3.4-.6.4-1 0-.3-.2-.7-.4-.9-.5-.5-1.4-.5-1.9 0-.3.2-.4.6-.4.9 0 .6-.4 1-1 1s-1-.4-1-1c0-.9.3-1.7 1-2.3 1.2-1.3 3.4-1.3 4.7 0 .6.6 1 1.4 1 2.3s-.4 1.8-1 2.4L10.4 16H13c.6 0 1 .4 1 1s-.4 1-1 1zm8-5.6c.3-.5.5-1 .5-1.7 0-1.5-1.2-2.7-2.7-2.7-1.1 0-2 .6-2.5 1.5-.2.5-.1 1.1.4 1.3.5.3 1.1.1 1.4-.4.1-.2.4-.4.7-.4.4 0 .7.3.7.8s-.3.7-.7.7c-.6 0-1 .4-1 1s.4 1 1 1 1.2.6 1.2 1.3-.6 1.2-1.2 1.2-1.3-.6-1.3-1.2-.4-1-1-1-1 .4-1 1c0 1.7 1.5 3.2 3.3 3.2s3.2-1.5 3.2-3.2c0-1-.4-1.8-1-2.4z' })
    )
  );
};

exports.default = Icon;