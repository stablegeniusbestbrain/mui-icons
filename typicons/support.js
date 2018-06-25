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
      _react2.default.createElement('path', { d: 'M12 3.5c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5zm6.5 8.5c0 1.1-.3 2.1-.7 3l-1.9-2c0-.3.1-.6.1-1s-.1-.7-.1-1l1.9-2c.4.9.7 1.9.7 3zm-13 0c0-1.1.3-2.1.7-3l2 2c-.1.3-.2.6-.2 1s.1.7.2 1l-2 2c-.4-.9-.7-1.9-.7-3zm3.1-2L6.8 8.2l1.4-1.4L10 8.6c-.6.3-1.1.8-1.4 1.4zm-1.8 5.8L8.6 14c.1.3.3.6.6.8s.5.5.8.6l-1.8 1.8-1.4-1.4zm3.8-2.4c-.4-.4-.6-.9-.6-1.4 0-1.1.9-2 2-2s2 .9 2 2c0 .5-.2 1-.6 1.4-.7.8-2.1.8-2.8 0zm6.6-5.2L15.4 10c-.3-.6-.8-1.1-1.4-1.4l1.8-1.8 1.4 1.4zm-2.4 6.6c.3-.2.5-.5.6-.8l1.8 1.8-1.4 1.4-1.8-1.8c.3-.1.6-.3.8-.6zm.2-8.6l-2 2c-.3-.1-.6-.2-1-.2s-.7.1-1 .1L9 6.2c.9-.4 1.9-.7 3-.7s2.1.3 3 .7zM9 17.8l2-1.9c.3 0 .6.1 1 .1s.7-.1 1-.1l2 1.9c-.9.4-1.9.7-3 .7s-2.1-.3-3-.7z' })
    )
  );
};

exports.default = Icon;