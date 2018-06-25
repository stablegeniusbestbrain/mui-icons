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
      _react2.default.createElement('path', { d: 'M15 17h2v-2h-2m0-10h2V3h-2M5 7H3v12c0 1.1.9 2 2 2h12v-2H5m14-2c1.1 0 2-.9 2-2h-2m0-6h2V7h-2m0 6h2v-2h-2M9 17v-2H7c0 1.1.9 2 2 2zm4-14h-2v2h2m6-2v2h2c0-1.1-.9-2-2-2zm-6 12h-2v2h2M9 3c-1.1 0-2 .9-2 2h2m0 6H7v2h2m0-6H7v2h2V7z' })
    )
  );
};

exports.default = Icon;