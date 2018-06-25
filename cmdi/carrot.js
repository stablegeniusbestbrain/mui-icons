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
      _react2.default.createElement('path', { d: 'M16 10l-.2 1h-2.3c-.3 0-.5.2-.5.5s.2.5.5.5h2.1l-1 5h-2.1c-.3 0-.5.2-.5.5s.2.5.5.5h1.9l-.4 2c0 1.1-.9 2-2 2s-2-.9-2-2l-1-5h1.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H8.8L8 10c0-1.2.9-2.2 2.3-2.7l-1.4-2c-.3-.5-.2-1.1.3-1.4.4-.3 1-.2 1.3.2l.5.7V3c0-.6.4-1 1-1s1 .4 1 1v2.3l1.5-1.8c.3-.4 1-.4 1.4-.1.4.4.5 1 .1 1.4l-2.1 2.5c1.2.6 2.1 1.5 2.1 2.7z' })
    )
  );
};

exports.default = Icon;