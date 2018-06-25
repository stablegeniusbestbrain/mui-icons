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
      _react2.default.createElement('path', { d: 'M10 3v9.3c-.5-.2-1-.3-1.5-.3C6 12 4 14 4 16.5S6 21 8.5 21s4.5-2 4.5-4.5V6h4V3h-7zm10 4v3.8l-2.3-2.3-.7.7 2.8 2.8-2.8 2.8.7.7 2.3-2.3V17h.5l2.9-2.8-2.2-2.2 2.2-2.2L20.5 7H20zm1 1.9l.9.9-.9 1V8.9zm0 4.3l.9 1-.9.9v-1.9z' })
    )
  );
};

exports.default = Icon;