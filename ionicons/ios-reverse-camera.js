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
      _react2.default.createElement(
        'g',
        { style: { transform: 'scale(0.045)' } },
        _react2.default.createElement('path', { d: 'M417.5 160h-61.725c-32.105-36-42.22-48-54.525-48h-88.5c-12.314 0-22.167 12-54.52 48H145v-16h-34v16H97.5C79.855 160 64 173.217 64 190.684v176.018C64 384.17 79.855 400 97.5 400h320c17.645 0 30.5-15.83 30.5-33.3V190.685C448 173.217 435.145 160 417.5 160zM313.076 330.782C297.17 344.434 276.9 352 256 352c-45.487 0-82.51-36-87.205-78h-29.48l37.535-50 38.87 50h-30.61c4.604 33 34.53 61.965 70.89 61.965 16.86 0 32.7-6.327 45.815-17.356l2.032-1.648 11.6 11.662-2.37 2.158zm22.018-23.557L296.248 256h30.644c-4.617-35-34.548-63.797-70.89-63.797-16.62 0-32.89 6.133-45.815 17.005l-2.033 1.706-11.6-11.61 2.372-2.052c15.905-13.65 36.175-21.206 57.075-21.206 22.334 0 43.55 8.063 59.737 22.84 15.538 14.178 25.23 37.114 27.47 57.114h29.512l-37.626 51.225z' })
      )
    )
  );
};

exports.default = Icon;