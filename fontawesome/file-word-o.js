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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zm-15.8-12v1.4h1L8 20.6h2.1l1.7-6.5q.1-.3.1-.6.1-.3.1-.4l.1.4v.2q0 .2.1.4l1.7 6.5H16l2.2-8.9h1v-1.4h-4.1v1.4h1.3L15 17.6q0 .3-.1.6v.3l-.1-.3v-.3q0-.2-.1-.3l-1.9-7.3h-1.6l-1.9 7.3q0 .1-.1.3t0 .3l-.1.3v-.3q-.1-.3-.1-.6l-1.4-5.9h1.3v-1.4H4.8z' })
    )
  );
};

exports.default = Icon;