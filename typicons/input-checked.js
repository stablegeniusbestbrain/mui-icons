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
      _react2.default.createElement('path', { d: 'M16 19H8c-1.7 0-3-1.3-3-3V8c0-1.7 1.3-3 3-3h5c.6 0 1 .4 1 1s-.4 1-1 1H8c-.6 0-1 .5-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-3c0-.6.4-1 1-1s1 .4 1 1v3c0 1.7-1.3 3-3 3zm-2.8-4.2c-.4 0-.7-.1-1-.4l-2.6-2.6c-.6-.5-.6-1.4 0-1.9.5-.5 1.3-.5 1.8 0l1.5 1.4 3.4-5.4c.4-.7 1.2-.9 1.8-.6.7.4.9 1.2.6 1.8l-4.4 7c-.2.4-.5.7-.9.7h-.2z' })
    )
  );
};

exports.default = Icon;