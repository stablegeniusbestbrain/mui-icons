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
      _react2.default.createElement('path', { d: 'M23.3 12.1c.1-.4.2-.9.2-1.3 0-2.7-2.1-4.8-4.7-4.8-1.4 0-2.7.6-3.6 1.6h-.1c-1-1-2.3-1.6-3.8-1.6-1.4 0-2.7.6-3.7 1.6-.3-.5-.7-.9-1.1-1.2C6 6.2 5.4 6 4.8 6c-.4 0-.9.1-1.3.3l-1.4.8C.6 7.8 0 9.6.8 11.1c.2.5.7.9 1.2 1.2V17c0 1.7 1.3 3 3 3 .8 0 1.5-.3 2-.8.5.5 1.2.8 2 .8h5c.8 0 1.5-.3 2-.8.8.5 1.7.8 2.8.8 2.8 0 5.2-2.4 5.2-5.2 0-1-.2-1.9-.7-2.7zM6 17c0 .6-.4 1-1 1s-1-.4-1-1v-6.4c-.1.1-.3.1-.5.1-.4 0-.8-.2-1-.5-.2-.5 0-1.1.5-1.4l1.4-.7c.1-.1.3-.1.4-.1.2 0 .4.1.6.2.3.1.6.5.6.8v8zm8 1H9c-.4 0-.8-.2-.9-.6-.2-.4-.1-.8.2-1.1l4-4c.2-.3.4-.6.4-1 0-.3-.2-.7-.4-.9s-.6-.4-1-.4-.7.1-.9.4c-.3.2-.4.6-.4.9 0 .6-.4 1-1 1s-1-.4-1-1c0-.9.3-1.7 1-2.3.6-.7 1.5-1 2.3-1s1.8.3 2.4 1c.6.6 1 1.4 1 2.3s-.4 1.8-1 2.4L11.4 16H14c.6 0 1 .4 1 1s-.4 1-1 1zm4.8 0c-1.8 0-3.3-1.5-3.3-3.2 0-.6.4-1 1-1s1 .4 1 1 .6 1.2 1.3 1.2 1.2-.6 1.2-1.2-.6-1.3-1.2-1.3-1-.4-1-1 .4-1 1-1c.4 0 .7-.3.7-.7s-.3-.8-.7-.8c-.3 0-.6.2-.7.4-.2.3-.5.5-.9.5-.2 0-.3 0-.5-.1-.5-.2-.6-.8-.4-1.3.5-.9 1.4-1.5 2.5-1.5 1.5 0 2.7 1.2 2.7 2.8 0 .6-.2 1.1-.5 1.6.6.6 1 1.4 1 2.4 0 1.7-1.5 3.2-3.2 3.2z' })
    )
  );
};

exports.default = Icon;