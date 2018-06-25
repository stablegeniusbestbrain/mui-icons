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
      _react2.default.createElement('path', { d: 'M18.9 7.7q0 3-2 5.2T12 15.4v8.2q0 .2-.1.3t-.3.1h-.9q-.2 0-.3-.1t-.1-.3v-8.2q-2.9-.3-4.9-2.5t-2-5.2q0-1.6.6-3t1.7-2.4T8.1.6t3-.6 3 .6 2.5 1.7 1.6 2.4.7 3zm-7.8 6q2.5 0 4.3-1.7t1.7-4.3-1.7-4.2-4.3-1.8-4.2 1.8-1.8 4.2T6.9 12t4.2 1.7z' })
    )
  );
};

exports.default = Icon;