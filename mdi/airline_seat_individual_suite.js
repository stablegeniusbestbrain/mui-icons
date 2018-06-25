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
      _react2.default.createElement('path', { d: 'M7 13c1.7 0 3-1.3 3-3S8.7 7 7 7s-3 1.3-3 3 1.3 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.2-1.8-4-4-4z' })
    )
  );
};

exports.default = Icon;