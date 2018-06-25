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
      _react2.default.createElement('path', { d: 'M22.5 7.2c-.1-.1-.3-.2-.5-.2s-.3 0-.4.1L19 8.4V8c0-1.7-1.3-3-3-3H5C3.3 5 2 6.3 2 8v8c0 1.7 1.3 3 3 3h11c1.7 0 3-1.3 3-3v-.4l2.6 1.3c.1.1.2.1.4.1s.4 0 .5-.1c.3-.2.5-.6.5-.9V8c0-.3-.2-.7-.5-.8zM7 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' })
    )
  );
};

exports.default = Icon;