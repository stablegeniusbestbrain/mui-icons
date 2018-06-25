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
      _react2.default.createElement('path', { d: 'M23.1 13.5H11.4c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5h11.7c.9 0 .9.6.9 1.5s0 1.5-.9 1.5zM14.4 6c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5h8.7c.9 0 .9.6.9 1.5S24 6 23.1 6h-8.7zM0 5.9l2.1-2 2.4 2.4L10.6 0l2.2 2.1-8.3 8.3L0 5.9zM11.4 18h11.7c.9 0 .9.6.9 1.5s0 1.5-.9 1.5H11.4c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5z' })
    )
  );
};

exports.default = Icon;