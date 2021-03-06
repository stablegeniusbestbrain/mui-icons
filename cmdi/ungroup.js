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
      _react2.default.createElement('path', { d: 'M2 2h4v1h7V2h4v4h-1v3h2V8h4v4h-1v6h1v4h-4v-1h-6v1H8v-4h1v-2H6v1H2v-4h1V6H2V2zm16 10v-1h-2v2h1v4h-4v-1h-2v2h1v1h6v-1h1v-6h-1zm-5-6V5H6v1H5v7h1v1h3v-2H8V8h4v1h2V6h-1zm-1 6h-1v2h2v-1h1v-2h-2v1z' })
    )
  );
};

exports.default = Icon;