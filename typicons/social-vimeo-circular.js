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
      _react2.default.createElement('path', { d: 'M14.5 9.1c-.5 0-1 .3-1.5.8-.3.3-.5.6-.5 1.1.2-.2.4-.2.5-.2.2 0 .3 0 .4.2.2.3.2.6 0 1-.5 1-.9 1.4-1.1 1.4-.2 0-.4-.5-.6-1.5 0-.2-.1-.4-.1-.7-.1-.3-.1-.5-.2-.8 0-.2-.1-.4-.2-.6s-.2-.4-.3-.5c-.1-.1-.2-.1-.3-.1h-.2c-.3.1-.6.3-1 .6-.4.2-.7.5-.9.8l-.4.4.3.4.2-.1c.1-.1.2-.1.4-.2l.2-.1.1.1c.1.1.3.7.6 1.9.4 1.2.6 1.8.7 2 .1.3.3.6.6.7.1.1.3.2.4.2.2 0 .4-.1.6-.2.6-.4 1.3-1 2-2 .8-.9 1.3-1.9 1.5-2.9.1-1-.1-1.5-.8-1.6-.2 0-.3-.1-.4-.1zM12 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z' })
    )
  );
};

exports.default = Icon;