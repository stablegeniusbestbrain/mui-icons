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
      _react2.default.createElement('path', { d: 'M10.3 22.3h12v-8.6h-5.6q-.5 0-.9-.4t-.4-.9V6.9h-5.1v15.4zM13.7 3v-.9q0-.1-.1-.3t-.3-.1H3.9q-.2 0-.3.1t-.2.3V3q0 .2.2.3t.3.1h9.4q.2 0 .3-.1t.1-.3zm3.4 9h4l-4-4v4zm6.9 1.7v9q0 .6-.4.9t-.9.4H9.9q-.6 0-1-.4t-.3-.9v-2.1H1.3q-.6 0-.9-.4t-.4-.9v-18Q0 .7.4.4t.9-.4h14.6q.5 0 .9.4t.3.9v4.4q.3.2.5.4l5.5 5.4q.4.4.6 1t.3 1.2z' })
    )
  );
};

exports.default = Icon;