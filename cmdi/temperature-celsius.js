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
      _react2.default.createElement('path', { d: 'M16.5 5c1.6 0 3 .5 4.2 1.3l-1.2 2.9c-.8-.8-1.8-1.2-3-1.2C14 8 12 10 12 12.5s2 4.5 4.5 4.5c1 0 2-.3 2.7-.9l1.2 2.8c-1.2.7-2.5 1.1-3.9 1.1-4.1 0-7.5-3.4-7.5-7.5S12.4 5 16.5 5zM6 3c1.7 0 3 1.3 3 3S7.7 9 6 9 3 7.7 3 6s1.3-3 3-3zm0 2c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1z' })
    )
  );
};

exports.default = Icon;