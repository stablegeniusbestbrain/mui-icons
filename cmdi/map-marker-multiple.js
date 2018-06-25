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
      _react2.default.createElement('path', { d: 'M14 11.5c1.4 0 2.5-1.1 2.5-2.5S15.4 6.5 14 6.5 11.5 7.6 11.5 9s1.1 2.5 2.5 2.5zM14 2c3.9 0 7 3.1 7 7 0 5.3-7 13-7 13S7 14.3 7 9c0-3.9 3.1-7 7-7zM5 9c0 4.5 5.1 10.7 6 11.8L10 22S3 14.3 3 9c0-3.2 2.1-5.8 5-6.7-1.8 1.6-3 4-3 6.7z' })
    )
  );
};

exports.default = Icon;