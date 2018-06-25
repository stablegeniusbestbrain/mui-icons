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
      _react2.default.createElement('path', { d: 'M14.4 4s.5.4.6.7c0 .1-.3.2-.3.2-.1.1 0 .3-.1.3 0 .1-.1.1-.2.2-.1.2-2.3 4.7-2.7 5.2-.1.4-.2 1.9-.3 2.1-.1.2-5.1 7.1-5.2 7.4-.5.5-1.9.2-2.9-.5s-1.6-1.9-1.2-2.4c.2-.3 5-7.3 5.2-7.4.1-.2 1.4-.8 1.8-1.1.4-.5 3.9-4.2 4-4.3.1-.1 0-.2.1-.3 0 0 .2 0 .2-.1.1-.1 0-.3.1-.3.1-.1.5 0 .9.3zm-3.6.4l.9 1-1.4 1.5-.8-1.5c-.1-.2-.2-.2-.3-.2v-.3c-.1-.1-.3-.1-.3-.2s.1-.4.6-.7c0 0 .6-.4.9-.3.1 0 0 .2.1.3 0 .1.2.1.2.1.1.1 0 .2.1.3zm11.1 12.7c.4.7-.4 1.9-1.4 2.6-1 .7-2.3.8-2.7.3-.1-.2-5.1-7.2-5.2-7.4-.2-.2-.3-1.6-.4-2l-.1-.1c.3-.5 1-1.7 1.6-3l1.2 1.2c.3.3 1.6.9 1.8 1 .1.2 5.1 7.2 5.2 7.4z' })
    )
  );
};

exports.default = Icon;