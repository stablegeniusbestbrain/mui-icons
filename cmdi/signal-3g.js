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
      _react2.default.createElement('path', { d: 'M11 16.5v-2.2C11 13 10 12 8.8 12 10 12 11 11 11 9.8V7.5c0-1.7-1.3-3-3-3H2v3h6v3H5v3h3v3H2v3h6c1.7 0 3-1.3 3-3zm11 0v-6h-4.5v3H19v3h-3v-9h6v-3h-6c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h3c1.7 0 3-1.3 3-3z' })
    )
  );
};

exports.default = Icon;