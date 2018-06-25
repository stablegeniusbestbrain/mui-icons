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
      _react2.default.createElement('path', { d: 'M10 2c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h1v2H2v2h4v2H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2H8v-2h8v2h-1c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2h-1v-2h4v-2h-9V9h1c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-4zm0 2h4v3h-4V4zM5 17h4v3H5v-3zm10 0h4v3h-4v-3z' })
    )
  );
};

exports.default = Icon;