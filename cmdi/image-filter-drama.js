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
      _react2.default.createElement('path', { d: 'M19 18H6c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4h2c0-2.8-1.9-5.1-4.4-5.8C8.6 6.9 10.2 6 12 6c3 0 5.5 2.5 5.5 5.5v.5H19c1.6 0 3 1.3 3 3s-1.4 3-3 3zm.4-8c-.7-3.4-3.8-6-7.4-6-2.9 0-5.4 1.6-6.6 4-3 .4-5.4 2.9-5.4 6 0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2.1-4.8-4.6-5z' })
    )
  );
};

exports.default = Icon;