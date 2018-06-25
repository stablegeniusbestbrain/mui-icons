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
      _react2.default.createElement('path', { d: 'M3 10h3V7H3v3zm2-5h3V2H5v3zm3 5h3V7H8v3zm9-9l-5 5h3v4h4V6h3l-5-5zM7.5 22c-.8 0-1.5-.4-1.8-1.1l-2.6-7.5L3 13c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v.3l-2.7 7.6c-.3.7-1 1.1-1.8 1.1h-9zm.1-2h8.8l2.2-6H5.4l2.2 6z' })
    )
  );
};

exports.default = Icon;