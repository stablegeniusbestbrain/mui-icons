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
      _react2.default.createElement('path', { d: 'M16 7.4L11.4 12l4.6 4.6-1.4 1.4-4.6-4.6L5.4 18 4 16.6 8.6 12 4 7.4 5.4 6l4.6 4.6L14.6 6 16 7.4zM21.8 9H17V8l.9-.8c.7-.7 1.3-1.2 1.7-1.6.3-.5.5-.9.5-1.3 0-.3-.1-.5-.2-.7-.2-.2-.5-.3-.9-.3-.3 0-.6.1-.8.2l-.7.4-.4-1.2c.2-.2.5-.4.9-.5.4-.1.9-.2 1.3-.2.8 0 1.4.2 1.8.6.4.4.6.9.6 1.6 0 .5-.2 1.1-.5 1.5-.4.5-.8 1-1.3 1.4l-.6.5h2.5V9z' })
    )
  );
};

exports.default = Icon;