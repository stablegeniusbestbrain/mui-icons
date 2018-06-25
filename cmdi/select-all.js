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
      _react2.default.createElement('path', { d: 'M9 9h6v6H9m-2 2h10V7H7m8-2h2V3h-2m0 18h2v-2h-2m4-2h2v-2h-2m0-6h2V7h-2m0 14c1.1 0 2-.9 2-2h-2m0-6h2v-2h-2m-8 10h2v-2h-2M9 3H7v2h2M3 17h2v-2H3m2 6v-2H3c0 1.1.9 2 2 2zM19 3v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2M3 9h2V7H3m4 14h2v-2H7m-4-6h2v-2H3m0-6h2V3c-1.1 0-2 .9-2 2z' })
    )
  );
};

exports.default = Icon;