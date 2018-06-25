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
      _react2.default.createElement('path', { d: 'M19 19c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2v-6H3v-3h18v3h-2v6zM6 6h2v2H6V6zm5 0h2v2h-2V6zm5 0h2v2h-2V6zm2-3h2v2h-2V3zm-5 0h2v2h-2V3zM8 3h2v2H8V3z' })
    )
  );
};

exports.default = Icon;