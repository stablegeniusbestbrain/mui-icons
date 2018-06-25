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
      _react2.default.createElement('path', { d: 'M5 15H3v2h2m-2 4h18v-2H3m2-8H3v2h2m14-4h2V7h-2m0-2h2V3h-2M5 7H3v2h2m14 8h2v-2h-2m0-2h2v-2h-2m-2-8h-2v2h2m-4-2h-2v2h2m4 6h-2v2h2m-4-6h-2v2h2M5 3H3v2h2m8 6h-2v2h2M9 3H7v2h2m4 10h-2v2h2m-4-6H7v2h2v-2z' })
    )
  );
};

exports.default = Icon;