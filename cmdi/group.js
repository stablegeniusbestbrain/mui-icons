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
      _react2.default.createElement('path', { d: 'M8 8v4h5V8H8zM1 1h4v1h14V1h4v4h-1v14h1v4h-4v-1H5v1H1v-4h1V5H1V1zm4 18v1h14v-1h1V5h-1V4H5v1H4v14h1zM6 6h9v4h3v8H8v-4H6V6zm9 8h-5v2h6v-4h-1v2z' })
    )
  );
};

exports.default = Icon;