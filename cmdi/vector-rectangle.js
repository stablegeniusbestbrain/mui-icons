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
      _react2.default.createElement('path', { d: 'M2 4h6v2h8V4h6v6h-2v4h2v6h-6v-2H8v2H2v-6h2v-4H2V4zm14 6V8H8v2H6v4h2v2h8v-2h2v-4h-2zM4 6v2h2V6H4zm14 0v2h2V6h-2zM4 16v2h2v-2H4zm14 0v2h2v-2h-2z' })
    )
  );
};

exports.default = Icon;