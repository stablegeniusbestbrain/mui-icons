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
      _react2.default.createElement('path', { d: 'M21.4 5.1q.4.4.6 1t.3 1.2v15.4q0 .6-.4.9t-.9.4H3q-.5 0-.9-.4t-.4-.9V1.3q0-.6.4-.9T3 0h12q.5 0 1.2.3t1 .6zm-6-3.3v5.1h5.1l-.3-.6L16 2.1l-.6-.3zm5.2 20.5V8.6H15q-.5 0-.9-.4t-.4-.9V1.7H3.4v20.6h17.2zM7.5 19.2v1.4h3.7v-1.4h-1l1.4-2.2q.1-.1.1-.2t.1-.2.1-.1q0 .1.1.2v.1q0 .1.1.1t.1.1l1.4 2.2h-1v1.4h3.9v-1.4h-.9L13 15.5l2.6-3.8h.9v-1.4h-3.7v1.4h1l-1.4 2.1q0 .1-.1.3t-.1.1l-.1.1q0-.1-.1-.1 0-.2-.2-.4l-1.4-2.1h1v-1.4H7.5v1.4h.9l2.6 3.7-2.6 3.8h-.9z' })
    )
  );
};

exports.default = Icon;