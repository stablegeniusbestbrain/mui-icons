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
      _react2.default.createElement('path', { d: 'M6 19.5c0 .9 0 1.5-.9 1.5H3.9c-.9 0-.9-.6-.9-1.5s0-1.5.9-1.5h1.2c.9 0 .9.6.9 1.5zM9.9 6h10.2c.9 0 .9-.6.9-1.5S21 3 20.1 3H9.9C9 3 9 3.6 9 4.5S9 6 9.9 6zm-4.8 4.5H3.9c-.9 0-.9.6-.9 1.5s0 1.5.9 1.5h1.2c.9 0 .9-.6.9-1.5s0-1.5-.9-1.5zm0-7.5H3.9C3 3 3 3.6 3 4.5S3 6 3.9 6h1.2C6 6 6 5.4 6 4.5S6 3 5.1 3zm15 7.5H9.9c-.9 0-.9.6-.9 1.5s0 1.5.9 1.5h10.2c.9 0 .9-.6.9-1.5s0-1.5-.9-1.5zm0 7.5H9.9c-.9 0-.9.6-.9 1.5s0 1.5.9 1.5h10.2c.9 0 .9-.6.9-1.5s0-1.5-.9-1.5z' })
    )
  );
};

exports.default = Icon;