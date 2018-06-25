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
      _react2.default.createElement('path', { d: 'M7 2l4 4H8v4H6V6H3l4-4zm10 8l-4-4h3V2h2v4h3l-4 4zM7 12h10c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2zm0 2v6h10v-6H7z' })
    )
  );
};

exports.default = Icon;