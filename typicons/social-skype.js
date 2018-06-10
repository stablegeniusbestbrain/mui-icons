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
      _react2.default.createElement('path', { d: 'M20.7 13.3c0-.4.1-.8.1-1.2 0-2.5-.9-4.6-2.6-6.3-1.6-1.7-3.7-2.6-6.1-2.6h-.8c-.8-.3-1.6-.5-2.4-.5-1.6 0-3.1.6-4.2 1.8C3.6 5.6 3 7 3 8.7c0 .8.2 1.6.5 2.3-.1.4-.1.7-.1 1.1 0 2.4.8 4.5 2.5 6.2 1.7 1.8 3.8 2.6 6.2 2.6h.9c.7.3 1.4.4 2.1.4 1.6 0 3.1-.6 4.2-1.8 1.1-1.1 1.7-2.6 1.7-4.2 0-.7-.1-1.3-.3-2zm-5.2 2c-.3.5-.7.8-1.3 1.1-.6.3-1.4.4-2.1.4-1 0-1.8-.2-2.4-.5-.5-.3-.9-.6-1.1-1-.3-.5-.5-.9-.5-1.3 0-.2.1-.4.3-.6.2-.2.4-.3.7-.3.2 0 .4.1.6.2.2.2.3.4.4.6 0 0 .1.3.4.7.1.2.3.3.5.4.3.2.6.2 1 .2.5 0 1-.1 1.4-.3.3-.3.5-.5.5-.9 0-.3-.1-.5-.3-.6-.2-.2-.4-.4-.7-.5h-.3l-.5-.2c-.2 0-.3 0-.4-.1-.7-.1-1.3-.3-1.8-.5-.4-.2-.8-.5-1.2-.9-.2-.3-.4-.8-.4-1.3 0-.6.2-1 .5-1.4.3-.4.7-.7 1.3-.9.6-.3 1.2-.4 1.9-.4.6 0 1.1.1 1.6.2.5.2.8.4 1.1.6.3.3.5.5.6.7.2.4.3.6.3.8 0 .3-.1.5-.3.7-.2.2-.4.3-.7.3-.2 0-.4-.1-.6-.2-.1-.1-.2-.3-.4-.5-.1-.3-.3-.6-.6-.8-.2-.2-.6-.3-1.1-.3s-.9.1-1.1.3c-.3.2-.5.4-.5.7 0 .1.1.3.2.4.1.1.2.2.4.3.1.1.3.1.5.2l.4.1c.2.1.4.1.5.1.3.1.8.2 1.5.4l1.2.6c.3.2.6.5.7.8.2.4.3.8.3 1.2 0 .6-.2 1.1-.5 1.5z' })
    )
  );
};

exports.default = Icon;