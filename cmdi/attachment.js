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
      _react2.default.createElement('path', { d: 'M7.5 18c-3 0-5.5-2.5-5.5-5.5S4.5 7 7.5 7H18c2.2 0 4 1.8 4 4s-1.8 4-4 4H9.5C8.1 15 7 13.9 7 12.5S8.1 10 9.5 10H17v1.5H9.5c-.6 0-1 .4-1 1s.4 1 1 1H18c1.4 0 2.5-1.1 2.5-2.5S19.4 8.5 18 8.5H7.5c-2.2 0-4 1.8-4 4s1.8 4 4 4H17V18H7.5z' })
    )
  );
};

exports.default = Icon;