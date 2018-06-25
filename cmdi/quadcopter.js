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
      _react2.default.createElement('path', { d: 'M5.5 1C8 1 10 3 10 5.5c0 .9-.3 1.7-.7 2.4l.1.1h5.2l.1-.1c-.4-.7-.7-1.5-.7-2.4C14 3 16 1 18.5 1S23 3 23 5.5 21 10 18.5 10c-.9 0-1.7-.3-2.4-.7L15 10.4v3.2l1.1 1.1c.7-.4 1.5-.7 2.4-.7 2.5 0 4.5 2 4.5 4.5S21 23 18.5 23 14 21 14 18.5c0-.9.3-1.7.7-2.4l-.1-.1H9.4l-.1.1c.4.7.7 1.5.7 2.4C10 21 8 23 5.5 23S1 21 1 18.5 3 14 5.5 14c.9 0 1.7.3 2.4.7L9 13.6v-3.2L7.9 9.3c-.7.4-1.5.7-2.4.7C3 10 1 8 1 5.5S3 1 5.5 1zm0 2C4.1 3 3 4.1 3 5.5S4.1 8 5.5 8 8 6.9 8 5.5 6.9 3 5.5 3zm0 13C4.1 16 3 17.1 3 18.5S4.1 21 5.5 21 8 19.9 8 18.5 6.9 16 5.5 16zm13-13C17.1 3 16 4.1 16 5.5S17.1 8 18.5 8 21 6.9 21 5.5 19.9 3 18.5 3zm0 13c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5zM3.9 17.3l1.1.6c.2-.1.3-.1.5-.1.4 0 .8.3.8.7l-.1.1 1.2.7-.3.4-1.1-.6c-.2.1-.3.2-.5.2-.4 0-.8-.4-.8-.8l.1-.1-1.2-.7.3-.4zm-.3-11l1.2-.7v-.1c0-.4.3-.7.7-.7.2 0 .3 0 .5.1l1.1-.6.3.4-1.2.7.1.1c0 .4-.4.8-.8.8-.2 0-.3-.1-.5-.2l-1.1.6-.3-.4zm13.3-2l1.1.6c.2-.1.3-.1.5-.1.4 0 .8.3.8.7l-.1.1 1.2.7-.3.4-1.1-.6c-.2.1-.3.1-.5.1-.4 0-.7-.3-.7-.7v-.1l-1.2-.7.3-.4zm-.3 15l1.2-.8c0-.4.3-.7.7-.7.2 0 .3 0 .5.1l1.1-.6.3.4-1.1.8c0 .4-.4.8-.8.8-.2 0-.3-.1-.5-.2l-1.1.6-.3-.4z' })
    )
  );
};

exports.default = Icon;