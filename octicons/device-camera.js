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
      _react2.default.createElement('path', { d: 'M22.5 4.5h-12C10.5 3.7 9.8 3 9 3H3c-.8 0-1.5.7-1.5 1.5C.7 4.5 0 5.2 0 6v13.5c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zM9 7.5H3V6h6v1.5zM15.8 18c-3 0-5.3-2.3-5.3-5.2s2.3-5.3 5.3-5.3S21 9.8 21 12.8 18.7 18 15.8 18zm3.7-5.2c0 2-1.7 3.7-3.7 3.7S12 14.8 12 12.8 13.7 9 15.8 9s3.7 1.7 3.7 3.8z' })
    )
  );
};

exports.default = Icon;