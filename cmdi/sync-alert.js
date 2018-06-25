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
      _react2.default.createElement('path', { d: 'M11 13h2V7h-2m10-3h-6v6l2.2-2.2c1.1 1 1.8 2.5 1.8 4.2 0 2.6-1.7 4.8-4 5.6v2.1c3.4-.9 6-4 6-7.7 0-2.2-.9-4.2-2.4-5.6M11 17h2v-2h-2m-8-3c0 2.2.9 4.2 2.4 5.6L3 20h6v-6l-2.2 2.2C5.7 15.2 5 13.7 5 12c0-2.6 1.7-4.8 4-5.7v-2c-3.5.9-6 4-6 7.7z' })
    )
  );
};

exports.default = Icon;