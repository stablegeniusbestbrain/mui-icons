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
      _react2.default.createElement('path', { d: 'M15 13h2v-2h-2m0 10h2v-2h-2m0-14h2V3h-2m4 6h2V7h-2m0-2h2V3h-2m0 10h2v-2h-2m0 10h2v-2h-2m-8 2h2V3h-2m8 14h2v-2h-2M7 5h2V3H7M3 17h2v-2H3m0 6h2v-2H3m0-6h2v-2H3m4 2h2v-2H7m0 10h2v-2H7M3 5h2V3H3m0 6h2V7H3v2z' })
    )
  );
};

exports.default = Icon;