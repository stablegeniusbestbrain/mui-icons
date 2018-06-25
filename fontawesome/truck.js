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
      _react2.default.createElement('path', { d: 'M8.6 18.9q0-.7-.5-1.2t-1.2-.6-1.2.6-.6 1.2.6 1.2 1.2.5 1.2-.5.5-1.2zM3.4 12h5.2V8.6H6.5q-.2 0-.3.1l-2.7 2.6q-.1.1-.1.3v.4zm17.2 6.9q0-.7-.5-1.2t-1.2-.6-1.2.6-.6 1.2.6 1.2 1.2.5 1.2-.5.5-1.2zM24 4.3V18q0 .2-.1.4t-.1.2-.3.2-.3 0-.3.1-.3 0-.3 0q0 1.4-1 2.4t-2.4 1-2.5-1-1-2.4h-5.1q0 1.4-1 2.4t-2.4 1-2.5-1-1-2.4H1.9q-.2 0-.3-.1t-.3 0-.2-.2-.2-.2 0-.4q0-.3.2-.6t.6-.3v-4.2-.5-.5-.5q0-.3.1-.5t.2-.4.3-.4L5 7.5q.2-.3.6-.5t.8-.1h2.2V4.3q0-.4.2-.6t.6-.3h13.7q.4 0 .6.3t.3.6z' })
    )
  );
};

exports.default = Icon;