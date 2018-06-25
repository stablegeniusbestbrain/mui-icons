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
      _react2.default.createElement('path', { d: 'M15 21h2v-2h-2m-4 2h2v-2h-2m8-6h2v-2h-2m0 10c1.1 0 2-.9 2-2h-2M7 5h2V3H7m12 14h2v-2h-2m0-12h-8v6h10V5c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3m4 6h2v-2H7M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3m0-2h2V7H3v2z' })
    )
  );
};

exports.default = Icon;