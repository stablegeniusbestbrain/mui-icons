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
      _react2.default.createElement('path', { d: 'M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.1 0-2.1-.4-2.9-1.2l-7.8-8 1.3-1.2c.2-.2.5-.3.8-.3.2 0 .4.1.6.2L8 15.9V4c0-.8.7-1.5 1.5-1.5S11 3.2 11 4v7h1V1.5c0-.8.7-1.5 1.5-1.5S15 .7 15 1.5V11h1V2.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5V11h1V5.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5z' })
    )
  );
};

exports.default = Icon;