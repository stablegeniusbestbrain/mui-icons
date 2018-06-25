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
      _react2.default.createElement('path', { d: 'M20.1 7.8c1.2 0 2.2.9 2.2 2.1 0 1.2-1 2.2-2.2 2.2-1.1 0-2.1-1-2.1-2.2 0-1.2 1-2.1 2.1-2.1zM3 6.9c1.7 0 3 1.4 3 3v.3l6.3 3.3c.5-.3 1.2-.6 1.8-.6l2.2-3c0-2.1 1.7-3.8 3.8-3.8S24 7.8 24 9.9c0 2.2-1.7 3.9-3.9 3.9l-3 2.1c0 1.7-1.3 3-3 3s-3-1.3-3-3v-.1l-6.5-3.4c-.4.3-1 .5-1.6.5-1.7 0-3-1.3-3-3 0-1.6 1.3-3 3-3zm12 8c.7.4.9 1.1.6 1.8-.3.6-1.1.9-1.7.5l-1.9-.9c.2 1 1.1 1.8 2.1 1.8 1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.1-2.2-2.1-.3 0-.6.1-.9.2l1.8.9zM3 7.8C1.8 7.8.9 8.7.9 9.9c0 1.2.9 2.2 2.1 2.2.2 0 .5-.1.7-.1l-1.4-.8c-.7-.3-.9-1.1-.6-1.7.3-.6 1.1-.9 1.7-.6l1.7.9c0-1.1-1-2-2.1-2zm17.1-.9c-1.6 0-3 1.4-3 3 0 1.7 1.4 3 3 3s3-1.3 3-3c0-1.6-1.3-3-3-3z' })
    )
  );
};

exports.default = Icon;