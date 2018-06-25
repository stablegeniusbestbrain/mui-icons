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
      _react2.default.createElement('path', { d: 'M2 2h2v18h18v2H2V2zm12 12.5L12 18H7.9l-2-3.5 2-3.5H12l2 3.5zm.1-8l-2 3.5H8L6 6.5 8 3h4.1l2 3.5zm7.2 4L19.2 14h-4l-2-3.5 2-3.5h4l2.1 3.5z' })
    )
  );
};

exports.default = Icon;