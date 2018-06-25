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
      _react2.default.createElement('path', { d: 'M1.3 1.7L0 3l2 2v17l4-4h9l5.7 5.7 1.3-1.2L1.3 1.7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.1L10 7.9V6h8v2h-7.9l1 1H18v2h-4.9l7 7c1-.1 1.9-.9 1.9-2V4c0-1.1-.9-2-2-2z' })
    )
  );
};

exports.default = Icon;