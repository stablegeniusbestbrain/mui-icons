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
      _react2.default.createElement('path', { d: 'M18.9 7.7q0 3-2 5.2T12 15.4v3.5h3q.2 0 .3.1t.1.3v.8q0 .2-.1.4t-.3.1h-3v3q0 .2-.1.3t-.3.1h-.9q-.2 0-.3-.1t-.1-.3v-3h-3q-.2 0-.3-.1t-.1-.4v-.8q0-.2.1-.3t.3-.1h3v-3.5q-2-.2-3.7-1.4t-2.4-3-.7-3.9q.1-1.8 1-3.4T7 1.2 10.3.1q2.2-.3 4.2.7t3.2 2.8 1.2 4.1zm-13.8 0q0 2.5 1.8 4.3t4.2 1.7 4.3-1.7 1.7-4.3-1.7-4.2-4.3-1.8-4.2 1.8-1.8 4.2z' })
    )
  );
};

exports.default = Icon;