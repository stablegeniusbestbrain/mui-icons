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
      _react2.default.createElement('path', { d: 'M14.1 10H19V8.2h-3.6l-2-3.3c-.3-.5-.9-.9-1.5-.9-.2 0-.3.1-.5.1L6 5.8V11h1.8V7.3l2.1-.6L6 22h1.8l2.9-8.1L13 17v5h1.8v-6.4l-2.5-4.5.7-2.9m1-4.4c1 0 1.8-.8 1.8-1.8S15 .2 14 .2 12.2 1 12.2 2 13 3.8 14 3.8z' })
    )
  );
};

exports.default = Icon;