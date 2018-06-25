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
      _react2.default.createElement('path', { d: 'M3 3h18v2c-1.1 0-2 .9-2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V7c0-1.1-.9-2-2-2V3zm4 2v2h5v1H7v1h3v1H7v1h3v1H7v1h5v1H7v1h3v1H7v3h10V5H7z' })
    )
  );
};

exports.default = Icon;