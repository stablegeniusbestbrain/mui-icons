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
      _react2.default.createElement('path', { d: 'M22 17V7H6v10h16zm0-12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-6v2h2v2h-8v-2h2v-2H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h16zM2 3v12H0V3c0-1.1.9-2 2-2h18v2H2z' })
    )
  );
};

exports.default = Icon;