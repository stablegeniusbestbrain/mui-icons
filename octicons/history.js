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
      _react2.default.createElement('path', { d: 'M13.5 19.5h-3V9H18v3h-4.5v7.5zM12 1.5C8.7 1.5 5.8 3 3.9 5.4L1.5 3v6h6L5.3 6.8c1.5-2 4-3.4 6.7-3.4 4.7 0 8.6 3.9 8.6 8.6s-3.9 8.6-8.6 8.6A8.6 8.6 0 0 1 3.4 12c0-.5.1-1 .2-1.5h-2c-.1.5-.1 1-.1 1.5 0 5.8 4.7 10.5 10.5 10.5S22.5 17.8 22.5 12 17.8 1.5 12 1.5z' })
    )
  );
};

exports.default = Icon;