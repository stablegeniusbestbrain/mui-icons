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
      _react2.default.createElement('path', { d: 'M13.5 3h-3V0h3v3zm6 7.5h-15C3.7 10.5 3 9.8 3 9V6c0-.8.7-1.5 1.5-1.5h15l3 3-3 3zm-6-4.5h-3v3h3V6zm-3 18h3V12h-3v12z' })
    )
  );
};

exports.default = Icon;