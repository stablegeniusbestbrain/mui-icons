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
      _react2.default.createElement('path', { d: 'M12 1.9c-.3 0-.5 0-.8.2L3.8 6.3c-.5.3-.8.8-.8 1.4v8.6c0 .5.3 1.1.8 1.3l1.9 1.2c1 .4 1.3.4 1.7.4 1.4 0 2.3-.8 2.3-2.3V8.4c0-.1-.2-.2-.3-.2h-.9c-.1 0-.2.1-.2.2v8.5c0 .7-.7 1.3-1.8.8l-2-1.2c-.1-.1-.2-.1-.2-.2V7.7c0-.1.1-.2.2-.2l7.4-4.3h.2l7.5 4.3s.1.1.1.2v8.6c0 .1-.1.1-.1.2l-7.5 4.3h-.2L10 19.7c-.1-.1-.2-.1-.2-.1-.5.3-.6.4-1.1.5-.2.1-.3.2 0 .4l2.5 1.4c.3.2.5.2.8.2.3 0 .5 0 .8-.2l7.4-4.3c.5-.2.8-.8.8-1.3V7.7c0-.6-.3-1.1-.8-1.4l-7.4-4.2c-.2-.2-.5-.3-.8-.3zM14 8c-2.1 0-3.4.9-3.4 2.4 0 1.6 1.3 2.1 3.3 2.3 2.4.2 2.6.6 2.6 1 0 .9-.6 1.2-2.2 1.2-2 0-2.4-.5-2.6-1.4 0-.1-.1-.2-.2-.2h-.9c-.1 0-.2.1-.2.2 0 1.2.6 2.7 3.9 2.7 2.3 0 3.7-.9 3.7-2.5s-1.1-2-3.4-2.3c-2.3-.4-2.5-.5-2.5-1.1 0-.4.2-1 1.9-1 1.5 0 2.1.3 2.3 1.4 0 .1.1.1.2.1h1.1c.1-.1.1-.1.1-.2C17.6 8.8 16.4 8 14 8z' })
    )
  );
};

exports.default = Icon;