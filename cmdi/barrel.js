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
      _react2.default.createElement('path', { d: 'M18 19h1v2H5v-2h1v-6H5v-2h1V5H5V3h14v2h-1v6h1v2h-1v6zm-9-6c0 1.7 1.3 3 3 3s3-1.3 3-3c0-2-3-5.4-3-5.4S9 11 9 13z' })
    )
  );
};

exports.default = Icon;