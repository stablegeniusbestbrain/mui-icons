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
      _react2.default.createElement('path', { d: 'M2.6 10.6l5.8-5.8 1.7 1.7c-.3.9.1 1.8.9 2.2v5.6c-.6.3-1 1-1 1.7 0 1.1.9 2 2 2s2-.9 2-2c0-.7-.4-1.4-1-1.7V9.4l2.1 2.1c-.1.1-.1.3-.1.5 0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2c-.2 0-.4 0-.5.1l-2.6-2.6c.3-.9-.2-1.9-1.1-2.3-.4-.2-.9-.2-1.3-.1L9.8 3.4l.8-.8c.8-.8 2-.8 2.8 0l8 8c.8.8.8 2 0 2.8l-8 8c-.8.8-2 .8-2.8 0l-8-8c-.8-.8-.8-2 0-2.8z' })
    )
  );
};

exports.default = Icon;