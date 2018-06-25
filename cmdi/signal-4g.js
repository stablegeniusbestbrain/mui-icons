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
      _react2.default.createElement('path', { d: 'M22 16.5v-6h-4.5v3H19v3h-3v-9h6v-3h-6c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h3c1.7 0 3-1.3 3-3zm-14 3h3v-15H8v6H5v-6H2v9h6v6z' })
    )
  );
};

exports.default = Icon;