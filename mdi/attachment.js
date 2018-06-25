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
      _react2.default.createElement('path', { d: 'M2 12.5C2 9.5 4.5 7 7.5 7H18c2.2 0 4 1.8 4 4s-1.8 4-4 4H9.5C8.1 15 7 13.9 7 12.5S8.1 10 9.5 10H17v2H9.4c-.5 0-.5 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.6 9 4 10.6 4 12.5S5.6 16 7.5 16H17v2H7.5c-3 0-5.5-2.5-5.5-5.5z' })
    )
  );
};

exports.default = Icon;