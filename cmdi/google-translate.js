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
      _react2.default.createElement('path', { d: 'M3 1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12L9 1H3zm9.3 4l.7 2h8v14h-8.6l.6 2h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-8.7zm-5.2.9c1.1 0 2 .4 2.7 1.1L8.7 8c-.3-.3-.8-.6-1.6-.6-1.4 0-2.5 1.1-2.5 2.5s1.1 2.6 2.5 2.6c1.6 0 2.2-1.2 2.3-1.8H7.1V9.4h3.8v.7c0 2.3-1.5 3.9-3.8 3.9S3 12.2 3 9.9c0-2.2 1.8-4 4.1-4zM16 10v1h-1.7l.4 1H18c-.3.6-.4 1.2-1.2 2.1-.4-.4-.7-.9-.8-1.1h-1c.1.4.6 1.1 1.2 1.8-.1.1-.3.3-.5.4l.3.9c.3-.3.5-.5.8-.7 1 1.1 2.1 2 2.1 2l.5-.6s-1-1-2-2.1c.6-.7 1.2-1.5 1.6-2.7h1v-1h-3v-1h-1z' })
    )
  );
};

exports.default = Icon;