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
      _react2.default.createElement('path', { d: 'M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.9 4h1.8c.2 0 .2 0 .3.1v.3l-4.2 7.4 2.7 4.8v.3c-.1.1-.2.1-.3.1h-1.8c-.3 0-.5-.2-.6-.4l-2.6-4.8c.1-.3 4.1-7.4 4.1-7.4.1-.2.3-.4.5-.4zM7.5 8.6h1.9c.3 0 .4.1.5.3l1.3 2.3c-.1.1-2 3.5-2 3.5-.1.2-.3.4-.5.4H6.8c-.1 0-.2 0-.3-.1v-.3l2-3.5L7.3 9c-.1-.1-.1-.2 0-.3 0-.1.1-.1.2-.1z' })
    )
  );
};

exports.default = Icon;